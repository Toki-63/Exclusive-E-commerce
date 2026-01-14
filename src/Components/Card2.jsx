import React from 'react'
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import Button from './Button';

const Card2 = ({ImgSrc,title,price,discount,review}) => {
  return (
    <div>
      <div className='w-67.5 group'>
      <div className="card relative rounded-sm overflow-hidden">
        <img src={ImgSrc} alt="" />
        <div className='absolute top-3 right-3 flex flex-col gap-y-4'>
          <div className="w-8.5 h-8.5 bg-white rounded-full flex justify-center items-center"><CiHeart className='text-2xl'/></div>
          <div className="w-8.5 h-8.5 bg-white rounded-full flex justify-center items-center"><IoEyeOutline className='text-2xl'/></div>
        </div>
        <div className='cart'>
          <Button className='absolute -bottom-10.5 right-0 group-hover:bottom-0 duration-300 ease-linear'>Add To Cart</Button>
        </div>
      </div>

      <h2 className='mt-4'>{title}</h2>
      <div className='flex gap-3 mt-2 mb-2'>
        <h3 className='text-prime'>${price}</h3>
        <h3 className='text-gray-400 line-through'>${discount}</h3>
      </div>
      <div className='flex items-center gap-2'>
        <div className="flex text-amber-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
        </div>
        <h5 className='text-gray-400'>({review})</h5>
      </div>
    </div>
    </div>
  )
}

export default Card2
