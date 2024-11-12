import type { Socials } from "@/types/socials";

interface SiteConfig {
	title: string;
	description: string;
	tagLine: string;
	defaultOgImage: string;
	latestPosts: number;
	postsPerPage: number;
	socials: Socials;
}

export type { SiteConfig };
