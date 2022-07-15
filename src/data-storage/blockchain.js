const deipRpc = require('@deip/rpc-client');
const config = require('../config');

module.exports = () => {
  deipRpc.api.setOptions({ url: config.DEIP_FULL_NODE_URL, reconnectTimeout: 3000 });
  deipRpc.config.set('chain_id', config.CHAIN_ID);
};
