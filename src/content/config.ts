import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    role: z.string(),
    year: z.string(),
    cover: z.string().optional(),
    tags: z.array(z.string()).optional(),
    summary: z.string(),
    order: z.number().default(99), // lower = appears first
    featured: z.boolean().default(false),
  }),
});

export const collections = { work };
