// @ts-nocheck
import type { RemarkPlugin } from "@astrojs/markdown-remark";
import { h } from "hastscript";
import { visit } from "unist-util-visit";

// ignore type chechking for whole file

export const remarkDirectiveToRehypeComponent: RemarkPlugin<[]> =
	() =>
	(tree, { data }) => {
		visit(tree, (node) => {
			if (
				node.type === "containerDirective" ||
				node.type === "leafDirective" ||
				node.type === "textDirective"
			) {
				const data = node.data || (node.data = {});
				node.attributes = node.attributes || {};
				if (
					node.children.length > 0 &&
					node.children[0].data &&
					node.children[0].data.directiveLabel
				) {
					// Add a flag to the node to indicate that it has a directive label
					node.attributes["has-directive-label"] = true;
				}
				const hast = h(node.name, node.attributes);

				data.hName = hast.tagName;
				data.hProperties = hast.properties;
			}
		});
	};