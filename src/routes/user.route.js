const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const auth = require('../middleware/auth.middleware');
const Role = require('../utils/userRoles.utils');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const joiMiddleware = require('../middleware/joi.middleware');
const { userSchemas } = require('../middleware/validators/userValidator.middleware');


router.get('/all', auth(), awaitHandlerFactory(userController.userAll));
router.get('/user/:id', auth(), awaitHandlerFactory(userController.userOne));
router.post('/create', joiMiddleware(userSchemas.create), awaitHandlerFactory(userController.userCreate));
router.patch('/update/:id', auth(Role.Admin), joiMiddleware(userSchemas.update), awaitHandlerFactory(userController.userUpdate));
router.delete('/delete/:id', auth(Role.Admin), awaitHandlerFactory(userController.userDelete));
router.get('/whoami', auth(), awaitHandlerFactory(userController.getCurrentUser));
// router.get('/username/:username', auth(), awaitHandlerFactory(userController.getByUsername));

router.post('/login', joiMiddleware(userSchemas.login), awaitHandlerFactory(userController.userLogin));

module.exports = router;