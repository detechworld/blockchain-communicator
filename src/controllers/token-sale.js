const deipRpc = require('@deip/rpc-client');

const getTokenSale = async (ctx) => {
  const { tokenSaleId } = ctx.params;

  const result = await deipRpc.api.getResearchTokenSaleContributionsByResearchTokenSaleAsync(tokenSaleId);
  const second = await deipRpc.api.getResearchTokenSaleAsync(tokenSaleId);

  ctx.status = 200;
  ctx.body = { result,second };
};

module.exports = {
  getTokenSale,
}
