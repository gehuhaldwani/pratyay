interface SocialLinks {
	facebook: boolean | string;
	github: boolean | string;
	instagram: boolean | string;
	twitter: boolean | string;
	whatsapp: boolean | string;
}

interface Config {
	title: string;
	description: string;
	tagLine: string;
	defaultOgImage: string;
	latestPosts: number;
	postsPerPage: number;
	social: SocialLinks;
}

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const configPath = resolve("./src/config.json");
const configData: Config = JSON.parse(readFileSync(configPath, "utf-8"));

export default configData;
