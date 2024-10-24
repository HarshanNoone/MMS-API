import { pgTable, serial, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: serial("id").unique(),
    guid: uuid("guid").primaryKey(),
    first_name: text("first_name").notNull(),
    last_name: text("last_name").notNull(),
    gender:text("gender").notNull(),
    country_code: text("country_code").notNull(),
    mobile: text("mobile").notNull(),
    email: varchar("email"),
    created_at:timestamp("created_at").defaultNow(),
    updated_at:timestamp("updated_at").defaultNow()
})