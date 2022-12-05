const express = require('express');
const router = express.Router();
const kassaOrderController = require('../controllers/kassaOrder.controller');
const auth = require('../middleware/auth.middleware');
const Role = require('../utils/userRoles.utils');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const joiMiddleware = require('../middleware/joi.middleware');

router.post('/create', awaitHandlerFactory(kassaOrderController.create))
router.get('/all', awaitHandlerFactory(kassaOrderController.all))
router.get('/:id', awaitHandlerFactory(kassaOrderController.one))
router.delete('/delete/:id', awaitHandlerFactory(kassaOrderController.delete))
module.exports = router;