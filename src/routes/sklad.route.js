const express = require('express');
const router = express.Router();
const skladController = require('../controllers/sklad.controller');
const auth = require('../middleware/auth.middleware');
const Role = require('../utils/userRoles.utils');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const joiMiddleware = require('../middleware/joi.middleware');

router.get('/all', awaitHandlerFactory(skladController.skladAll));

module.exports = router;