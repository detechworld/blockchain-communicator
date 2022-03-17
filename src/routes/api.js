const Router = require('koa-router');
const userController = require('../controllers/user');
const researchController = require('../controllers/research');
const researchGroupController = require('../controllers/research-group');

const router = new Router();

router.get('/users/:username', userController.getUser);

router.get('/research-groups/:externalId', researchGroupController.getResearchGroup);

router.get('/researches/:externalId', researchController.getResearch);

module.exports =  router;
