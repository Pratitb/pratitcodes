import { usePill } from "../context/pillContext/pillContext"
import { useProjects } from "../context/projectsContext/projectsContext"
import { platformDesc, platformDescExt, projects, projectTypes } from "../utils/data"
import PillTab from "./pillTab"

const MobNavBar = () => {
    const totalProjsLen = projects?.length
    const { updatePill, currentPill } = usePill()
    const { filterProjects } = useProjects()
    const handlePill = (type: string) => {
        updatePill(type)
    }

    return (
        <div className="">
            <p className='text-2xl uppercase font-bold text-center'>pratit codes</p>
            <p className="text-sm text-center leading-5">{platformDesc}</p>
            <p className="text-sm text-center leading-5">{platformDescExt}</p>
            <div className="flex max-w-full overflow-auto whitespace-nowrap p-2 py-4 gap-2">
                {projectTypes?.map((type: string, index: number) => {
                    return <PillTab key={index} label={type} getActionFn={() => handlePill(type)} active={currentPill?.toLowerCase() === type?.toLowerCase()} />
                })}
            </div>
            <p className="text-sm capitalize text-primary">{`showing ${filterProjects?.length} / ${totalProjsLen} projects`}</p>
        </div>
    )
}

export default MobNavBar