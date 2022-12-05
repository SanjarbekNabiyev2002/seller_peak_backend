const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const auth = require('../middleware/auth.middleware');
const Role = require('../utils/userRoles.utils');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const joiMiddleware = require('../middleware/joi.middleware');

router.get('/all', awaitHandlerFactory(productController.productAll))
router.get('/:id', awaitHandlerFactory(productController.productOne))
router.post('/create', awaitHandlerFactory(productController.productCreate))
router.delete('/delete/:id', awaitHandlerFactory(productController.productDelete))

module.exports = router;