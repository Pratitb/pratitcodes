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
	Profile,
	Social,
	Jobs,
} from './assets'
import type { ProjectsType } from './types'

export const projectTypes = [
	'react',
	'typescript',
	'tailwindCSS',
	'components',
	'javaScript',
	'SCSS',
	'design to code',
]

export const projects: ProjectsType[] = [
	{
		name: 'job list filtering',
		tech: ['components', 'react', 'typescript'],
		coverBg: Jobs,
		url: 'https://pratitb.github.io/job-list-filtering/',
	},
	{
		name: 'social media dashboard',
		tech: ['components', 'tailwindCSS'],
		coverBg: Social,
		url: 'https://pratitb.github.io/social-media/',
	},
	{
		name: 'profile card',
		tech: ['components', 'tailwindCSS'],
		coverBg: Profile,
		url: 'https://pratitb.github.io/profile-card/',
	},
	{
		name: 'food item card',
		tech: ['components', 'tailwindCSS'],
		coverBg: Food,
		url: 'https://pratitb.github.io/food-item-card/',
	},
	{
		name: 'Automotive Cards',
		tech: ['components', 'tailwindCSS'],
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
		tech: ['react', 'typescript', 'SCSS'],
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
