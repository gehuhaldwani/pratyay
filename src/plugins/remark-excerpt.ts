import type { RemarkPlugin } from "@astrojs/markdown-remark";
import { toString as mdastUtilToString } from "mdast-util-to-string";

export const remarkExcerpt: RemarkPlugin<[]> =
	() =>
	(tree, { data }) => {
		let excerpt = "";
		for (const node of tree.children) {
			if (node.type !== "paragraph") {
				continue;
			}
			excerpt = mdastUtilToString(node);
			break;
		}
		data.astro = data.astro ?? {};
		data.astro.frontmatter = data.astro.frontmatter ?? {};

		data.astro.frontmatter.excerpt = excerpt;
	};
