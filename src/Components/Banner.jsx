import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../assets/banner.jpg"

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className='w-3 h-3 rounded-full bg-gray-500' />
    )
  };

  
  return (
    <div>
      <div className="container">
        <div className="flex">
          <div className='border-r border-[#00000044] pr-5.5'>
           <ul className='banner-ul flex flex-col gap-y-4 mt-10'>
              <li className='flex justify-between items-center'>Woman’s Fashion <MdOutlineKeyboardArrowRight  className='text-2xl'/></li>
              <li className='flex justify-between items-center'>Men’s Fashion <MdOutlineKeyboardArrowRight  className='text-2xl'/></li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Baby’s & Toys</li>
              <li>Groceries &</li>
              <li>Health & Beauty</li>
           </ul>
          </div>
             <div className='w-full mt-10 -ml-23'>
              <Slider {...settings}>
                <div>
                  <img src={banner} alt="" />
                </div>
                <div>
                  <img src={banner} alt="" />
                </div>
                <div>
                  <img src={banner} alt="" />
                </div>
                <div>
                  <img src={banner} alt="" />
                </div>
                <div>
                  <img src={banner} alt="" />
                </div>
              </Slider>
             </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
