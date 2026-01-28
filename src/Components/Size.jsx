import React from 'react'

const Size = ({heading}) => {
  return (
    <div>
      <h4 className='px-2 py-2 text-sm rounded-sm border-2 border-secondary font-poppins font-medium hover:bg-prime uppercase cursor-pointer'>{heading}</h4>
    </div>
  )
}

export default Size
