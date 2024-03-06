import { defineCollection, z } from "astro:content";

const seoMsg = "For the best SEO keep it within";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string().max(60, { message: `${seoMsg} 60 characters` }),
      desc: z.string().max(160, { message: `${seoMsg} 160 characters` }),
      pubon: z.coerce.date(),
      updatedOn: z.coerce.date().optional(),
      img: image().optional(),
      draft: z.boolean().default(false),
      category: z.string().toLowerCase().default("NONE"),
    }),
});

export const collections = { blog };
