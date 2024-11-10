import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeComponents from "rehype-components"; /* Render the custom directive content */
import remarkDirective from "remark-directive"; /* Handle directives */
import remarkGithubAdmonitionsToDirectives from "remark-github-admonitions-to-directives";
import { AdmonitionComponent } from "./src/plugins/rehype-component-admonition.mjs";
import { InstagramEmbedComponent } from "./src/plugins/rehype-component-instagram.mjs";
import { parseDirectiveNode } from "./src/plugins/remark-directive-rehype.js";

import react from "@astrojs/react";

export default defineConfig({
	site: "https://pratyay.gehuhaldwani.in",
	base: "/",
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		icon(),
		react(),
	],
	markdown: {
		remarkPlugins: [
			remarkGithubAdmonitionsToDirectives,
			remarkDirective,
			parseDirectiveNode,
		],
		rehypePlugins: [
			[
				rehypeComponents,
				{
					components: {
						instagram: InstagramEmbedComponent,
						note: (x, y) => AdmonitionComponent(x, y, "note"),
						tip: (x, y) => AdmonitionComponent(x, y, "tip"),
						important: (x, y) => AdmonitionComponent(x, y, "important"),
						info: (x, y) => AdmonitionComponent(x, y, "important"),
						caution: (x, y) => AdmonitionComponent(x, y, "caution"),
						warning: (x, y) => AdmonitionComponent(x, y, "warning"),
						danger: (x, y) => AdmonitionComponent(x, y, "warning"),
					},
				},
			],
			[
				rehypeAutolinkHeadings,
				{
					behavior: "append",
					properties: {
						className: ["anchor"],
					},
					content: {
						type: "element",
						tagName: "span",
						properties: {
							className: ["anchor-icon"],
							"data-pagefind-ignore": true,
						},
						children: [
							{
								type: "text",
								value: "#",
							},
						],
					},
				},
			],
		],
	},
});
