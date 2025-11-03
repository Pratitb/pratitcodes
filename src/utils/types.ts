export interface PillType {
	label?: string;
	getActionFn?: () => void;
	active?: boolean;
}
export interface CardType {
	screenshot?: string;
	name?: string;
	pills?: string[];
	url?: string;
}
export interface ContextType {
	children: React.ReactNode;
}
export interface PillContextType {
	currentPill: string;
	updatePill: (value: string) => void;
}
export interface ProjectsType {
	name?: string;
	tech?: string[];
	coverBg?: string;
	url?: string;
}
export interface ProjectsContextType {
	filterProjects: ProjectsType[];
	updateFilterProjects: (value: ProjectsType[]) => void;
}
