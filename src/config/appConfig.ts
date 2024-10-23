import "dotenv/config";

export const appConfig = {
    DataBase: {
        port: parseInt(process.env.PORT!),
        host: process.env.DB_HOST,
        db: process.env.DB_NAME,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        Db_port: parseInt(process.env.DB_PORT!)
    }
}