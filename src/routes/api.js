const Router = require('koa-router');

const ndaController = require('../controllers/nda');
const userController = require('../controllers/user');
const tokenSaleController = require('../controllers/token-sale')
const researchController = require('../controllers/research');
const researchGroupController = require('../controllers/research-group');
const transactionController = require('../controllers/transaction');
const assetController = require('../controllers/asset');

const router = new Router();

router.get('/users/:username', userController.getUser);

router.get('/research-groups/:externalId', researchGroupController.getResearchGroup);

router.get('/researches/:externalId', researchController.getResearch);

router.get('/nda/:researchExternalId', ndaController.getNda);

router.get('/token-sale/:tokenSaleId', tokenSaleController.getTokenSale);

router.get('/transactions/:id', transactionController.getTransaction)

router.get('/assets', assetController.getAssets)

router.get('/assets/:symbol', assetController.getAssetBySymbol)

module.exports =  router;
