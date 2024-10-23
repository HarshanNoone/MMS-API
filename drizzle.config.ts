import { defineConfig } from 'drizzle-kit';
import { appConfig } from './src/config/appConfig';

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/db/schemas/*.ts",
    out: "./migrations",
    dbCredentials: {
        port: appConfig.DataBase.Db_port,
        host: appConfig.DataBase.host,
        user: appConfig.DataBase.user,
        password: appConfig.DataBase.password,
        database: appConfig.DataBase.db,
        ssl: {
            rejectUnauthorized: false
        }
    }
});
