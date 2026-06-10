import React from 'react'
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { RiHeart3Fill } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import Button from './Button';
import { Rate } from 'antd';
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { cartData, removeWishReducer, SubTotalReducer, wishList } from '../ProductSlice';
import { Bounce, toast } from 'react-toastify';




const Card = ({ImgSrc,title,price,discount,review,percentage,rating,id,productDetails}) => {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  const cartProducts = useSelector((state) => state.Products.cart)
  const wishProducts = useSelector((state) => state.Products.wish)
  
  const isInWishlist = wishProducts.some((item) => item.id === id)
  
  const notifyCart = (matchItem) =>{
    matchItem == undefined ?
    toast.success('Successfully added', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        })
        :
    toast.warn('Already added', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
  }
  
  const notifyWish = (matchItem) =>{
    matchItem == undefined ?
    toast.success('Successfully added', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        })
        :
    toast.error('Removed From Wishlist', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
  }
  
  const handleDetails = () => {
    navigate(`/productDetails/${id}`)
  }

  const handleAddToCart = () => {
    const matchItem = cartProducts.find((findItem) => findItem.id == id)
    if(!matchItem){
      dispatch(cartData({...productDetails,quan : 1}))
      dispatch(SubTotalReducer())
    }
    notifyCart(matchItem)
  }


  const handleWish = () => {
    const matchItem = wishProducts.find((findItem) => findItem.id == id)
    !matchItem ? dispatch(wishList(productDetails)) : dispatch(removeWishReducer(id))
    notifyWish(matchItem)
  }
  


  return (
    <div className='lg:w-67.5 w-45  group'>
      <div className="card relative rounded-sm overflow-hidden">
        <img src={ImgSrc} alt="" onClick={handleDetails} className='cursor-pointer' />
        <h5 className='absolute lg:top-3 lg:left-3 left-1.5 top-1 lg:py-1 lg:px-3 px-1 bg-prime text-xs text-white rounded-sm'>-{percentage}%</h5>
        <div className='absolute top-3 right-3 flex flex-col gap-y-4'>
          {
           !isInWishlist ? <CiHeart onClick={handleWish} className='text-2xl w-6 h-6 lg:w-8.5 lg:h-8.5 bg-white rounded-full flex justify-center items-center'/> :
           <RiHeart3Fill onClick={handleWish} className='text-2xl w-6 h-6 lg:w-8.5 lg:h-8.5 text-prime rounded-full flex justify-center items-center'/>
          }
          <IoEyeOutline className='text-2xl w-6 h-6 lg:w-8.5 lg:h-8.5 bg-white rounded-full flex justify-center items-center'/>
        </div>
        <div className='cart'>
           <button onClick={handleAddToCart} className='absolute bg-black text-white block w-full lg:py-2 px-21.75 font-pop cursor-pointer -bottom-10 group-hover:bottom-0 ease-linear duration-400 '> Add to cart</button>
        </div>
      </div>

      <h2 className='mt-4 font-medium'>{title}</h2>
      <div className='flex gap-3 mt-2 mb-2'>
        <h3 className='text-prime'>${price}</h3>
        <h3 className='text-gray-400 line-through'>${discount}</h3>
      </div>
      <div className='flex items-center gap-2 text-sm'>
       <Rate allowHalf  defaultValue={rating}/>
        <h5 className='text-gray-400'>({review})</h5>
      </div>
    </div>
  )
}

export default Card
