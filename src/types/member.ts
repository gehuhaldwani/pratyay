import type { SocialLinks } from "@/types/social";

interface Member {
	role: string;
	name: string;
	course: string;
	sem: number;
	image: string;
	socials: SocialLinks;
}

export type { Member };
