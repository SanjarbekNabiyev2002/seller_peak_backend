const express = require('express');
const router = express.Router();
const yetkazuvchiController = require('../controllers/yetkazuvchi.controller');
const auth = require('../middleware/auth.middleware');
const Role = require('../utils/userRoles.utils');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const joiMiddleware = require('../middleware/joi.middleware');

router.get('/all', awaitHandlerFactory(yetkazuvchiController.all))
router.post('/create', awaitHandlerFactory(yetkazuvchiController.create))
router.delete('/delete/:id', awaitHandlerFactory(yetkazuvchiController.delete))

module.exports = router;