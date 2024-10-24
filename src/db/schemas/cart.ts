import { pgTable, serial, json, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "./user";
import { ProductDetails } from "../../types/appTypes";

export const carts = pgTable("carts", {
    id: serial("id").unique(),
    guid: uuid("guid").primaryKey(),
    user_id: uuid("user_id").references(() => users.guid),
    product_details: json('product_details').$type<ProductDetails[]>(),
    created_at:timestamp("created_at").defaultNow(),
    updated_at:timestamp("updated_at").defaultNow()
})