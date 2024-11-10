import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import config from "@/config.ts";

export async function GET(context) {
	const posts = await getCollection("post");
	return rss({
		stylesheet: "/rss/styles.xsl",
		title: config.title + config.titleSuffix,
		description: config.description,
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.intro,
			link: `/post/${post.slug}/`,
		})),
	});
}
