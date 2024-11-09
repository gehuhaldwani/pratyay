import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		published: z.date(),
		draft: z.boolean().optional().default(false),
		description: z.string().optional().default(""),
		tags: z.array(z.string()).optional().default([]),
		category: z.string().optional().default(""),
		image: z.string().optional(),
	}),
});

const pageCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/page" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		image: z.string().optional(),
	}),
});

export const collections = {
	blog: blogCollection,
	page: pageCollection,
};
