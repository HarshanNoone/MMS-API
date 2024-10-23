import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { appConfig } from "../config/appConfig";

const pool = new Pool({
    port: appConfig.DataBase.Db_port,
    host: appConfig.DataBase.host,
    user: appConfig.DataBase.user,
    password: appConfig.DataBase.password,
    database: appConfig.DataBase.db,
    ssl: {
        rejectUnauthorized: false
    }
});

const db = drizzle(pool);

export default db;
