"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order = exports.order_status = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const user_1 = require("./user");
const address_1 = require("./address");
const payment_1 = require("./payment");
exports.order_status = (0, pg_core_1.pgEnum)("Order_status", ["Pending", "Shipped", "Delivered", "Return", "Cancelled"]);
exports.order = (0, pg_core_1.pgTable)("order", {
    id: (0, pg_core_1.serial)("id").unique(),
    guid: (0, pg_core_1.uuid)("guid").primaryKey(),
    user_id: (0, pg_core_1.uuid)("user_id").references(() => user_1.users.guid),
    address_id: (0, pg_core_1.uuid)("address_id").references(() => address_1.address.guid),
    payment_id: (0, pg_core_1.uuid)("payment_id").references(() => payment_1.payment.guid),
    order_status: (0, exports.order_status)("status"),
    created_at: (0, pg_core_1.timestamp)("created_at").defaultNow(),
    updated_at: (0, pg_core_1.timestamp)("updated_at").defaultNow()
});
