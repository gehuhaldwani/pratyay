import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { memberZodSchema } from "@/types/member";

const postCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./content/post" }),
	schema: z.object({
		title: z.string(),
		published: z.date(),
		draft: z.boolean().optional().default(false),
		description: z.string().optional().default(""),
		tags: z.array(z.string()).optional().default([]),
		category: z.string().optional().default(""),
		image: z.string().optional(),
		carousel: z.array(z.string()).optional().default([]),
		instagramEmbed: z.string().optional(),
		imagesDownloadUrl: z.string().optional(),
	}),
});

const memberCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*.json", base: "./content/member" }),
	schema: memberZodSchema,
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
	post: postCollection,
	page: pageCollection,
	member: memberCollection,
};
