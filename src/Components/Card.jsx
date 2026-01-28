import React from 'react'
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import Button from './Button';
import { Rate } from 'antd';
import { useNavigate } from "react-router";




const Card = ({ImgSrc,title,price,discount,review,percentage,rating,id}) => {
  let navigate = useNavigate();
  
  const handleDetails = () => {
    navigate(`/productDetails/${id}`)
  }
  return (
    <div className='w-67.5 group' onClick={handleDetails}>
      <div className="card relative rounded-sm overflow-hidden">
        <img src={ImgSrc} alt="" />
        <h5 className='absolute top-3 left-3 py-1 px-3 bg-prime text-xs text-white rounded-sm'>-{percentage}%</h5>
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
       <Rate allowHalf  defaultValue={rating} />
        <h5 className='text-gray-400'>({review})</h5>
      </div>
    </div>
  )
}

export default Card
