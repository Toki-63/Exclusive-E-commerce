import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { NavLink} from "react-router";

const Header = () => {
  return (
    <div>
      <header className='bg-black py-3 px-2 lg:px-0 text-white'>
        <div className="container">
         <div className='flex justify-between'>
            <div className='lg:w-[70%] w-full text-center flex justify-end'>
              <p className='lg:flex gap-2 lg:text-sm text-[10px] font-Poppins '>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                <NavLink to="/shop" end className='font-bold underline ml-1'>
                    Shop Now
                  </NavLink>
              </p>
            </div>
            <div className='w-[30%] flex justify-end'>
          <button className='flex items-center gap-1.25 text-sm'>English <MdOutlineKeyboardArrowDown /></button>
            </div>
         </div>
        </div>
      </header>
    </div>
  )
}

export default Header
