const deipRpc = require('@deip/rpc-client');

const getResearch = async (ctx) => {
  const { externalId } = ctx.params;

  const researches = await deipRpc.api.getResearchesAsync([externalId]);
  if (!researches[0]) {
    ctx.throw(404, 'Research not found');
  }

  ctx.status = 200;
  ctx.body = { user: researches[0] };
};

module.exports = {
  getResearch,
}
