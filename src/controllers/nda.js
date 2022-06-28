const deipRpc = require('@deip/rpc-client');

const getNda = async (ctx) => {
  const { researchExternalId } = ctx.params;

  const first = await deipRpc.api.getContributionsHistoryByContributorAsync(researchExternalId);
  const second = await deipRpc.api.getResearchTokenSaleContributionsByContributorAsync(researchExternalId);

  ctx.status = 200;
  ctx.body = { first, second };
};

module.exports = {
  getNda,
}
