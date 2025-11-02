import assets from './assets';

export const projectTypes = [
	'react, TS, tailwind, vite',
	'pure JS',
	'design to code',
];

export const projects = [
	{
		name: 'FAQs',
		tech: ['react', 'typescript', 'tailwind', 'vite'],
		url: assets?.faq,
	},
	{
		name: 'fylo',
		tech: ['react', 'typescript', 'tailwind', 'vite'],
		url: assets?.fylo,
	},
	{
		name: 'customer dashboard',
		tech: ['react', 'typescript', 'SCSS', 'vite'],
		url: assets?.custDash,
	},
	{
		name: 'loan dashboard',
		tech: ['react', 'vite'],
		url: assets?.aff,
	},
	{
		name: 'currency converter',
		tech: ['react', 'vite'],
		url: assets?.currency,
	},
	{
		name: 'tip calculator',
		tech: ['pure JS'],
		url: assets?.tip,
	},
	{
		name: 'age calculator',
		tech: ['pure JS'],
		url: assets?.age,
	},
];
