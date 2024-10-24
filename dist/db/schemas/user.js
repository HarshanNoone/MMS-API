"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.users = (0, pg_core_1.pgTable)("users", {
    id: (0, pg_core_1.serial)("id").unique(),
    guid: (0, pg_core_1.uuid)("guid").primaryKey(),
    first_name: (0, pg_core_1.text)("first_name").notNull(),
    last_name: (0, pg_core_1.text)("last_name").notNull(),
    gender: (0, pg_core_1.text)("gender").notNull(),
    country_code: (0, pg_core_1.text)("country_code").notNull(),
    mobile: (0, pg_core_1.text)("mobile").notNull(),
    email: (0, pg_core_1.varchar)("email"),
    created_at: (0, pg_core_1.timestamp)("created_at").defaultNow(),
    updated_at: (0, pg_core_1.timestamp)("updated_at").defaultNow()
});
