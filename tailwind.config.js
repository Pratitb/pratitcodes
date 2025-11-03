/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				mainBg: '#f3f4f6',
				brdrShdwDividers: '#E5E7EB',
				sidebarBg: '#E5E7EB',
				primary: '#2563eb',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Poppins', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
		},
	},
	plugins: [],
};
