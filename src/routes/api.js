const Router = require('koa-router');
const userController = require('../controllers/user');
const researchGroupController = require('../controllers/research-group');

const router = new Router();

router.get('/users/:username', userController.getUser);

router.get('/research-group/:externalId', researchGroupController.getResearchGroup);

module.exports =  router;
