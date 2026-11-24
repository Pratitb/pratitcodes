import {
	CustDash,
	Social,
	Crypto,
	F1Valut,
	ExpTrack,
} from './assets'
import type { ProjectsType } from './types'

export const projectTypes = [
	'react',
	'components',
	'API/Fetch',
	'zustand'
]

export const projects: ProjectsType[] = [
	{
		name: 'expense tracker',
		tech: ['react', 'zustand'],
		coverBg: ExpTrack,
		url: 'https://pratitb.github.io/expense-tracker/',
		github: 'https://github.com/Pratitb/expense-tracker.git'
	},
	{
		name: 'f1 vault',
		tech: ['API/Fetch'],
		coverBg: F1Valut,
		url: 'https://pratitb.github.io/f1-vault/',
		github: 'https://github.com/Pratitb/f1-vault.git'
	},

	{
		name: 'crypto dash',
		tech: ['API/Fetch'],
		coverBg: Crypto,
		url: 'https://pratitb.github.io/crypto-dash/',
		github: 'https://github.com/Pratitb/crypto-dash.git'
	},

	{
		name: 'social media dashboard',
		tech: ['components'],
		coverBg: Social,
		url: 'https://pratitb.github.io/social-media/',
		github: 'https://github.com/Pratitb/social-media.git'
	},
	{
		name: 'customer dashboard',
		tech: ['API/Fetch', 'react', 'SCSS'],
		coverBg: CustDash,
		url: 'https://pratitb.github.io/customer-dashboard/',
		github: 'https://github.com/Pratitb/customer-dashboard.git'
	},

]

export const platformDesc = `A platform where I try and showcase a few projects covering the technologies and concepts I work with. `
export const platformDescExt = `Apart from a few, all projects are built using React, TypeScript, JavaScript & Tailwind.`
