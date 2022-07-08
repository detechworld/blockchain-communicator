const deipRpc = require('@deip/rpc-client');

const getAssets = async (ctx) => {
  const assets = await deipRpc.api.lookupAssetsAsync('', 1000);

  ctx.status = 200;
  ctx.body = { assets };
};

const getAssetBySymbol = async (ctx) => {
  const { symbol } = ctx.params;

  const asset = await deipRpc.api.getAssetBySymbolAsync(symbol);

  ctx.status = 200;
  ctx.body = { asset };
}

module.exports = {
  getAssets,
  getAssetBySymbol,
}
