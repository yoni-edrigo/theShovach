import { mutation } from "./_generated/server";
import type { Id } from "./_generated/dataModel";

// Data to seed
const categories = [
  { name: "אחר" },
  { name: "ספא / טיפולים /גוף נפש" },
  { name: "אירועים" },
  { name: "לינה" },
  { name: "מזון" },
  { name: "אטרקציות" },
];

const businesses = [
  {
    name: "בית ספר שדה",
    image:
      "wix:image://v1/c5b1dc_d7560e7ed4ab4df59e35ab6b8111f026~mv2.jpg/tmvnh-shl-WhatsApp-2024-10-01-bsh-h-11.01.17_cd45838b.jpg_id=O7ka67&accessToken=eyJhbGciOi#originWidth=3000&originHeight=3000",
    categoryNames: ["לינה", "אירועים", "אטרקציות"],
    logoStorageId: "mock-logo-1",
  },
  {
    name: "השובך",
    image:
      "wix:image://v1/866127_0b4d2b1e3a064a6386d4771d4fa8ab29~mv2.png/%D7%9C%D7%95%D7%92%D7%95%20%D7%94%D7%A9%D7%95%D7%91%D7%9A%20(6).png#originWidth=500&originHeight=500",
    categoryNames: ["ספא / טיפולים /גוף נפש", "לינה"],
    logoStorageId: "mock-logo-2",
  },
  {
    name: "עצלנו",
    image:
      "wix:image://v1/557f26_61f18b2cffb24f58a9aed3a0e032566c~mv2.jpg/IMG_2277.jpeg_id=Gpk0gj&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkdwazBna#originWidth=828&originHeight=828",
    categoryNames: ["אחר"],
    logoStorageId: "mock-logo-3",
  },
  {
    name: "גוש-אלקטריקט",
    image:
      "wix:image://v1/557f26_e92f4115178147c7ae0fcaf2dbb5c7f9~mv2.png/gushelectriclogo.png_id=d0pDWK&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im#originWidth=400&originHeight=200",
    categoryNames: ["אחר"],
    logoStorageId: "mock-logo-4",
  },
  {
    name: "פולירון",
    image:
      "wix:image://v1/557f26_61c212a43e3148bba749ed71fc8efff9~mv2.png/polironlogo.png_id=BpgQX7&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkJwZ1F#originWidth=400&originHeight=200",
    categoryNames: ["אחר"],
    logoStorageId: "mock-logo-5",
  },
  {
    name: "מנופי גוש עציון",
    image:
      "wix:image://v1/557f26_71287ba5b3744c8fb50aa9af80df395b~mv2.jpg/IMG_3237.png_id=a26yqW&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEyNnlxVy#originWidth=1170&originHeight=1170",
    categoryNames: ["אחר"],
    logoStorageId: "mock-logo-6",
  },
  {
    name: "עצי הגוש",
    image:
      "wix:image://v1/c5b1dc_e1b81f46473e4519ac99ebf31d7ef29b~mv2.jpg/IMG_1427.png_id=ElM5jl&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkVsTTVqbC#originWidth=1152&originHeight=1152",
    categoryNames: ["אחר"],
    logoStorageId: "mock-logo-7",
  },
  {
    name: 'ממעל הנדסה בע"מ',
    image:
      "wix:image://v1/c5b1dc_985ec2e6bdcf432ea9aff4628c64a072~mv2.jpg/IMG_5002.jpeg_id=bW8LB7&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJXOExCN#originWidth=296&originHeight=296",
    categoryNames: ["אחר"],
    logoStorageId: "mock-logo-8",
  },
  {
    name: "גולדז",
    image:
      "wix:image://v1/557f26_84c5046f96a64ecf98c93a81545f9f7b~mv2.png/IMG-20240703-WA0017-1-.jpg_id=O7Jl4A&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJp#originWidth=900&originHeight=900",
    categoryNames: ["אטרקציות"],
    logoStorageId: "mock-logo-9",
  },
  {
    name: "מכבסת כפר עציון",
    image:
      "wix:image://v1/c5b1dc_5a45425dbb554e15a94a789151dcb572~mv2.jpg/IMG_2763.jpeg_id=LPJxEj&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkxQSnhFa#originWidth=752&originHeight=752",
    categoryNames: ["אחר"],
    logoStorageId: "mock-logo-10",
  },
  {
    name: "חוות קשואלה",
    image:
      "wix:image://v1/c5b1dc_577abda0e3404503941f830df74f2e8b~mv2.jpg/IMG-20240704-WA0007.jpg_id=jovZp6&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI#originWidth=1080&originHeight=1080",
    categoryNames: ["אטרקציות", "אירועים", "מזון", "אחר"],
    logoStorageId: "mock-logo-11",
  },
  {
    name: "יאיר צנרו",
    image:
      "wix:image://v1/c5b1dc_649cf527717449f6a58abbe8047ee7f2~mv2.jpg/17265903691413515429296285159461.jpg_id=qRdevg&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp#originWidth=3000&originHeight=2250",
    categoryNames: ["אחר"],
    logoStorageId: "mock-logo-12",
  },
  {
    name: "מגשימים חלומות",
    image:
      "wix:image://v1/c5b1dc_e976db104b834c8485265fc740c3a2db~mv2.jpg/RkyWEigZlJwJZeEUYvWOHWOjCuJshDdijeeQMmSgXRRBUOQWBSLhEKmEjRnvbGSH.jpeg_id=6ZAgdO&accessToke#originWidth=1024&originHeight=1024",
    categoryNames: ["לינה", "אטרקציות", "אחר", "אירועים"],
    logoStorageId: "mock-logo-13",
  },
];

export const seed = mutation({
  args: {},
  handler: async (ctx) => {
    // Seed categories
    const categoryNameToId: Record<string, Id<"business_categories">> = {};
    for (const category of categories) {
      const id = await ctx.db.insert("business_categories", {
        name: category.name,
      });
      categoryNameToId[category.name] = id;
    }

    // Seed businesses
    for (const business of businesses) {
      const categoryIds = business.categoryNames.map(
        (name) => categoryNameToId[name]
      );
      await ctx.db.insert("businesses", {
        name: business.name,
        logoStorageId: business.logoStorageId,
        image: business.image,
        categoryIds,
      });
    }
    return "Seeded successfully";
  },
});
