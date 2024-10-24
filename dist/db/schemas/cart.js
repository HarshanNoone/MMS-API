"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carts = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const user_1 = require("./user");
exports.carts = (0, pg_core_1.pgTable)("carts", {
    id: (0, pg_core_1.serial)("id").unique(),
    guid: (0, pg_core_1.uuid)("guid").primaryKey(),
    user_id: (0, pg_core_1.uuid)("user_id").references(() => user_1.users.guid),
    product_details: (0, pg_core_1.json)('product_details').$type(),
    created_at: (0, pg_core_1.timestamp)("created_at").defaultNow(),
    updated_at: (0, pg_core_1.timestamp)("updated_at").defaultNow()
});
