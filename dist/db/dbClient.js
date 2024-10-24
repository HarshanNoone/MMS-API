"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_postgres_1 = require("drizzle-orm/node-postgres");
const pg_1 = require("pg");
const appConfig_1 = require("../config/appConfig");
const pool = new pg_1.Pool({
    port: appConfig_1.appConfig.DataBase.Db_port,
    host: appConfig_1.appConfig.DataBase.host,
    user: appConfig_1.appConfig.DataBase.user,
    password: appConfig_1.appConfig.DataBase.password,
    database: appConfig_1.appConfig.DataBase.db,
    ssl: {
        rejectUnauthorized: false
    }
});
const db = (0, node_postgres_1.drizzle)(pool);
exports.default = db;
