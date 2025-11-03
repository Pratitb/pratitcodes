import type { CardType } from "../utils/types"
import PillTab from "./pillTab"

const Card: React.FC<CardType> = ({ screenshot, name, pills, url }) => {
    return (
        <div className="card-shdw rounded-lg p-4 bg-white border border-solid border-brdrShdwDividers overflow-hidden md:max-w-[48%] lg:max-w-[32%]">
            <img src={screenshot} alt="" className="rounded-lg w-full max-w-full" />

            <div className="mt-3 min-w-0">
                <p className="uppercase text-md font-bold">{name}</p>

                <div className="flex flex-nowrap gap-2 max-w-full overflow-x-auto mt-2 mb-5">
                    {pills?.map((pill: string, index: number) => (
                        <PillTab key={index} label={pill} />
                    ))}
                </div>

                <a href={url} target="_blank" className="text-[13px] text-primary uppercase underline decoration-emerald-400 decoration-2">live demo in new tab</a>
            </div>
        </div>
    );
};


export default Card