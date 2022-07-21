const Router = require('koa-router');

const keyController = require('../controllers/key');
const ndaController = require('../controllers/nda');
const userController = require('../controllers/user');
const assetController = require('../controllers/asset');
const researchController = require('../controllers/research');
const tokenSaleController = require('../controllers/token-sale')
const transactionController = require('../controllers/transaction');
const researchGroupController = require('../controllers/research-group');

const router = new Router();

router.get('/users/:username', userController.getUser);

router.post('/users', userController.createAdminUser);

router.get('/research-groups/:externalId', researchGroupController.getResearchGroup);

router.get('/researches/:externalId', researchController.getResearch);

router.get('/nda/:researchExternalId', ndaController.getNda);

router.get('/token-sale/:tokenSaleId', tokenSaleController.getTokenSale);

router.get('/transactions/:id', transactionController.getTransaction);

router.get('/assets', assetController.getAssets);

router.get('/assets/:symbol', assetController.getAssetBySymbol);

router.get('/keys/:account', keyController.getAccountKeys);

module.exports =  router;
