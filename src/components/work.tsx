import { useEffect } from "react"
import { projects } from "../utils/data"
import Card from "./card"
import { usePill } from "../context/pillContext/pillContext"
import type { ProjectsType } from "../utils/types"
import { useProjects } from "../context/projectsContext/projectsContext"

const Work = () => {
    const { currentPill } = usePill()
    const { filterProjects, updateFilterProjects } = useProjects()
    useEffect(() => {
        if (!currentPill) {
            updateFilterProjects(projects)
        }
        else {
            const updatedList = projects?.filter((project: ProjectsType) => project?.tech?.includes(currentPill))
            updateFilterProjects(updatedList)
        }
    }, [currentPill])

    return (
        <div className="my-4 flex flex-col gap-4 md:flex-row md:flex-wrap md: justify-center">
            {filterProjects?.map((project, index: number) => (
                <Card key={index} screenshot={project?.coverBg} name={project?.name} pills={project?.tech} url={project?.url} />
            ))}
        </div>
    )
}

export default Work