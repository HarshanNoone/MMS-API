"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.payment = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const user_1 = require("./user");
exports.payment = (0, pg_core_1.pgTable)("payment", {
    id: (0, pg_core_1.serial)("id").unique(),
    guid: (0, pg_core_1.uuid)("guid").primaryKey(),
    user_id: (0, pg_core_1.uuid)("user_id").references(() => user_1.users.guid),
    amount: (0, pg_core_1.text)("amount").notNull(),
    payment_type: (0, pg_core_1.text)("payment_type"),
    payment_status: (0, pg_core_1.text)("payment_status"),
    created_at: (0, pg_core_1.timestamp)("created_at").defaultNow(),
    updated_at: (0, pg_core_1.timestamp)("updated_at").defaultNow()
});
