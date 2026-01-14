import React from 'react'
import SecHeading from './SecHeading'
import console from "../assets/console.png"
import Card from './Card'
import Counter from './Counter'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import Btn from './Btn'



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


const FlashSales = () => {


 const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };


  return (
    <div className='mt-41.25'>
      <div className="container">
        <div className='flex gap-22'>
          <SecHeading 
            title="Today’s"
            heading="Flash Sales"
            />
            <Counter className='self-end'/>
        </div>
         <div className='slider-container mt-10'>
          <Slider {...settings}>
          <Card
            ImgSrc={console}
            title="HAVIT HV-G92 Gamepad"
            price="120"
            discount="160"
            review="88"
            percentage="40"
          />
          <Card
            ImgSrc={console}
            title="HAVIT HV-G92 Gamepad"
            price="120"
            discount="160"
            review="88"
            percentage="40"
          />
          <Card
            ImgSrc={console}
            title="HAVIT HV-G92 Gamepad"
            price="120"
            discount="160"
            review="88"
            percentage="40"
          />
          <Card
            ImgSrc={console}
            title="HAVIT HV-G92 Gamepad"
            price="120"
            discount="160"
            review="88"
            percentage="40"
          />
          <Card
            ImgSrc={console}
            title="HAVIT HV-G92 Gamepad"
            price="120"
            discount="160"
            review="88"
            percentage="40"
          />
          <Card
            ImgSrc={console}
            title="HAVIT HV-G92 Gamepad"
            price="120"
            discount="160"
            review="88"
            percentage="40"
          />
          </Slider>
         </div>
         <div className='text-center mt-[37px]'>
          <Btn>View All Products</Btn>
         </div>
         <div className='w-[1170px] h-[0.5px] bg-gray-300 mt-15 mb-17.5'>

         </div>
      </div>
    </div>
  )
}

export default FlashSales
