import { pgTable, serial, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "./user";

export const payment = pgTable("payment", {
    id: serial("id").unique(),
    guid: uuid("guid").primaryKey(),
    user_id: uuid("user_id").references(() => users.guid),
    amount: text("amount").notNull(),
    payment_type: text("payment_type"),
    payment_status: text("payment_status"),
    created_at:timestamp("created_at").defaultNow(),
    updated_at:timestamp("updated_at").defaultNow()
})