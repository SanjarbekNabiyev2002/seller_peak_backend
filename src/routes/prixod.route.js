const express = require('express');
const router = express.Router();
const prixodController = require('../controllers/prixod.controller');
const auth = require('../middleware/auth.middleware');
const Role = require('../utils/userRoles.utils');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const joiMiddleware = require('../middleware/joi.middleware');

router.get('/all', auth(), awaitHandlerFactory(prixodController.prixodAll))
router.get('/select/:id', auth(), awaitHandlerFactory(prixodController.prixodOne))
router.post('/create', auth(), awaitHandlerFactory(prixodController.prixodCreate))
router.patch('/update/:id', auth(), awaitHandlerFactory(prixodController.prixodUpdate))
router.delete('/delete/:id', auth(), awaitHandlerFactory(prixodController.prixodDelete))

module.exports = router;