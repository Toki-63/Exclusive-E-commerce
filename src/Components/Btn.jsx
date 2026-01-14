import React from 'react'

const Btn = ({children}) => {
  return (
    <div>
      <button className='text-white bg-prime py-4 px-12 rounded-sm'>
        {children}
      </button>
    </div>
  )
}

export default Btn
