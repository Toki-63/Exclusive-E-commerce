import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <div>
      <header className='bg-black py-3 text-white'>
        <div className="container">
         <div className='flex justify-between'>
            <div className='w-[70%] flex justify-end'>
              <p className='flex gap-2 text-sm'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
              <a href="">ShopNow</a></p>
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
