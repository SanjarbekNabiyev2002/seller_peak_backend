const { Yetkazuvchi } = require('../models/init-models');
const HttpException = require('../utils/HttpException.utils');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secret_jwt } = require('../startup/config');
const BaseController = require('./BaseController');
const { MyUser, MainUser } = require('../utils/userRoles.utils');
const { Op } = require('sequelize');

/******************************************************************************
 *                              Yetkazuvchi Controller
 ******************************************************************************/
class YetkazuvchiController extends BaseController {
    all = async (req, res, next) => {
        const model = await Yetkazuvchi.findAll()
        res.send(model)
    }

    create = async (req, res, next) => {
        const model = await Yetkazuvchi.create({
            id: req.params.id,
            fullname: req.body.fullname
        })

        res.send({
            success: true,
            message: "Agent create",
            data: model
        });
    };

    delete = async (req, res, next) => {
        await Yetkazuvchi.destroy({
            where: {
                id: req.params.id
            }
        })

        res.send('Tanlangan ma\'lumot o\'chirildi')
    }
}

module.exports = new YetkazuvchiController;