import { projects } from "../utils/data"
import Card from "./card"

const Work = () => {
    return (
        <div className="my-4 flex flex-col gap-4 md:flex-row md:flex-wrap md: justify-center">
            {projects?.map((project, index: number) => (
                <Card
                    key={index}
                    screenshot={project?.url}
                    name={project?.name}
                    pills={project?.tech}
                />
            ))}
        </div>
    )
}

export default Work