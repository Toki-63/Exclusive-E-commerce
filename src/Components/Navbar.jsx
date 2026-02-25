import React from 'react'
import logo from "../assets/Exclusive.png"
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";
import { GrCart } from "react-icons/gr";
import { NavLink, useNavigate } from "react-router";
import { useSelector } from 'react-redux'


const Navbar = () => {

  
  const Data = useSelector((state) => state.Products.cart)
  



  return (
    <>
      <nav className='pt-10 pb-4  border-b border-[#00000044]'>
        <div className="container">
          <div className="flex justify-between">
            <div>
              <img src={logo} alt="" />
            </div>
            <div>
              <ul className='flex gap-12'>
                <li className='hover:border-b'>     
                  <NavLink to="/" end>
                    Home
                  </NavLink></li>
                <li className='hover:border-b'>     
                  <NavLink to="/shop" end>
                    Shop
                  </NavLink></li>
                <li className='hover:border-b'>
                  <NavLink to="/contact" end>
                    Contact
                  </NavLink></li>
                <li className='hover:border-b'>About</li>
                <li className='hover:border-b'>
                  <NavLink to="/signup" end>
                    Sign Up
                  </NavLink></li>
              </ul>
            </div>
            <div className='flex items-center gap-6'>
              <div className='relative'>
                <input type="text" placeholder='What are you looking for?' className='bg-[#F5F5F5] text-sm py-1.75 pe-17.5 ps-5 outline-none rounded-sm' />
                <HiMiniMagnifyingGlass className='absolute top-1.75 right-1.75 text-[20px]' />
              </div>
              <div className='flex items-center gap-4 relative'>
                <GoHeart  className=' text-xl ' />
                <NavLink to="/cart" end>
                <GrCart className=' text-xl' />
                <div className='absolute -top-1 -right-2 h-4 w-4 font-medium bg-prime rounded-full flex items-center justify-center text-[10px] text-white'>
                      {Data.length}
                    </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
