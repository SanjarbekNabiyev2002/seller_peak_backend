const { Role } = require('../models/init-models');
const HttpException = require('../utils/HttpException.utils');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secret_jwt } = require('../startup/config');
const BaseController = require('./BaseController');
const { MyUser, MainUser } = require('../utils/userRoles.utils');
const { Op } = require('sequelize');

/******************************************************************************
 *                              Role Controller
 ******************************************************************************/
class RoleConrtoller extends BaseController {
    roleAll = async (req, res, next) => {
        const roles = await Role.findAll();
        res.send(roles)
    }
}

/******************************************************************************
 *                               Export
 ******************************************************************************/
 module.exports = new RoleConrtoller;