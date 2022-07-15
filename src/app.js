const Koa = require('koa');
const json = require('koa-json');
const koaBodyParser = require('koa-bodyparser');

const config = require('./config');
const apiRouter = require('./routes/api');

const initMongo = require('./data-storage/mongo');
const initBlockchain = require('./data-storage/blockchain');

initMongo();
initBlockchain();

const app = new Koa();

app.use(koaBodyParser());
app.use(json());

app.use(apiRouter.routes());

app.use(ctx => {
  ctx.body = 'Hello World';
});

app.listen(3004, () => {
  console.log('Running on http://localhost:3004');
  console.log('Started with config: ', config);
});
