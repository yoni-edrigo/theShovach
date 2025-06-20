import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  business_categories: defineTable({
    name: v.string(),
  }),
  businesses: defineTable({
    name: v.string(),
    logoStorageId: v.string(), // For business logo storage
    image: v.string(), // For business image (from your data)
    categoryIds: v.array(v.id("business_categories")), // Array of category references
  }),
});
