import { pgTable, serial, text, integer, timestamp, uuid, pgEnum } from "drizzle-orm/pg-core";
import { order } from "./order";

export const product_status = pgEnum("Order_status", ["Pending", "Shipped", "Delivered","Return", "Cancelled"])

export const products = pgTable("products", {
    id: serial("id").unique(),
    guid: uuid("guid").primaryKey(),
    order_id: uuid("order_id").references(() => order.guid),
    product_status: product_status("product_status"),
    product_name: text("name").notNull(),
    product_price: text("price").notNull(),
    product_image: text("image"),
    quantity: integer("quantity"),    
    stock_quantity: integer("stock_quantity"),
    available: text("available"),
    description: text("description"),
    created_at:timestamp("created_at").defaultNow(),
    updated_at:timestamp("updated_at").defaultNow()
})