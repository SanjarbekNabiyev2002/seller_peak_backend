const { Paytype } = require('../models/init-models');
const HttpException = require('../utils/HttpException.utils');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secret_jwt } = require('../startup/config');
const BaseController = require('./BaseController');
const { MyUser, MainUser } = require('../utils/userRoles.utils');
const { Op } = require('sequelize');

/******************************************************************************
 *                              PayType Controller
 ******************************************************************************/
class PayTypeController extends BaseController {
    all = async (req, res, next) => {
        const model = await Paytype.findAll();
        
        res.send(model)
    }

}

module.exports = new PayTypeController;