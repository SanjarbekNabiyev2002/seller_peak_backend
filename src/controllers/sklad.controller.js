const { Sklad } = require('../models/init-models');
const HttpException = require('../utils/HttpException.utils');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secret_jwt } = require('../startup/config');
const BaseController = require('./BaseController');
const { MyUser, MainUser } = require('../utils/userRoles.utils');
const { Op } = require('sequelize');

/******************************************************************************
 *                              Sklad Controller
 ******************************************************************************/
class SkladController extends BaseController {
    skladAll = async (req, res, next) => {
        const model = await Sklad.findAll()

        res.send(model)
    }
}

module.exports = new SkladController;