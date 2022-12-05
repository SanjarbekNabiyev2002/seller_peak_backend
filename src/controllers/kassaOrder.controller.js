const { Kassaorder, KassaorderTable, Sklad } = require('../models/init-models');
const HttpException = require('../utils/HttpException.utils');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secret_jwt } = require('../startup/config');
const BaseController = require('./BaseController');
const { MyUser, MainUser } = require('../utils/userRoles.utils');
const sequelize = require('sequelize');

/******************************************************************************
 *                              Kassaorder Controller
 ******************************************************************************/
class KassaOrderController extends BaseController {
    create = async (req, res, next) => {
        const { kassa_order_table, ...kassa_order } = req.body
        const time = Math.floor(new Date().getTime() / 1000)

        const model = await Kassaorder.create({
            fakt: kassa_order.fakt,
            vaqt: time,
            sklad_id: kassa_order.sklad_id,
            summaUZB: kassa_order.summaUZB,
            summaUSD: kassa_order.summaUSD
        })

        for(let i = 0; i < kassa_order_table.length; i++) {
            kassa_order_table[i].kassaOrder_id = model.id
            await KassaorderTable.create(kassa_order_table[i])
        }

        res.send({
            success: true,
            message: "Kassa create",
            data: model
        });
    }

    all = async (req, res, next) => {
        const model = await Kassaorder.findAll(
            {
                attributes: [
                    'id',
                    'vaqt',
                    [sequelize.literal('sklad.nomi'), 'ombor'],
                ],
                include: [
                    {
                        model: Sklad,
                        as: 'sklad',
                        attributes: []
                    },
                ]
            }
        );

        res.send(model)
    }

    one = async (req, res, next) => {
        const model = await Kassaorder.findOne({
            where: {
                id: req.params.id
            }
        })

        res.send(model)
    }

    delete = async (req, res, next) => {
        await Kassaorder.destroy({
            where: {
                id: req.params.id
            }
        })

        model.send('Tanlangan ma\'lumot o\'irildi')
    }
}

module.exports = new KassaOrderController;