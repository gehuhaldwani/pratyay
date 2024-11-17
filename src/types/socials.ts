interface Socials {
	website?: string;
	discord?: string;
	facebook?: string;
	github?: string;
	instagram?: string;
	linkedin?: string;
	linktree?: string;
	telegram?: string;
	twitter?: string;
	whatsapp?: string;
	youtube?: string;
}

export type { Socials };

import { z } from "astro:content";

const socialsZodSchema: z.ZodType<Socials> = z.object({
	website: z.string().optional(),
	discord: z.string().optional(),
	facebook: z.string().optional(),
	github: z.string().optional(),
	instagram: z.string().optional(),
	linkedin: z.string().optional(),
	linktree: z.string().optional(),
	telegram: z.string().optional(),
	twitter: z.string().optional(),
	whatsapp: z.string().optional(),
	youtube: z.string().optional(),
});

export { socialsZodSchema };
