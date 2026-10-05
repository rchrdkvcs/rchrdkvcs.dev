import { file, glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const profile = defineCollection({
  loader: file("src/content/profile.json", {
    parser: (text) => [{ id: "main", ...JSON.parse(text) }],
  }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      bio: z.string(),
      email: z.email(),
      avatar: image().optional(),
      github: z.url().optional(),
      twitter: z.url().optional(),
      linkedin: z.url().optional(),
      // Optional recruiter-facing details, shown in the hero when set.
      location: z.string().optional(),
      availability: z.string().optional(),
      resume: z.string().optional(),
    }),
});

const skills = defineCollection({
  // Display order follows the order of entries in the file.
  loader: file("src/content/skills.json", {
    parser: (text) => JSON.parse(text).map((skill: object, order: number) => ({ ...skill, order })),
  }),
  schema: z.object({
    order: z.number(),
    label: z.string(),
    icon: z.string(),
    description: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/content/projects" }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    github: z.url().optional(),
    demo: z.url().optional(),
    order: z.number().default(999),
    draft: z.boolean().default(false),
  }),
});

const experiences = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/content/experiences" }),
  schema: ({ image }) =>
    z.object({
      company: z.string(),
      role: z.string(),
      logo: image().optional(),
      startDate: z.coerce.date(),
      endDate: z.coerce.date().optional(),
      volunteer: z.boolean().default(false),
    }),
});

export const collections = { profile, skills, projects, experiences };
