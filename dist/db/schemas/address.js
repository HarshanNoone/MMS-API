"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.address = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const user_1 = require("./user");
exports.address = (0, pg_core_1.pgTable)("address", {
    id: (0, pg_core_1.serial)("id").unique(),
    guid: (0, pg_core_1.uuid)("guid").primaryKey(),
    user_id: (0, pg_core_1.uuid)("user_id").references(() => user_1.users.guid),
    full_name: (0, pg_core_1.text)("full_name"),
    city: (0, pg_core_1.text)("city"),
    state: (0, pg_core_1.text)("state"),
    country: (0, pg_core_1.text)("country"),
    full_address: (0, pg_core_1.text)("full_address").notNull(),
    mobile_number: (0, pg_core_1.text)("mobile_number").notNull(),
    alternate_mobile_number: (0, pg_core_1.text)("alternate_mobile_number"),
    email: (0, pg_core_1.text)("email"),
    postal_code: (0, pg_core_1.text)("postal_code").notNull(),
    created_at: (0, pg_core_1.timestamp)("created_at").defaultNow(),
    updated_at: (0, pg_core_1.timestamp)("updated_at").defaultNow(),
    deleted_at: (0, pg_core_1.timestamp)("deleted_at")
});
