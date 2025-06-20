import { query } from "./_generated/server";
import type { Id } from "./_generated/dataModel";

export const get = query({
  args: {},
  handler: async (ctx) => {
    const businesses = await ctx.db.query("businesses").collect();
    const categories = await ctx.db.query("business_categories").collect();
    const categoryMap = Object.fromEntries(
      categories.map((c) => [c._id, c.name])
    );
    return businesses.map((b) => ({
      ...b,
      categories: b.categoryIds.map(
        (id: Id<"business_categories">) => categoryMap[id] || null
      ),
    }));
  },
});
