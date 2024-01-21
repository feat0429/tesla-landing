/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily:{
			sans:['Gotham SSm, sans-serif' ]
		},
		extend: {
			colors:{
				vulcan:'#393c41',
				whiteSmoke: '#f4f4f4',
				blackRussian: '#171a20'							
			},
			boxShadow:{
				dark: '#171a20 0px 1px 0px 0px',
				light: 'white 0px 1px 0px 0px',
				darkHover: '#171a20 0px 2px 0px 0px',
				lightHover: 'white 0px 2px 0px 0px'
			}
		},
	},
	plugins: [],
}
