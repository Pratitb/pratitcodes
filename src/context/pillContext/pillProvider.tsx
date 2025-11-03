import { useState } from "react"
import type { ContextType } from "../../utils/types"
import { PillContext } from "./pillContext"

export const PillProvider = ({ children }: ContextType) => {
    const [currentPill, setCurrentPill] = useState('')
    const updatePill = (value: string) => {
        setCurrentPill(prev => prev === value ? '' : value)
    }
    return (
        <PillContext.Provider value={{ currentPill, updatePill }}>
            {children}
        </PillContext.Provider>
    )
}

export default PillProvider