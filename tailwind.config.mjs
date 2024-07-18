/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'media',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			spacing: {
				'8xl': '96rem',
				'9xl': '128rem',
			},
			colors: {
				base: { // Overall page background
					light: '#ffffff',
					dark: '#1a202c',
				},
				surface: { // For cards, modals, elevated elements
					light: '#f7fafc',
					dark: '#2d3748',
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
