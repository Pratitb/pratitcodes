import React from 'react'
import type { PillType } from '../utils/types'

const PillTab: React.FC<PillType> = ({ label }) => {
    return (
        <p className="card-shdw border border-solid border-primary text-sm text-primary rounded-lg px-3 py-1 cursor-pointer capitalize flex-shrink-0">{label}</p>)
}

export default PillTab