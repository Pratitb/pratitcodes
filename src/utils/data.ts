import assets from './assets';
import type { ProjectsType } from './types';

export const projectTypes = [
	'react',
	'tailwindCSS',
	'components',
	'javaScript',
	'SCSS',
	'design to code',
];

export const projects: ProjectsType[] = [
	{
		name: 'Cards',
		tech: ['components', 'react'],
		coverBg: assets?.car,
		url: 'https://pratitb.github.io/car-type-card/',
	},
	{
		name: 'FAQs',
		tech: ['components', 'tailwindCSS'],
		coverBg: assets?.faq,
		url: 'https://pratitb.github.io/faqs/',
	},
	{
		name: 'fylo',
		tech: ['tailwindCSS', 'design to code'],
		coverBg: assets?.fylo,
		url: 'https://pratitb.github.io/fylo/',
	},
	{
		name: 'customer dashboard',
		tech: ['react', 'SCSS'],
		coverBg: assets?.custDash,
		url: 'https://pratitb.github.io/customer-dashboard/',
	},
	{
		name: 'loan dashboard',
		tech: ['react'],
		coverBg: assets?.aff,
		url: 'https://pratitb.github.io/affinity-react/',
	},
	{
		name: 'currency converter',
		tech: ['react'],
		coverBg: assets?.currency,
		url: 'https://currencify.in/',
	},
	{
		name: 'tip calculator',
		tech: ['javaScript'],
		coverBg: assets?.tip,
		url: 'https://pratitb.github.io/tip-calculator-app/',
	},
	{
		name: 'age calculator',
		tech: ['javaScript'],
		coverBg: assets?.age,
		url: 'https://pratitb.github.io/age-calculator/',
	},
];
