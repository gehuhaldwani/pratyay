import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
	process.env.GITHUB_BRANCH ||
	process.env.VERCEL_GIT_COMMIT_REF ||
	process.env.HEAD ||
	"main";

export default defineConfig({
	branch,

	// Get this from tina.io
	clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
	// Get this from tina.io
	token: process.env.TINA_TOKEN,

	build: {
		outputFolder: "admin",
		publicFolder: "public",
	},
	media: {
		tina: {
			mediaRoot: "images",
			publicFolder: "public",
		},
	},
	// See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
	schema: {
		collections: [
			{
				name: "post",
				label: "Posts",
				path: "content/post",
				format: "md",
				ui: {
					allowedActions: {
						create: true,
						delete: true,
						createNestedFolder: false,
					},
					filename: {
						// if disabled, the editor can not edit the filename
						readonly: true,
						// Example of using a custom slugify function
						slugify: (values) => {
							const pubjlishedDate = new Date(values?.published);
							// Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}

							return `${pubjlishedDate.getFullYear()}-${pubjlishedDate.getMonth()}-${pubjlishedDate.getDate()}-${values?.title
								?.toLowerCase()
								.replace(/ /g, "-")}`;
						},
					},
				},
				fields: [
					{
						type: "string",
						name: "title",
						label: "Title",
						required: true,
					},
					{
						type: "string",
						name: "description",
						label: "Description",
						required: true,
					},
					{
						type: "datetime",
						name: "published",
						label: "Published Date",
						ui: {
							timeFormat: "HH:mm",
						},
						required: true,
					},
					{
						type: "boolean",
						name: "draft",
						label: "Draft",
					},
					{
						type: "image",
						name: "image",
						label: "Image",
					},
					{
						type: "string",
						name: "tags",
						label: "Tags",
						list: true,
					},
					{
						type: "image",
						name: "carousel",
						label: "Carousel Images",
						list: true,
					},
					{
						type: "rich-text",
						name: "body",
						label: "Body",
						isBody: true,
						required: true,
					},
				],
			},
		],
	},
});
