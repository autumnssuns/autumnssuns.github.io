export type SkillList = {
	type: string
	skills: string[]
}[]

export type EducationList = {
	title: string
	provider: string
	duration: string
	details: string[]
}[]

export type NestedDetail = {
	summary: string
	details: NestedDetail[] | string[]
}

export type WorkList = {
	title: string
	company: string
	summary: string
	duration: string
	details: string[] | NestedDetail[]
}[]

export type About = {
	name: string
	title: string
	contacts: {
		type: string
		label: string
		value: string
		icon: string
	}[]
	description: string
}
