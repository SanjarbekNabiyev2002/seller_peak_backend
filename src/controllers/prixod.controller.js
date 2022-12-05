const { Prixod, PrixodTable, Sklad, Yetkazuvchi, Paytype } = require('../models/init-models');
const HttpException = require('../utils/HttpException.utils');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secret_jwt } = require('../startup/config');
const BaseController = require('./BaseController');
const { MyUser, MainUser } = require('../utils/userRoles.utils');
const { Op } = require('sequelize');
const moment = require('moment');
const sequelize = require('sequelize');
const db_sequelize = require('../db/db-sequelize');
const yetkazuvchi = require('../models/yetkazuvchi');

/******************************************************************************
 *                              Prixod Controller
 ******************************************************************************/
class PrixodController extends BaseController {
    prixodAll = async (req, res, next) => {
        const model = await Prixod.findAll({
            attributes: [
                'id',
                'vaqt',
                'summa',
                'soni',
                [sequelize.literal('sklad.nomi'), 'ombor'],
                [sequelize.literal('payType.name'), 'payme'],
                [sequelize.literal('yetkazuvchi.fullname'), 'agent'],
            ],
            include: [
                {
                    model: Sklad,
                    as: 'sklad',
                    attributes: []
                },
                {
                    model: Yetkazuvchi,
                    as: 'yetkazuvchi',
                    attributes: []
                },
                {
                    model: Paytype,
                    as: 'payType',
                    attributes: []
                },
            ]
        })
        res.send(model)
    };

    prixodOne = async (req, res, next) => {
        const model = await Prixod.findOne({
            include: [
                {model: PrixodTable, as: 'prixod_tables'}
            ],
            where: {
                id: req.params.id
            }
        })

        res.send({
            success: true,
            message: 'One Prixod',
            data: model
        })
    };

    prixodCreate = async (req, res, next) => {
        this.checkValidation(req)
        const { prixod_table, ...prixod } = req.body
        const time = Math.floor(new Date().getTime() / 1000)

        const model = await Prixod.create({
            fakt: prixod.fakt,
            vaqt: time,
            sklad_id: prixod.sklad,
            yetkazuvchi_id: prixod.yetkazuvchi_id,
            payType_id: prixod.payType_id,
            summa: prixod.summa,
            soni: prixod.soni,
        })
        
        for(let i = 0; i < prixod_table.length; i++) {
            prixod_table[i].prixod_id = model.id
            prixod_table[i].vaqt = model.vaqt
            await PrixodTable.create(prixod_table[i])
        }
        
        if (!model) {
            throw new HttpException(500, req.mf('Nimadir noto\'g\'ri bajarildi'))
        };

        res.send({
            success: true,
            message: "Prixod create",
            data: model
        });
    };

    prixodUpdate = async (req, res, next) => {
        this.checkValidation(req);
        const { prixod_table, ...prixod } = req.body

        const model = await Prixod.findOne({
            where: {
                id: req.params.id
            }
        });
        model.fakt = prixod.fakt
        model.yetkazuvchi_id = prixod.yetkazuvchi_id
        model.sklad = prixod.sklad
        model.payType_id = prixod.payType_id
        model.soni = prixod.soni
        model.summa = prixod.summa
        model.save()

        await PrixodTable.destroy({
            where: {
                prixod_id: model.id
            }
        })

        for(let i = 0; i < prixod_table.length; i++){
            prixod_table[i].prixod_id = model.id;
            await PrixodTable.create(prixod_table[i])
        }

        res.send({
            success: true,
            message: "Prixod update",
            data: model
        });
    };

    prixodDelete = async (req, res, next) => {
        await Prixod.destroy({
            where: {
                id: req.params.id
            },
        });
        
        res.send('Tanlangan ma\'lumot o\'chirildi')
    }

}

/******************************************************************************
 *                               Export
 ******************************************************************************/
 module.exports = new PrixodController;