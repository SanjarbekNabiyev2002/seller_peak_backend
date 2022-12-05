const express = require('express');
const router = express.Router();
const roleConrtoller = require('../controllers/role.controller');
const auth = require('../middleware/auth.middleware');
const Role = require('../utils/userRoles.utils');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const joiMiddleware = require('../middleware/joi.middleware');

router.get('/role', awaitHandlerFactory(roleConrtoller.roleAll));

module.exports = router;