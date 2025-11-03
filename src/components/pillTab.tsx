import React from 'react'
import type { PillType } from '../utils/types'
import clsx from 'clsx'

const PillTab: React.FC<PillType> = ({ label, getActionFn, active }) => {
    return (
        <p className={clsx('card-shdw border border-solid border-primary text-sm text-primary rounded-lg px-3 py-1 cursor-pointer capitalize flex-shrink-0', { 'bg-primary text-white': active })} onClick={getActionFn}>{label}</p>)
}

export default PillTab