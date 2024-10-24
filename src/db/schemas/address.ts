import { pgTable, serial, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "./user";

export const address = pgTable("address", {
    id: serial("id").unique(),
    guid: uuid("guid").primaryKey(),
    user_id: uuid("user_id").references(() => users.guid),
    full_name: text("full_name"),
    city:text("city"),
    state:text("state"),
    country:text("country"),
    full_address:text("full_address").notNull(),
    mobile_number:text("mobile_number").notNull(),
    alternate_mobile_number: text("alternate_mobile_number"),
    email: text("email"),
    postal_code: text("postal_code").notNull(),
    created_at:timestamp("created_at").defaultNow(),
    updated_at:timestamp("updated_at").defaultNow(),
    deleted_at:timestamp("deleted_at")
})