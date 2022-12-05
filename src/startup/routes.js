const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require('cookie-parser')
const i18n = require('./i18n.config')
const errorMiddleware = require('../middleware/error.middleware');
const HttpException = require('../utils/HttpException.utils');
const userRouter = require('../routes/user.route');
const roleRouter = require('../routes/role.route');
const payTypeRouter = require('../routes/payType.route');
const prixodRouter = require('../routes/prixod.route');
const skladRouter = require('../routes/sklad.route');
const yetkazuvchiRouter = require('../routes/yetkazuvchi.route');
const productRouter = require('../routes/product.route');
const reportRouter = require('../routes/report.route');
const typeRouter = require('../routes/type.route')
const kassaOrderRouter = require('../routes/kassaOrder.route')

module.exports = async function(app){
     // parse requests of content-type: application/json
        // parses incoming requests with JSON payloads
        app.use(express.json());
        // enabling cors for all requests by using cors middleware
        app.use(cors());
        // Enable pre-flight
        app.options("*", cors());
        app.use(express.static(path.join(__dirname, '../../dist')));
        // i18n.setLocale('uz');
        app.use(cookieParser());
        app.use(i18n.init)

        app.use(`/api/v1/users`, userRouter);
        app.use(`/api/v1/roles`, roleRouter);
        app.use(`/api/v1/payTypes`, payTypeRouter)
        app.use(`/api/v1/prixod`, prixodRouter);
        app.use(`/api/v1/sklad`, skladRouter);
        app.use(`/api/v1/yetkazuvchi`, yetkazuvchiRouter);
        app.use(`/api/v1/product`, productRouter);
        app.use(`/api/v1/report`, reportRouter);
        app.use(`/api/v1/types`, typeRouter);
        app.use(`/api/v1/kassa`, kassaOrderRouter)

            
        // 404 error
        app.all('*', (req, res, next) => {
            const err = new HttpException(404, req.mf('Endpoint not found'));
            next(err);
        });

        app.use(errorMiddleware);
}