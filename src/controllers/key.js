const deipRpc = require('@deip/rpc-client');

const getAccountKeys = async (ctx) => {
  const { account } = ctx.params;

  const result = deipRpc.auth.getPrivateKeys(
    account,
    'DEIP',
    ['owner'],
  );

  ctx.status = 200;
  ctx.body = { result };
}

module.exports = {
  getAccountKeys,
}
