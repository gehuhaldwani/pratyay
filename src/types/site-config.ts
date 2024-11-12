import type { Socials } from "@/types/socials";

interface SiteConfig {
	title: string;
	description: string;
	tagLine: string;
	defaultOgImage: string;
	latestPosts: number;
	postsPerPage: number;
	social: Socials;
}

export type { SiteConfig };
