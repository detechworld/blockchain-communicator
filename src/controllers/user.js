const crypto = require('@deip/lib-crypto');
const Tenant = require('../schemas/tenant.schema');
const User = require('../schemas/user.schema');
const ResearchGroup = require('../schemas/research-group.schema');
const Discipline = require('../schemas/discipline.schema');

const deipRpc = require('@deip/rpc-client');
const config = require('../config');
const blockchain = require('../utils/blockchain');
const tenantSettings = require('../utils/tenant-settings');

const getUser = async (ctx) => {
  const { username } = ctx.params;

  const chainAccounts = await deipRpc.api.getAccountsAsync([username]);
  if (!chainAccounts[0]) {
    ctx.throw(404, 'User not found');
  }

  ctx.status = 200;
  ctx.body = { user: chainAccounts[0] };
};

const createUserOperation = (username, userPublicKey, userPrivateKey) => {

  console.log('userPublicKey', userPublicKey);
  console.log('userPrivateKey', userPrivateKey);

  const owner = {
    weight_threshold: 1,
    account_auths: [],
    key_auths: [[userPublicKey, 1]]
  };

  return ['create_account', {
    fee: config.FAUCET_ACCOUNT.fee,
    creator: config.FAUCET_ACCOUNT.username,
    new_account_name: username,
    owner,
    active: owner,
    active_overrides: [],
    memo_key: userPublicKey,
    json_metadata: undefined,
    traits: [],
    extensions: [],
  }];
}

const createTenantOperation = async (tenantName, username) => {
  const { ownerPubkey: publicKey, owner: privateKey } = deipRpc.auth.getPrivateKeys(
    tenantName,
    'DEIP',
    ['owner'],
  );

  console.log('tenantPublicKey', publicKey);
  console.log('tenantPrivateKey', privateKey);

  const owner = {
    weight_threshold: 1,
    account_auths: [[username, 1]],
    key_auths: [[publicKey, 1]]
  };

  const refBlock = await blockchain.getRefBlockSummary();

  const [research_group_external_id, create_account_op] = deipRpc.operations.createEntityOperation(['create_account', {
    fee: config.FAUCET_ACCOUNT.fee,
    creator: username,
    owner,
    active: owner,
    active_overrides: [],
    memo_key: publicKey,
    json_metadata: undefined,
    traits: [[
      'research_group',
      {
        description: crypto.hexify(crypto.sha256(new TextEncoder('utf-8').encode(tenantName).buffer)),
        extensions: []
      }
    ]],
    extensions: []
  }], refBlock);

  return { op: create_account_op, tenantId: research_group_external_id };
}

const createTenant = async (tenantId, tenantName, shortName, serverUrl) => {
  const tenant = new Tenant({
    _id: tenantId,
    name: tenantName,
    shortName,
    description: "",
    email: "",
    network: { nodes: [], scope: [tenantId], isVisible : false },
    settings: tenantSettings(),
    serverUrl,
    logo : "default-logo.png",
    banner : "default-tenant-banner.png"
  });

  const savedTenantProfile = await tenant.save();
  return savedTenantProfile.toObject();
}

const createAdmin = async (username, firstName, lastName, tenantId) => {
  const user = new User({
    _id: username,
    location: {},
    email: `${username}@detech.world`,
    firstName,
    lastName,
    bio: "",
    education: [],
    employment: [],
    roles: [{
      researchGroupExternalId: tenantId,
      role: "admin"
    }],
    status: "approved",
    phoneNumbers: [],
    webPages: [],
    birthdate: null,
    foreignIds: [],
    occupation: "",
    category: "",
    signUpPubKey: "",
    tenantId,
  });

  const researchGroup = new ResearchGroup({
    _id: username,
    description: username,
    researchAreas: [],
    creator: username,
    name: username,
    tenantId,
  });

  await researchGroup.save();

  const savedUser = await user.save();
  return savedUser.toObject();
}

const createDisciplines = (tenantId) => {
  const chemistry = new Discipline({
    _id: "6a8b20f002a7dedf7b873dbc86e0b0051d4fa898",
    multiTenantIds: [tenantId],
    parentExternalId: "",
    name: "Chemistry",
    tenantId: "0000000000000000000000000000000000000000",
  });
  const common = new Discipline({
    _id: "6c4bb3bcf1a88e3b51de88576d592f1f980c5bbb",
    multiTenantIds: [tenantId],
    parentExternalId: "",
    name: "Common",
    tenantId: "0000000000000000000000000000000000000000"
  })
  const biology = new Discipline({
    "_id" : "7c3d37cbfea2513a7e03e674448bbeee8ae3d862",
    multiTenantIds: [tenantId],
    parentExternalId: "",
    name: "Biology",
    tenantId: "0000000000000000000000000000000000000000"
  })
  const physics = new Discipline({
    "_id" : "9f0224709d86e02b9625b5ebf2786b80ba6bed17",
    multiTenantIds: [tenantId],
    parentExternalId: "",
    name: "Physics",
    tenantId: "0000000000000000000000000000000000000000"
  });
  const earthSciences = new Discipline({
    "_id" : "a47bf84ac30d0843accb737d5924434ef3ed0517",
    multiTenantIds: [tenantId],
    parentExternalId: "",
    name: "Earth sciences",
    tenantId: "0000000000000000000000000000000000000000"
  });
  return Discipline.bulkSave([
    chemistry,
    common,
    biology,
    physics,
    earthSciences
  ])
}

const createAdminUser = async (ctx) => {
  const { firstName, lastName, username, tenantName, tenantShortName, serverUrl } = ctx.request.body;

  const { ownerPubkey: userPublicKey, owner: userPrivateKey } = deipRpc.auth.getPrivateKeys(
    username,
    'DEIP',
    ['owner'],
  );

  const operations = [
    createUserOperation(username, userPublicKey, userPrivateKey),
  ]

  const { op, tenantId } = await createTenantOperation(tenantName, username);

  operations.push(op);

  let signedTx = await blockchain.signOperations(operations, config.FAUCET_ACCOUNT.wif);
  signedTx = deipRpc.auth.signTransaction(signedTx, { owner: userPrivateKey });
  const tx = await blockchain.sendTransactionAsync(signedTx);

  const tenant = await createTenant(tenantId, tenantName, tenantShortName, serverUrl);
  const admin = await createAdmin(username, firstName, lastName, tenantId);

  const disciplinesCount = await Discipline.count();
  if (disciplinesCount === 0) {
    await createDisciplines(tenantId);
  } else {
    await Discipline.updateMany({}, { $push: { multiTenantIds: tenantId } });
  }

  ctx.status = 200;
  ctx.body = { transaction: tx };
}

module.exports = {
  getUser,
  createAdminUser,
}
