import React from 'react'
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import Button from './Button';
import { Rate } from 'antd';
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { CartReducer } from '../ProductSlice';




const Card = ({ImgSrc,title,price,discount,review,percentage,rating,id,productDetails}) => {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  const cartProducts = useSelector((state) => state.Products.cart)
  
  const handleDetails = () => {
    navigate(`/productDetails/${id}`)
  }

  const handleAddToCart = () => {
    const cartItem = {
      id,
      title,
      price,
      thumbnail: ImgSrc,
      discount,
      percentage,
      rating
    }
    dispatch(CartReducer(cartItem))
  }
  


  return (
    <div className='w-67.5 group'>
      <div className="card relative rounded-sm overflow-hidden">
        <img src={ImgSrc} alt="" onClick={handleDetails} className='cursor-pointer' />
        <h5 className='absolute top-3 left-3 py-1 px-3 bg-prime text-xs text-white rounded-sm'>-{percentage}%</h5>
        <div className='absolute top-3 right-3 flex flex-col gap-y-4'>
          <div className="w-8.5 h-8.5 bg-white rounded-full flex justify-center items-center"><CiHeart className='text-2xl'/></div>
          <div className="w-8.5 h-8.5 bg-white rounded-full flex justify-center items-center"><IoEyeOutline className='text-2xl'/></div>
        </div>
        <div className='cart'>
           <button onClick={handleAddToCart} className='absolute bg-black text-white block w-full py-2 px-21.75 font-pop cursor-pointer -bottom-10 group-hover:bottom-0 ease-linear duration-400'> Add to cart</button>
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
