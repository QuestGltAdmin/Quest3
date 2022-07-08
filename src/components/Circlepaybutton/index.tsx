import React from 'react'
import { useActiveWeb3React } from 'hooks/useActiveWeb3React'
import { NavLink } from 'react-router-dom'

function CirclePayButton(): JSX.Element | null {
    const { chainId } = useActiveWeb3React()

    if (!chainId) return null

    return (
        <div
            className="flex items-center rounded bg-dark-900 hover:bg-dark-800 p-0.5 whitespace-nowrap text-sm font-bold cursor-pointer select-none pointer-events-auto"        >
            <div className="grid grid-flow-col auto-cols-max items-center rounded-lg bg-dark-1000 text-sm text-secondary py-2 px-3 pointer-events-auto text-primary">
                <NavLink to={'/circlepay'}>
                Cashout USDC
                </NavLink>
                
            </div>
        </div>
    )
}

export default CirclePayButton
