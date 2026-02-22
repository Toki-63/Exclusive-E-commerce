import React, { useState } from 'react'
import Container from '../Components/Container'
import BreadCrumbs from '../Components/BreadCrumb'
import Flex from '../Components/Flex'
import Button from '../Components/Button'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router'
import CartItem from '../Components/CartItem'

const AddToCart = () => {

  const cartData = useSelector((state) => state.Products.cart)


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
          cartData.map((item, idx) => {
          
            if (!item) return null
            return (

              <CartItem
                key={item.id ?? idx}
                Price={item.price}
                ImgSrc={item.thumbnail}
                Title={item.title}
                id={item.id}
                quantity={item.quan}
              />
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
