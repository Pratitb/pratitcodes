import { useState } from 'react'
import { ProjectsContext } from './projectsContext'
import type { ContextType, ProjectsType } from '../../utils/types'

export const ProjectsProvider = ({ children }: ContextType) => {
    const [filterProjects, setFilterProjects] = useState<ProjectsType[]>([])
    const updateFilterProjects = (value: ProjectsType[]) => {
        setFilterProjects(value)
    }
    return (
        <ProjectsContext.Provider value={{ filterProjects, updateFilterProjects }}>
            {children}
        </ProjectsContext.Provider>
    )
}

export default ProjectsProvider