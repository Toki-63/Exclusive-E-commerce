import React from 'react'
import JblCounter from './JblCounter'

const JBL = () => {
  return (
    <div className='mb-17.5'>
      <div className="container">
        <div className='relative bg-[url(./assets/Jbl.png)] bg-center bg-no-repeat bg-cover lg:h-125 h-60  w-full'>
           <div className='absolute lg:w-110.75 lg:left-14 lg:top-17.25 left-8 top-7.25'>
              <h2 className='lg:text-[16px] text-[12px] font-semibold text-[#00FF66]'>Categories</h2>
              <h2 className='font-semibold text-white text-[48px] lg:py-8 py-4'>Enhance Your Music Experience</h2>
              <JblCounter/>
              <button className='mt-10 lg:px-12 lg:py-4 px-3 py-2 bg-[#00FF66] text-white hover:text-[#00ff66] lg:text-2xl text-xs hover:bg-transparent border-1 border-[#00FF66] duration-300 rounded-sm'>Buy Now!</button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default JBL
