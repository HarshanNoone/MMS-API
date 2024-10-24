"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
require("dotenv/config");
exports.appConfig = {
    DataBase: {
        port: parseInt(process.env.PORT),
        host: process.env.DB_HOST,
        db: process.env.DB_NAME,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        Db_port: parseInt(process.env.DB_PORT)
    }
};
