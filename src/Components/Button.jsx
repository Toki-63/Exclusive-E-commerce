import React from 'react'

const Button = ({children,className}) => {
  return (
    <div className='text-center'>
      <button className={`${className} text-white  font-medium bg-black cursor-pointer py-2.25 w-full`}>
        {children}
      </button>
    </div>
  )
}

export default Button
