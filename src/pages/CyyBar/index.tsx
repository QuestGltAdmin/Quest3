import React from 'react'
import { useActiveWeb3React } from '../../hooks/useActiveWeb3React'
import { Helmet } from 'react-helmet'
import XCyySign from '../../assets/images/xsushi-text-sign.png'
import InfoCard from './InfoCard'
import APRCard from './APRCard'
import StakeCard from './StakeCard'
import BalanceCard from './BalanceCard'
import { ChainId } from 'quest-quest3-sdk'
import {QUEST, xQUEST } from '../../constants'
import useTokenBalance from '../../hooks/useTokenBalance'

const mockData = {
    cyyEarnings: 345.27898,
    weightedApr: 15.34
}

export default function XCyy() {
    const { account, chainId } = useActiveWeb3React()

// mainnet    
    // const cyyBalance = useTokenBalance(QUEST[ChainId.MAINNET]?.address ?? '')
    // const xCyyBalance = useTokenBalance(xQUEST[ChainId.MAINNET]?.address ?? '')

// Rinkeby
    
    // const cyyBalance = useTokenBalance(RADIO[ChainId.RINKEBY]?.address ?? '')
    // const xCyyBalance = useTokenBalance(xRadio?.address ?? '')
  
// matic    
    const cyyBalance = useTokenBalance(
        (chainId === ChainId.MATIC)
        ? 
        QUEST[ChainId.MATIC]?.address ?? ''
        :
        (chainId === ChainId.RINKEBY)
        ? 
        QUEST[ChainId.RINKEBY ]?.address ?? ''
        :
        (chainId === ChainId.BSC_TESTNET)
        ? 
        QUEST[ChainId.BSC_TESTNET ]?.address ?? ''
        :
        (chainId === ChainId.MAINNET)
        ? 
        QUEST[ChainId.MAINNET ]?.address ?? ''
        :
        QUEST[ChainId.BSC ]?.address ?? ''
        )
        
    const xCyyBalance = useTokenBalance(
        (chainId === ChainId.MATIC)
        ?
        xQUEST[ChainId.MATIC]?.address ?? ''
        :
        (chainId === ChainId.RINKEBY)
        ?
        xQUEST[ChainId.RINKEBY]?.address ?? ''
        :
        (chainId === ChainId.BSC_TESTNET)
        ?
        xQUEST[ChainId.BSC_TESTNET]?.address ?? ''
        :
        (chainId === ChainId.MAINNET)
        ?
        xQUEST[ChainId.MAINNET]?.address ?? ''
        :
        xQUEST[ChainId.BSC]?.address ?? ''
        )

    return (
        <>
            <Helmet>
                <title>xQUEST | swap</title>
            </Helmet>
            <div className="flex flex-wrap w-full w-full min-h-fitContent">
                <div style={{minWidth: 250 }} className=" mb-6 justify-center regobar-side0-box">
                <div >
                     <img style={{ maxHeight: 40 }} src={XCyySign} alt={'xcyy sign'} /> 
                   
                    </div>
                    <InfoCard />
                    
                  
                </div>
                <div className="middile-logo-box justify-center">
                    <div className="w-full">
                        <div className="mb-4">
                            <APRCard />
                        </div>
                        <div>
                            <StakeCard cyyBalance={cyyBalance} xCyyBalance={xCyyBalance} />
                        </div>
                    </div>
                    
                </div>
                <div className="hidden md:block ml-6">
                        <BalanceCard
                            cyyEarnings={mockData.cyyEarnings}
                            xCyyBalance={xCyyBalance}
                            cyyBalance={cyyBalance}
                            weightedApr={mockData.weightedApr}
                        />
                    </div>
                <div className=" justify-center w-full">
                    <div className="md:hidden  w-full max-w-xl mt-6 mb-20">
                        <BalanceCard
                            cyyEarnings={mockData.cyyEarnings}
                            xCyyBalance={xCyyBalance}
                            cyyBalance={cyyBalance}
                            weightedApr={mockData.weightedApr}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
