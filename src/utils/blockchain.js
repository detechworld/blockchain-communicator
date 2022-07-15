const deipRpc = require('@deip/rpc-client');

const config = require('../config');

const getRefBlockSummary = async () => {
  let refBlockNum;
  let refBlockPrefix;

  return deipRpc.api.getDynamicGlobalPropertiesAsync()
    .then((res, error) => {
      if (error) throw new Error(error);
      // eslint-disable-next-line no-bitwise
      refBlockNum = (res.last_irreversible_block_num - 1) & 0xFFFF;
      return deipRpc.api.getBlockHeaderAsync(res.last_irreversible_block_num);
    })
    .then((res, error) => {
      if (error) throw new Error(error);
      // eslint-disable-next-line no-buffer-constructor
      refBlockPrefix = new Buffer(res.previous, 'hex').readUInt32LE(4);
      return { refBlockNum, refBlockPrefix };
    });
};

const signOperations = async (operations, privKey, refBlock = {}) => {
  const { refBlockNum, refBlockPrefix } = refBlock;

  const refBlockPromise = refBlockNum && refBlockPrefix
    ? Promise.resolve({ refBlockNum, refBlockPrefix })
    : getRefBlockSummary();

  return refBlockPromise
    .then(({ refBlockNum: blockNumber, refBlockPrefix: blockPrefix }) => {
      const nowPlus1Hour = new Date().getTime() + 3e6;
      const expire = new Date(nowPlus1Hour).toISOString().split('.')[0];

      const tx = {
        expiration: expire,
        extensions: [],
        operations,
        ref_block_num: blockNumber,
        ref_block_prefix: blockPrefix,
      };

      return deipRpc.auth.signTransaction(tx, { owner: privKey }, {
        tenant: config.TENANT_REGACC,
        tenantPrivKey: config.TENANT_REGACC_PRIV_KEY,
      });
    });
};

const sendTransactionAsync = async (tx) => new Promise((resolve, reject) => {
  deipRpc.api.broadcastTransactionSynchronous(tx, (error, result) => {
    if (error) {
      console.log('Send Transaction error', error);
      reject(error);
    } else {
      resolve(result);
    }
  });
});

const getBlock = async (blockNum) => new Promise((resolve, reject) => {
  deipRpc.api.getBlock(blockNum, (error, result) => {
    if (error) {
      return reject(error);
    }
    return resolve(result);
  });
});

const getTransaction = (trxId) => new Promise((resolve, reject) => {
  deipRpc.api.getTransaction(trxId, (error, result) => {
    if (error) {
      return reject(error);
    }
    return resolve(result);
  });
});

const extractOperationsFromProposal = (proposal, result) => {
  for (let i = 0; i < proposal.proposed_ops.length; i += 1) {
    const [op_name, op_payload] = proposal.proposed_ops[i].op;
    result.push([op_name, op_payload, proposal]);

    if (op_name === 'create_proposal') {
      extractOperationsFromProposal(op_payload, result);
    }
  }
};

const extractOperations = (tx) => {
  const result = [];

  for (let i = 0; i < tx.operations.length; i += 1) {
    const [op_name, op_payload] = tx.operations[i];

    result.push([op_name, op_payload, null]);

    if (op_name === 'create_proposal') {
      extractOperationsFromProposal(op_payload, result);
    }
  }

  return result;
};

module.exports = {
  getBlock,
  getTransaction,
  getRefBlockSummary,
  sendTransactionAsync,
  signOperations,
  extractOperations,
};
