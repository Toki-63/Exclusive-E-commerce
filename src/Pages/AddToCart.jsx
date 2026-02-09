import React, { useState } from 'react'
import Container from '../Components/Container'
import BreadCrumbs from '../Components/BreadCrumb'
import Flex from '../Components/Flex'
import Button from '../Components/Button'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router'

const AddToCart = () => {

  const Data = useSelector((state) => state.Products.cart)
  const [count, setCount] = useState(0)


  const handleProductDecrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  const handleProductIncrement = () => {
    setCount(count + 1)
  }

  return (
    <>
      <Container >

        <BreadCrumbs className="mb-10 mt-10"/>
        <div className='py-6 px-10 shadow-md flex justify-between'>
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>SubTotal</span>
        </div>


        {
          Data.map((item, idx) => {
            return (
              <div key={idx} className='py-6 px-10 my-10 shadow-sm flex justify-between '>
                <div className='flex gap-2 items-center'>
                  <img className='w-10 h-10' src={item.thumbnail} alt="" />
                  {item.title}</div>
                <div>${item.price}</div>
                <div className='items-center flex gap-2 py-1.5 px-3 border'>
                  {count}
                  <div className=' grid '>
                    <button onClick={handleProductIncrement} className='Block'><IoIosArrowUp /></button>
                    <button onClick={handleProductDecrement} className='Block'><IoIosArrowDown /></button>
                  </div>
                </div>
                <div>${item.price}</div>
              </div>
            )
          })
        }

        <Flex className='justify-between pt-6 pb-20 cart'>
          <NavLink to="/shop" end>
          <button className='bg-transparent hover:bg-black text-black hover:text-white duration-300 lg:px-12 lg:py-4  border cursor-pointer rounded-sm'>
            Return To Shop
          </button>
          </NavLink>
          <button className='bg-transparent hover:bg-black text-black hover:text-white duration-300 lg:px-12 lg:py-4  border cursor-pointer rounded-sm'>Update Cart</button>
        </Flex>

        <Flex className='justify-between items-start'>
          <form className='flex gap-4' action="">
            <input type="text" placeholder='Coupon Code' className='py-3.75 placeholder:ps-6  w-75 border outline-0 rounded-sm' />
            <Button className='bg-prime hover:bg-[#9a0606] lg:px-12 lg:py-4  rounded-sm'>Apply Coupon</Button>
          </form>
          <div className='w-117.5 rounded-sm border px-6 mb-35'>
            <h2 className='text-lg font-medium pt-8'>Cart total</h2>
            <div className='flex justify-between border-b-2 border-secondary pb-4'>
              <p>SubTotal</p>
              <span>$</span>
            </div>
            <div className='flex justify-between border-b-2 border-secondary py-4'>
              <p>Shipping</p>
              <span>Free</span>
            </div>
            <div className='flex justify-between border-b-2 border-secondary py-4 '>
              <p>Total</p>
              <span>$</span>
            </div>
            <div className='mt-8 mb-12 text-center'>
              <Button> Procees to checkout </Button>
            </div>
          </div>
        </Flex>
      </Container>
    </>
  )
}

export default AddToCart
