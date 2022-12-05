const { Type } = require('../models/init-models');
const HttpException = require('../utils/HttpException.utils');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secret_jwt } = require('../startup/config');
const BaseController = require('./BaseController');
const { MyUser, MainUser } = require('../utils/userRoles.utils');
const { Op } = require('sequelize');

/******************************************************************************
 *                              Type Controller
 ******************************************************************************/
class TypeController extends BaseController {
    all = async (req, res, next) => {
        const model = await Type.findAll()
        res.send(model)
    }
}

module.exports = new TypeController;