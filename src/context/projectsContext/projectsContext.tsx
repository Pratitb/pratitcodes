import { createContext, useContext } from "react";
import type { ProjectsContextType } from "../../utils/types";

export const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined)

export const useProjects = () => {
    const context = useContext(ProjectsContext)
    if (!context) throw new Error('Please check Projects Context')
    return context
}