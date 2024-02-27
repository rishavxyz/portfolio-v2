import { defineCollection, z } from 'astro:content';

const seoMsg = "For the best SEO keep it within"

const blog = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: ({ image }) => z.object({
    title: z.string().max(60, { message: `${seoMsg} 60 characters` }),
    desc: z.string().max(160, { message: `${seoMsg} 160 characters` }),
    // Transform string to Date object
    pubon: z.coerce.date(),
    updatedOn: z.coerce.date().optional(),
    //@ts-ignore
    img: image().optional(),
    draft: z.boolean().default(false)
  }),
});

export const collections = { blog };
