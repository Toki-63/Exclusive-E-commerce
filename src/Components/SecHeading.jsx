import React from 'react'

const SecHeading = ({title,heading}) => {
  return (
    <div>
        <div className='flex items-center gap-2.5'>
            <div className='w-5 h-10 rounded-sm bg-prime'></div>
          <h5 className='text-prime font-semibold'>{title}</h5>
        </div>
      <h2 className='font-semibold text-4xl mt-6'>{heading}</h2>
    </div>
  )
}

export default SecHeading
