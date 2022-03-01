const deipRpc = require('@deip/rpc-client');

const getUser = async (ctx) => {
  const { username } = ctx.params;

  const chainAccounts = await deipRpc.api.getAccountsAsync([username]);
  if (!chainAccounts[0]) {
    ctx.throw(404, 'User not found');
  }

  ctx.status = 200;
  ctx.body = { user: chainAccounts[0] };
};

module.exports = {
  getUser,
}
