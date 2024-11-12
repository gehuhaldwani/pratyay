import type { Socials } from "@/types/socials";

interface Member {
	role: string;
	name: string;
	course: string;
	sem: number;
	image: string;
	socials: Socials;
}

export type { Member };

import { z } from "astro:content";
import { socialsZodSchema } from "@/types/socials";

const memberZodSchema: z.ZodType<Member> = z.object({
	role: z.string(),
	name: z.string(),
	course: z.string(),
	sem: z.number(),
	image: z.string(),
	socials: socialsZodSchema,
});

export { memberZodSchema };
