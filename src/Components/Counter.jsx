import React, { useEffect, useState } from 'react'
import Flex from './Flex'
import { countDownDateAndTime } from 'countdown-date-time';

const Counter = ({className}) => {

   const conduct_date = '2026-03-14 00:00:00';
   const [count, setCount] = useState({})

   useEffect(()=>{
      const interval = setInterval(()=>{
        const countDown = countDownDateAndTime(conduct_date);
        setCount(countDown);
      },1000)
   },[])




  return (
    
                <Flex className={`text-[32px] items-center font-bold gap-4 ${className}`}>
                    <h2><p className='text-xs font-medium'>Days</p>{count.days}  :</h2>
                    <h2><p className='text-xs font-medium'>Hours</p>{count.hours}  :</h2>
                    <h2><p className='text-xs font-medium'>Minutes</p>{count.minutes}  :</h2>
                    <h2><p className='text-xs font-medium'>Seconds</p>{count.seconds} </h2>
                </Flex>
  )
}

export default Counter
