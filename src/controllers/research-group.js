const deipRpc = require('@deip/rpc-client');

const getResearchGroup = async (ctx) => {
  const { externalId } = ctx.params;

  const researchGroups = await deipRpc.api.getResearchGroupsAsync([externalId]);
  if (!researchGroups[0]) {
    ctx.throw(404, 'User not found');
  }

  ctx.status = 200;
  ctx.body = { user: researchGroups[0] };
};

module.exports = {
  getResearchGroup,
}
