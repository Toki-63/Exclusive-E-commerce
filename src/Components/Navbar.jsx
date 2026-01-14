import React from 'react'
import logo from "../assets/Exclusive.png"
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";
import { GrCart } from "react-icons/gr";
import { NavLink } from "react-router";


const Navbar = () => {
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
                <li className='hover:border-b'>Contact</li>
                <li className='hover:border-b'>About</li>
                <li className='hover:border-b'>Sign Up</li>
              </ul>
            </div>
            <div className='flex items-center gap-6'>
              <div className='relative'>
                <input type="text" placeholder='What are you looking for?' className='bg-[#F5F5F5] text-sm py-1.75 pe-17.5 ps-5 outline-none rounded-sm' />
                <HiMiniMagnifyingGlass className='absolute top-1.75 right-1.75 text-[20px]' />
              </div>
              <div className='flex items-center gap-4'>
                <GoHeart className=' text-xl' />
                <GrCart className=' text-xl' />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
