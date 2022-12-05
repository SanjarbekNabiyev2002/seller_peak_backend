const { User } = require('../models/init-models');
const HttpException = require('../utils/HttpException.utils');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secret_jwt } = require('../startup/config');
const BaseController = require('./BaseController');
const { MyUser, MainUser } = require('../utils/userRoles.utils');
const { Op } = require('sequelize');
const moment = require('moment');

/******************************************************************************
 *                              User Controller
 ******************************************************************************/
class UserController extends BaseController {
    userAll = async (req, res, next) => {
        let model = await User.findAll()

        res.send(model)
    };

    userOne = async (req, res, next) => {
        const model = await User.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!model) {
            throw new HttpException(404, req.mf('Foydalanuvchi topilmadi'))
        }

        res.send(model);
    };

    // getByUsername = async (req, res, next) => {
    //     const user = await UserModel.findOne({where:{ username: req.params.username }});
    //     if (!user) {
    //         throw new HttpException(404, req.mf('data not found'));
    //     }

    //     res.send(user);
    // };

    getCurrentUser = async (req, res, next) => {
        res.send(req.currentUser);
    };

    userCreate = async (req, res, next) => {
        this.checkValidation(req);

        await this.hashPassword(req);
        let { 
            username,
            fullname,
            password,
            role
        } = req.body;

        const model = await User.create({
            username,
            fullname,
            password,
            role
        });

        if (!model) {
            throw new HttpException(500, req.mf('Nimadir noto\'g\'ri bajarildi'))
        };

        res.send(model);
    };

    userUpdate = async (req, res, next) => {
        this.checkValidation(req)

        await this.hashPassword(req);
        let { 
            username,
            fullname,
            password,
            role
        } = req.body;

        const model = await User.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!model) {
            throw new HttpException(404, req.mf('Nimadir noto\'g\'ri bajarildi'))
        };

        model.username = username;
        model.password = password;
        if(password){
            model.password = password
        };
        model.fullname = fullname;
        model.role = role;
        model.save()

        res.send(model);
    }

    userDelete = async (req, res, next) => {
        const model = await User.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!model) {
            throw new HttpException(404, req.mf('Nimadir noto\'g\'ri bajarildi'))
        };

        if (model.id === MainUser) {
            throw new HttpException(400, req.mf('This item cannot be deleted'));
        };

        try {
            await model.destroy({ force: true });
        } catch (error) {
            await model.destroy();
        };

        res.send('Tanlangan ma\'lumot o\'chirildi')
    };

    userLogin = async (req, res, next) => {
        this.checkValidation(req);

        const { role , password: pass } = req.body;
        const user = await User.findOne({
            where: {
                role_id: role
            }
        });
        
        if (!user) {
            throw new HttpException(401, req.mf('Incorrect login or password!'));
        }

        const isMatch = await bcrypt.compare(pass, user.password);

        if (!isMatch) {
            throw new HttpException(401, req.mf('Incorrect login or password!'));
        }

        // user matched!
        const token = jwt.sign({ user_id: user.id.toString() }, secret_jwt, {
            expiresIn: '24h'
        });

        user.token = token;
        res.send({
            success: true,
            message: 'User info',
            data: user
        });
    };

    // hash password if it exists
    hashPassword = async (req) => {
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 8);
        }
    }
}



/******************************************************************************
 *                               Export
 ******************************************************************************/
module.exports = new UserController;