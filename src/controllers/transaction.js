const deipRpc = require('@deip/rpc-client');

const getTransaction = async (ctx) => {
  const { id } = ctx.params;

  const transaction = await deipRpc.api.getTransactionAsync(id);
  if (!transaction) {
    ctx.throw(404, 'Transaction not found');
  }

  ctx.status = 200;
  ctx.body = { transaction };
};

module.exports = {
  getTransaction,
}
