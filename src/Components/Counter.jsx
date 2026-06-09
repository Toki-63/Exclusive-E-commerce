import React, { useEffect, useState } from 'react'
import Flex from './Flex'
import { countDownDateAndTime } from 'countdown-date-time';
import Semiclone from '../assets/Semiclone.png'

const Counter = ({className}) => {

   const conduct_date = '2026-07-14 00:00:00';
   const [count, setCount] = useState({})

   useEffect(()=>{
      const interval = setInterval(()=>{
        const countDown = countDownDateAndTime(conduct_date);
        setCount(countDown);
      },1000)
   },[])




  return (
    
                <Flex className={`lg:text-[32px]  items-center font-bold lg:gap-4 gap-2 ${className}`}>
                    <h2><p className='text-xs font-medium'>Days</p>{count.days}  :</h2>
                    <h2><p className='text-xs font-medium'>Hours</p>{count.hours}  :</h2>
                    <h2><p className='text-xs font-medium'>Minutes</p>{count.minutes}  :</h2>
                    <h2><p className='text-xs font-medium'>Seconds</p>{count.seconds} </h2>
                </Flex>

            //      <div className='relative'>
            //     <Flex className={`${className} justify-center items-center text-center font-poppins font-medium absolute lg:text-2xl text-[8px] gap-x-3 lg:gap-x-5 top-[-120px] left-40 lg:left-80 lg:top-[-65px]`}>
            //         <div className={className}>
            //             <h2>Day's</h2>
            //             <h3>{count.days}</h3>
            //         </div>

            //         <img src={Semiclone} alt="" />

            //         <div className={className}>
            //             <h2>Hours</h2>
            //             <h3>{count.hours}</h3>
            //         </div>

            //         <img src={Semiclone} alt="" />

            //         <div className={className}>
            //             <h2>Minutes</h2>
            //             <h3>{count.minutes}</h3>
            //         </div>

            //         <img src={Semiclone} alt="" />

            //         <div className={className}>
            //             <h2>Seconds</h2>
            //             <h3>{count.seconds}</h3>
            //         </div>
            //     </Flex>
            // </div>
  )
}

export default Counter
