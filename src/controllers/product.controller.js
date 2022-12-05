const { Product } = require('../models/init-models');
const HttpException = require('../utils/HttpException.utils');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secret_jwt } = require('../startup/config');
const BaseController = require('./BaseController');
const { MyUser, MainUser } = require('../utils/userRoles.utils');
const { Op } = require('sequelize');
const moment = require('moment');
const { request } = require('express');

/******************************************************************************
 *                              Product Controller
 ******************************************************************************/
class ProductController extends BaseController {
    productAll = async (req, res, next) => {
        const model = await Product.findAll()

        res.send(model)
    }

    productOne = async (req, res, next) => {
        const model = await Product.findOne({
            where: {
                id: req.params.id
            }
        })

        res.send(model)
    }

    productCreate = async (req, res, next) => {
        this.checkValidation(req)

        const model = await Product.create({
            id: req.params.id,
            name: req.body.name,
        })

        if (!model) {
            throw new HttpException(500, req.mf('Nimadir noto\'g\'ri bajarildi'))
        };

        res.send({
            success: true,
            message: "Product create",
            data: model
        });
    }

    productDelete = async (req, res, next) => {
        await Product.destroy({
            where: {
                id: req.params.id
            }
        })

        res.send('Tanlangan ma\'lumot o\'chirildi')
    }
}

module.exports = new ProductController;