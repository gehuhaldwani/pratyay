/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		backgroundSize: {
			"gradient-dashed": "20px 2px, 100% 2px",
		},
		extend: {
			boxShadow: {
				"theme-shadow": "0px 25px 50px -12px rgba(0, 0, 0, 0.3)",
			},
			fontFamily: {
				"theme-inter": ['Inter"', "sans-serif"],
				"theme-space": ['Space Grotesk"', "sans-serif"],
			},
			colors: {
				"theme-primary": "#003049",
				"theme-secondary": "#B2A4FF",
				"theme-accent": "#FFB4B4",
				"theme-dark": "#000E14",
				"theme-white": "#ffffff",
			},
			aspectRatio: {
				"9/10": "9 / 16",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
