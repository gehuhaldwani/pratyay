import { defineConfig } from "astro/config";
// astro integrations
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
<<<<<<< HEAD
import react from "@astrojs/react";
// remark plugins
import remarkMath from "remark-math";
=======
import { defineConfig } from "astro/config";
import rehypeComponents from "rehype-components"; /* Render the custom directive content */
import remarkDirective from "remark-directive"; /* Handle directives */
>>>>>>> 8022e20f0eac9a9bb9e246cb6d2b0f54b1be9477
import remarkGithubAdmonitionsToDirectives from "remark-github-admonitions-to-directives";
import remarkDirective from "remark-directive"; /* Handle directives */
import { remarkDirectiveToRehypeComponent } from "./src/plugins/remark-directive-rehype.ts";
import { remarkMermaid } from "./src/plugins/remark-mermaid.ts";
import { remarkExcerpt } from "./src/plugins/remark-excerpt.ts";
import { remarkReadingTime } from "./src/plugins/remark-reading-time.ts";
// rehype plugins
import rehypeComponents from "rehype-components"; /* Render the custom directive content */
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
// rehype components
import { AdmonitionComponent } from "./src/plugins/rehype-component-admonition.mjs";
import { InstagramEmbedComponent } from "./src/plugins/rehype-component-instagram.mjs";
import { GithubCardComponent } from "./src/plugins/rehype-component-github-card.mjs";

export default defineConfig({
	site: "https://pratyay.gehuhaldwani.in",
	base: "/",
	trailingSlash: "always",
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		icon(),
		react(),
	],
	markdown: {
		remarkPlugins: [
			remarkMath,
			remarkDirective,
			remarkGithubAdmonitionsToDirectives,
			remarkReadingTime,
			remarkExcerpt,
			remarkDirectiveToRehypeComponent,
			remarkMermaid,
		],
		rehypePlugins: [
			rehypeKatex,
			rehypeSlug,
			[
				rehypeComponents,
				{
					components: {
						instagram: InstagramEmbedComponent,
						github: GithubCardComponent,
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
<<<<<<< HEAD
			[
				rehypeAutolinkHeadings,
				{
					behavior: "prepend",
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
=======
>>>>>>> 8022e20f0eac9a9bb9e246cb6d2b0f54b1be9477
		],
	},
});
