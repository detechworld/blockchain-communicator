const Koa = require('koa');
const json = require('koa-json')
const deipRpc = require('@deip/rpc-client');

const config = require('./config');
const apiRouter = require('./routes/api');

console.log(config);

deipRpc.api.setOptions({ url: config.DEIP_FULL_NODE_URL, reconnectTimeout: 3000 });
deipRpc.config.set('chain_id', config.CHAIN_ID);

const app = new Koa();

app.use(json())
app.use(apiRouter.routes());

app.use(ctx => {
  ctx.body = 'Hello World';
});

app.listen(3004, () => {
  console.log('Running on http://localhost:3004');
});
