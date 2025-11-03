import { createContext, useContext } from "react";
import type { PillContextType } from "../../utils/types";

export const PillContext = createContext<PillContextType | undefined>(undefined)

export const usePill = () => {
    const context = useContext(PillContext)
    if (!context) throw new Error('Please check Pill Context')
    return context
}
