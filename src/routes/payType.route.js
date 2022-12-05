const express = require('express');
const router = express.Router();
const payTypeController = require('../controllers/payType.controller');
const auth = require('../middleware/auth.middleware');
const Role = require('../utils/userRoles.utils');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const joiMiddleware = require('../middleware/joi.middleware');

router.get('/all', awaitHandlerFactory(payTypeController.all))

module.exports = router;