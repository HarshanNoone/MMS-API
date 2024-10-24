import { pgEnum, pgTable, serial, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "./user";
import { address } from "./address";
import { payment } from "./payment";

export const order_status = pgEnum("Order_status", ["Pending", "Shipped", "Delivered", "Return", "Cancelled"])

export const order = pgTable("order", {
    id: serial("id").unique(),
    guid: uuid("guid").primaryKey(),
    user_id: uuid("user_id").references(() => users.guid),
    address_id: uuid("address_id").references(() => address.guid),
    payment_id: uuid("payment_id").references(() => payment.guid),
    order_status: order_status("status"),
    created_at:timestamp("created_at").defaultNow(),
    updated_at:timestamp("updated_at").defaultNow()
})