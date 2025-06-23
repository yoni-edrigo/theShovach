import { query, mutation } from "./_generated/server";
import type { Id } from "./_generated/dataModel";

// 1. List all files in storage
export const listStorageFiles = query({
  args: {},
  handler: async (ctx) => {
    // Query the _storage system table for all files
    const files = await ctx.db.system.query("_storage").collect();
    return files;
  },
});

// 2. Seed images table with fileId and placeholder alt
export const seedImages = mutation({
  args: {},
  handler: async (ctx) => {
    // Query the _storage system table for all files
    const files = await ctx.db.system.query("_storage").collect();
    let count = 1;
    for (const file of files) {
      await ctx.db.insert("images", {
        fileId: file._id,
        alt: `alt-${count}`,
      });
      count++;
    }
    return `Seeded ${files.length} images`;
  },
});

// 3. Get all images as { url, alt }
export const getImagesWithUrls = query({
  args: {},
  handler: async (ctx) => {
    const images = await ctx.db.query("images").collect();
    const result = [];
    for (const image of images) {
      // Cast fileId to Id<"_storage"> to use the non-deprecated getUrl signature
      const url =
        (await ctx.storage.getUrl(image.fileId as Id<"_storage">)) ?? "";
      result.push({ url, alt: image.alt });
    }
    return result;
  },
});
