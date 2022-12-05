const { Prixod, PrixodTable } = require('../models/init-models');
const HttpException = require('../utils/HttpException.utils');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secret_jwt } = require('../startup/config');
const BaseController = require('./BaseController');
const { MyUser, MainUser } = require('../utils/userRoles.utils');
const { Op } = require('sequelize');
const moment = require('moment');
const sequelize = require('sequelize');
const db_sequelize = require('../db/db-sequelize')

/******************************************************************************
 *                              Report Controller
 ******************************************************************************/
class ReportController extends BaseController {
    prixodTableCount = async (req, res, next) => {
        const model = await db_sequelize.query(
            "SELECT `prixod_table`.id as `№`, SUM(`soni`) as `Soni` FROM `prixod_table`",
            {model: PrixodTable}
        )

        res.send(model)
    }
}

module.exports = new ReportController;