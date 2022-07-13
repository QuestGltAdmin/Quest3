import { useCallback, useEffect, useState } from 'react'
import { useMasterChefContract, useMiniChefV2Contract } from '../../../../hooks/useContract'
import _ from 'lodash'

function useFarms(){
    const masterChefContract = useMasterChefContract() // withSigner
    async function poolLen(){
        let len= await masterChefContract?.poolLength();
        return parseInt(len._hex)
    }
    
    const [farms_, setFarms_] = useState<any | undefined>()
    const [reward_, setFarmsReward_] = useState<any | 0>()
    const [apys_, setApys_] = useState<any | 0>()
    const farmData= useCallback(async ()=>{
        let len= await poolLen();
        let pa:any[]=[]
        let allocation:any[]=[]
        let reward:any[]=[]
        let rewardperday:any[]=[]
        let apy:any[]=[]
        let i;
        const totalAllocation = await  masterChefContract?.totalAllocPoint();  
        const tokenpersec = await  masterChefContract?.tokenPerSecond();  
        for( i=0;i<len;i++){
            pa[i]= await  masterChefContract?.lpToken(i);  
            allocation[i]= await  masterChefContract?.poolInfo(i);  
            allocation[i] = allocation[i].allocPoint._hex;
            allocation[i] = parseInt(allocation[i]);
            reward[i] = ((allocation[i]/totalAllocation)*tokenpersec)/1e18;
            rewardperday[i] = reward[i]*86400
            apy[i] = ((1+(rewardperday[i]/365))**365-1)
        }
        const result = await Promise.all(pa);
        const rewards = await Promise.all(rewardperday);
        const apys = await Promise.all(apy);
        return {
            result:result,
            rewards:rewards,
            apys:apys
        };
    },[])
    useEffect(() => {
        const fetchData = async () => {
            const results = await Promise.all([farmData()])
            const combined = _.concat(results[0].result)
            const combined1 = _.concat(results[0].rewards)
            const combined2 = _.concat(results[0].apys)
            // const sorted = orderBy(combined, ['pid'], ['desc'])
            setFarms_(combined)
            setFarmsReward_(combined1)
            setApys_(combined2)
        }
        fetchData()
    }, [farmData])

    return {
        farms_: farms_,
        reward_: reward_,
        apys_:apys_,
      };
}

export default useFarms