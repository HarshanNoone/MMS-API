"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = exports.product_status = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const order_1 = require("./order");
exports.product_status = (0, pg_core_1.pgEnum)("Order_status", ["Pending", "Shipped", "Delivered", "Return", "Cancelled"]);
exports.products = (0, pg_core_1.pgTable)("products", {
    id: (0, pg_core_1.serial)("id").unique(),
    guid: (0, pg_core_1.uuid)("guid").primaryKey(),
    order_id: (0, pg_core_1.uuid)("order_id").references(() => order_1.order.guid),
    product_status: (0, exports.product_status)("product_status"),
    product_name: (0, pg_core_1.text)("name").notNull(),
    product_price: (0, pg_core_1.text)("price").notNull(),
    product_image: (0, pg_core_1.text)("image"),
    quantity: (0, pg_core_1.integer)("quantity"),
    stock_quantity: (0, pg_core_1.integer)("stock_quantity"),
    available: (0, pg_core_1.text)("available"),
    description: (0, pg_core_1.text)("description"),
    created_at: (0, pg_core_1.timestamp)("created_at").defaultNow(),
    updated_at: (0, pg_core_1.timestamp)("updated_at").defaultNow()
});
