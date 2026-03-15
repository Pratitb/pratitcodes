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
	Interests,
	F1Valut,
	PricingModels,
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
		name: 'pricing models',
		tech: ['components'],
		coverBg: PricingModels,
		url: 'https://pratitb.github.io/pricing-models/',
		github: 'https://github.com/Pratitb/pricing-models.git'
	},
	{
		name: 'f1 vault',
		tech: ['API/Fetch'],
		coverBg: F1Valut,
		url: 'https://pratitb.github.io/f1-vault/',
		github: 'https://github.com/Pratitb/f1-vault.git'
	},
	{
		name: 'interests',
		tech: ['components'],
		coverBg: Interests,
		url: 'https://pratitb.github.io/interests/',
		github: 'https://github.com/Pratitb/interests.git'
	},
	{
		name: 'crypto dash',
		tech: ['API/Fetch'],
		coverBg: Crypto,
		url: 'https://pratitb.github.io/crypto-dash/',
		github: 'https://github.com/Pratitb/crypto-dash.git'
	},
	{
		name: 'job list filtering',
		tech: ['components'],
		coverBg: Jobs,
		url: 'https://pratitb.github.io/job-list-filtering/',
		github: 'https://github.com/Pratitb/job-list-filtering.git'
	},
	{
		name: 'social media dashboard',
		tech: ['components'],
		coverBg: Social,
		url: 'https://pratitb.github.io/social-media/',
		github: 'https://github.com/Pratitb/social-media.git'
	},
	{
		name: 'profile card',
		tech: ['components'],
		coverBg: Profile,
		url: 'https://pratitb.github.io/profile-card/',
		github: 'https://github.com/Pratitb/profile-card.git'
	},
	{
		name: 'food item card',
		tech: ['components'],
		coverBg: Food,
		url: 'https://pratitb.github.io/food-item-card/',
		github: 'https://github.com/Pratitb/food-item-card.git'
	},
	{
		name: 'Automotive Cards',
		tech: ['components'],
		coverBg: Car,
		url: 'https://pratitb.github.io/car-type-card/',
		github: 'https://github.com/Pratitb/car-type-card.git'
	},
	{
		name: 'FAQs',
		tech: ['components'],
		coverBg: Faq,
		url: 'https://pratitb.github.io/faqs/',
		github: 'https://github.com/Pratitb/faqs.git'
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
		github: 'https://github.com/Pratitb/customer-dashboard.git'
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
		github: 'https://github.com/Pratitb/currencify.git'
	},
	{
		name: 'tip calculator',
		tech: ['javaScript'],
		coverBg: Tip,
		url: 'https://pratitb.github.io/tip-calculator-app/',
		github: 'https://github.com/Pratitb/tip-calculator-app.git'
	},
	{
		name: 'age calculator',
		tech: ['javaScript'],
		coverBg: Age,
		url: 'https://pratitb.github.io/age-calculator/',
		github: 'https://github.com/Pratitb/age-calculator.git'
	},
]

export const platformDesc = `A platform where I try and showcase a few projects covering the technologies and concepts I work with. `
export const platformDescExt = `Apart from a few, all projects are built using React, Typescript & TailwindCSS.`
