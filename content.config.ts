import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: "page",
      source: "projects/**",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        tags: z.array(z.string()),
        repo: z.string().optional(),
        link: z.string().optional(),
        image: z.string().optional(),
        featured: z.boolean().default(false),
      }),
    }),
  },
});
