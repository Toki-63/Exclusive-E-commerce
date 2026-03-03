import React, { useState } from 'react'
import logo from "../assets/Exclusive.png"
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";
import { GrCart } from "react-icons/gr";
import { NavLink, useNavigate } from "react-router";
import { useSelector } from 'react-redux'
import { LuUser } from "react-icons/lu";


const Navbar = () => {

  const navigate = useNavigate();
  const Data = useSelector((state) => state.Products.cart)
  const wData = useSelector((state) => state.Products.wish)
  const products = useSelector((state) => state.Products.value)


  const [search, setSearch] = useState("")
  const [searchProducts, setSearchProducts] = useState([])


  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    if(value.trim() === '') {
      setSearchProducts([]);
    } else{
      setSearchProducts(products.filter((item) => item.title.toLowerCase().includes(value.toLowerCase())))
    }
  }



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
                <li className='hover:border-b'>
                  <NavLink to="/about" end>
                    About
                  </NavLink></li>
                <li className='hover:border-b'>
                  <NavLink to="/signup" end>
                    Sign Up
                  </NavLink></li>
              </ul>
            </div>
            <div className='flex items-center gap-6'>
              <div className='relative'>
                <input
                onChange={handleSearch} 
                value={search}
                type="text" placeholder='What are you looking for?' className='bg-[#F5F5F5] text-sm py-1.75 pe-17.5 ps-5 outline-none rounded-sm' />
                <HiMiniMagnifyingGlass className='absolute top-1.75 right-1.75 text-[20px]' />
                <div className='absolute bg-white top-12 lg:w-[243px] w-[90%] max-h-60 overflow-y-auto z-10'>
                  {searchProducts.map((item) => (
                    <div className='flex gap-3 items-center border-b-2 border-gray-200 '
                    onClick={()=>{
                      navigate(`/productDetails/${item.id}`)
                      setSearch('')
                      setSearchProducts([])
                    }}>
                      <img src={item.thumbnail} alt="" className="w-10 h-10" />
                        {item.title}
                    </div>
                  ))
                  }
                </div>
              </div>



              <div className='flex items-center gap-4'>


              <div className='relative'>
                <NavLink to="/wishlist" end>
                <GoHeart  className=' text-xl ' />
                <div className='absolute -top-1 -right-2 h-4 w-4 font-medium bg-prime rounded-full flex items-center justify-center text-[10px] text-white'>
                      {wData.length}
                    </div>
                </NavLink>
              </div>



              <div className='relative'>
                <NavLink to="/cart" end>
                <GrCart className=' text-xl' />
                <div className='absolute -top-1 -right-2 h-4 w-4 font-medium bg-prime rounded-full flex items-center justify-center text-[10px] text-white'>
                      {Data.length}
                    </div>
                </NavLink>
              </div>
              </div>
              <NavLink to="/account" end  className='text-2xl'>
                <LuUser />
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
