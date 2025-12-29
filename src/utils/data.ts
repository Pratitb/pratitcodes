import {
	// Affinity,
	Age,
	Car,
	Currency,
	CustDash,
	Faq,
	Food,
	// Fylo,
	Tip,
	Profile,
	Social,
	Jobs,
	Crypto,
} from './assets'
import type { ProjectsType } from './types'

export const projectTypes = [
	'react',
	// 'typeScript',
	// 'tailwindCSS',
	'components',
	'API/Fetch',
	'javaScript',
]

export const projects: ProjectsType[] = [
	{
		name: 'crypto dash',
		tech: ['API/Fetch'],
		coverBg: Crypto,
		url: 'https://pratitb.github.io/crypto-dash/',
	},
	{
		name: 'job list filtering',
		tech: ['components'],
		coverBg: Jobs,
		url: 'https://pratitb.github.io/job-list-filtering/',
	},
	{
		name: 'social media dashboard',
		tech: ['components'],
		coverBg: Social,
		url: 'https://pratitb.github.io/social-media/',
	},
	{
		name: 'profile card',
		tech: ['components'],
		coverBg: Profile,
		url: 'https://pratitb.github.io/profile-card/',
	},
	{
		name: 'food item card',
		tech: ['components'],
		coverBg: Food,
		url: 'https://pratitb.github.io/food-item-card/',
	},
	{
		name: 'Automotive Cards',
		tech: ['components'],
		coverBg: Car,
		url: 'https://pratitb.github.io/car-type-card/',
	},
	{
		name: 'FAQs',
		tech: ['components'],
		coverBg: Faq,
		url: 'https://pratitb.github.io/faqs/',
	},
	/* {
		name: 'fylo',
		tech: ['tailwindCSS'],
		coverBg: Fylo,
		url: 'https://pratitb.github.io/fylo/',
	}, */
	{
		name: 'customer dashboard',
		tech: ['API/Fetch', 'react', 'SCSS'],
		coverBg: CustDash,
		url: 'https://pratitb.github.io/customer-dashboard/',
	},
	/* {
		name: 'loan dashboard',
		tech: ['react'],
		coverBg: Affinity,
		url: 'https://pratitb.github.io/affinity-react/',
	}, */
	{
		name: 'currency converter',
		tech: ['API/Fetch', 'react'],
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

export const platformDesc = `A platform where I try and showcase a few projects covering the technologies and concepts I work with. `
export const platformDescExt = `Apart from a few, all projects are built using React, Typescript & TailwindCSS.`
