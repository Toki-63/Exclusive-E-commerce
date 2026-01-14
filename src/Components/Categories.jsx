import React from 'react'
import SecHeading from './SecHeading'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoriesCards from './CategoriesCards';
import Phone from '../assets/Category-CellPhone.png'
import Computer from '../assets/Category-Computer.png'
import Watch from '../assets/Category-SmartWatch.png'
import Camera from '../assets/Category-Camera.png'
import HeadPhone from '../assets/Category-Headphone.png'
import Gamepad from '../assets/Category-Gamepad.png'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

function SampleNextArrow(props) {
  const {onClick } = props;
  return (
    <div
      className='absolute -top-20 right-8 bg-gray-300 rounded-full p-4'
      onClick={onClick}
    >
      <FaArrowRight />

      </div>
  );
}

function SamplePrevArrow(props) {
  const {onClick } = props;
  return (
    <div
      className='absolute -top-20 right-23 bg-gray-300 rounded-full p-4'
      onClick={onClick}
      >
        <FaArrowLeft />
    </div>
  );
}

const Categories = () => {
   const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
   };
  return (
    <div>
      <div className="container">
        <div className='mb-15'>
            <SecHeading
               title="Categories"
               heading="Browse By Category"
            />
        </div>
        <div className='slider-container'>
          <Slider {...settings}>
            <div className='hover:bg-prime rounded-sm ease-in duration-300'>
              <CategoriesCards
                 imgSrc={Phone}
                 categoryName='Phones'
              />
            </div>
            <div className='hover:bg-prime rounded-sm ease-in duration-300'>
              <CategoriesCards
                 imgSrc={Computer}
                 categoryName='Computers'
              />
            </div>
            <div className='hover:bg-prime rounded-sm ease-in duration-300'>
              <CategoriesCards
                 imgSrc={Watch}
                 categoryName='SmartWatch'
              />
            </div>
            <div className='hover:bg-prime rounded-sm ease-in duration-300'>
              <CategoriesCards
                 imgSrc={Camera}
                 categoryName='Camera'
              />
            </div>
            <div className='hover:bg-prime rounded-sm ease-in duration-300'>
              <CategoriesCards
                 imgSrc={HeadPhone}
                 categoryName='HeadPhones'
              />
            </div>
            <div className='hover:bg-prime rounded-sm ease-in duration-300'>
              <CategoriesCards
                 imgSrc={Gamepad}
                 categoryName='Gaming'
              />
            </div>
            <div className='hover:bg-prime rounded-sm ease-in duration-300'>
              <CategoriesCards
                 imgSrc={HeadPhone}
                 categoryName='HeadPhones'
              />
            </div>
            <div className='hover:bg-prime rounded-sm ease-in duration-300'>
              <CategoriesCards
                 imgSrc={Gamepad}
                 categoryName='Gaming'
              />
            </div>
          </Slider>
        </div>
        <div className='w-[1170px] h-[0.5px] bg-gray-300 mt-17.5 mb-17.5'>

         </div>
      </div>
    </div>
  )
}

export default Categories
