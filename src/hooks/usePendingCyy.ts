import { BigNumber } from '@ethersproject/bignumber'
import { useActiveWeb3React } from 'hooks/useActiveWeb3React'
import { useMasterChefContract, useMiniChefV2Contract } from 'hooks/useContract'
import { useCallback, useEffect, useState } from 'react'
import { useBlockNumber } from 'state/application/hooks'
import Fraction from '../entities/Fraction'

// const usePending = (pid: number) => {
//     const [balance, setBalance] = useState<string>('0')
//     const { account } = useActiveWeb3React()

//     const masterChefContract = useMasterChefContract()
//     const currentBlockNumber = useBlockNumber()

//     const fetchPending = useCallback(async () => {
//         const pending = await masterChefContract?.pendingToken(pid, account)
//         const formatted = Fraction.from(BigNumber.from(pending), BigNumber.from(10).pow(18)).toString()
//         setBalance(formatted)
//     }, [account, masterChefContract, pid])

//     useEffect(() => {
//         if (account && masterChefContract && String(pid)) {
//             // pid = 0 is evaluated as false
//             fetchPending()
//         }
//     }, [account, currentBlockNumber, fetchPending, masterChefContract, pid])

//     return balance
// }

const usePending = (pid: number) => {
    const [balance, setBalance] = useState<string>('0')
    const { account } = useActiveWeb3React()

    const minChefContract = useMiniChefV2Contract()
    const currentBlockNumber = useBlockNumber()

    const fetchPending = useCallback(async () => {
        const pending = await minChefContract?.pendingToken(pid, account)
        const formatted = Fraction.from(BigNumber.from(pending), BigNumber.from(10).pow(18)).toString()
        setBalance(formatted)
    }, [account, minChefContract, pid])

    useEffect(() => {
        if (account && minChefContract && String(pid)) {
            // pid = 0 is evaluated as false
            fetchPending()
        }
    }, [account, currentBlockNumber, fetchPending, minChefContract, pid])

    return balance
}

export default usePending
