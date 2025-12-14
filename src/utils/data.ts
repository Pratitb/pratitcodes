import {
	Affinity,
	Age,
	Car,
	Currency,
	CustDash,
	Faq,
	Food,
	Fylo,
	Tip,
} from './assets'
import type { ProjectsType } from './types'

export const projectTypes = [
	'react',
	'tailwindCSS',
	'components',
	'javaScript',
	'SCSS',
	'design to code',
]

export const projects: ProjectsType[] = [
	{
		name: 'food item card',
		tech: ['tailwindCSS', 'components', 'react'],
		coverBg: Food,
		url: 'https://pratitb.github.io/food-item-card/',
	},
	{
		name: 'Cards',
		tech: ['components', 'react'],
		coverBg: Car,
		url: 'https://pratitb.github.io/car-type-card/',
	},
	{
		name: 'FAQs',
		tech: ['components', 'tailwindCSS'],
		coverBg: Faq,
		url: 'https://pratitb.github.io/faqs/',
	},
	{
		name: 'fylo',
		tech: ['tailwindCSS', 'design to code'],
		coverBg: Fylo,
		url: 'https://pratitb.github.io/fylo/',
	},
	{
		name: 'customer dashboard',
		tech: ['react', 'SCSS'],
		coverBg: CustDash,
		url: 'https://pratitb.github.io/customer-dashboard/',
	},
	{
		name: 'loan dashboard',
		tech: ['react'],
		coverBg: Affinity,
		url: 'https://pratitb.github.io/affinity-react/',
	},
	{
		name: 'currency converter',
		tech: ['react'],
		coverBg: Currency,
		url: 'https://currencify.in/',
	},
	{
		name: 'tip calculator',
		tech: ['javaScript'],
		coverBg: Tip,
		url: 'https://pratitb.github.io/tip-calculator-app/',
	},
	{
		name: 'age calculator',
		tech: ['javaScript'],
		coverBg: Age,
		url: 'https://pratitb.github.io/age-calculator/',
	},
]
