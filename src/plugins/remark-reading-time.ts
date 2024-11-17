import type { RemarkPlugin } from "@astrojs/markdown-remark";
import { toString as mdastUtilToString } from "mdast-util-to-string";
import getReadingTime from "reading-time";

export const remarkReadingTime: RemarkPlugin<[]> =
	() =>
	(tree, { data }) => {
		const textOnPage = mdastUtilToString(tree);
		const readingTime = getReadingTime(textOnPage);

		data.astro = data.astro ?? {};
		data.astro.frontmatter = data.astro.frontmatter ?? {};

		data.astro.frontmatter.minutes = Math.max(
			1,
			Math.round(readingTime.minutes),
		);
		data.astro.frontmatter.words = readingTime.words;
	};
