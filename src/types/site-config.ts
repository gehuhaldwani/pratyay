import type { SocialLinks } from "@/types/social";

interface SiteConfig {
	title: string;
	description: string;
	tagLine: string;
	defaultOgImage: string;
	latestPosts: number;
	postsPerPage: number;
	social: SocialLinks;
}

export type { SiteConfig };
