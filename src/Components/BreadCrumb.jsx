import React from 'react'
import { useLocation } from 'react-router'

const BreadCrumb = ({className}) => {

  let location = useLocation()
  let LocationPath = location.pathname.split("/")[1]


  return (
    <div className={`${className} flex gap-4`}>
      <h2 className='text-gray-400 text-sm'>home</h2>
      <h2 className='text-gray-400 text-sm'>/</h2>
      <h2 className='text-gray-400 text-sm'>{LocationPath}</h2>
    </div>
  )
}

export default BreadCrumb
