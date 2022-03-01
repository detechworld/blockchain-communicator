const dotenv = require('dotenv');

const env = (process.env.USE_LOCAL_CONFIG || process.env.USE_CONFIG || process.env.NODE_ENV === 'local')
  ? 'local'
  : process.env.NODE_ENV || 'development';

let path = '.local.env';
if (env === 'demo') {
  path = '.demo.env';
} else if (env === 'development') {
  path = '.dev.env';
} else if (process.env.USE_CONFIG) {
  path = `.${process.env.USE_CONFIG}.env`;
}

dotenv.config({
  path: `${__dirname}/${path}`,
});

const config = {
  ENVIRONMENT: env,

  DEIP_FULL_NODE_URL: process.env.DEIP_FULL_NODE_URL,
  CHAIN_ID: process.env.CHAIN_ID,

  TENANT: process.env.TENANT,
  TENANT_PRIV_KEY: process.env.TENANT_PRIV_KEY,
};

module.exports = config;
