import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import config from "@/config.mjs";

export async function GET(context) {
	const blog = await getCollection("blog");
	return rss({
		stylesheet: "/rss/styles.xsl",
		title: config.title + config.titleSuffix,
		description: config.description,
		site: context.site,
		items: blog.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.intro,
			link: `/blog/${post.slug}/`,
		})),
	});
}
