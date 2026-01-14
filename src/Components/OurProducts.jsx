import React from 'react'
import SecHeading from './SecHeading'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import Card from './Card';
import console from "../assets/console.png"
import Btn from './Btn';

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

const OurProducts = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows:2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div>
      <div className="container">
        <div className='mb-15'>
            <SecHeading
               title="Our Products"
               heading="Explore Our Products"
            />
        </div>
                 <div className='slider-container '>
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
         <div className='mt-[76px] text-center'>
          <Btn>View All Products</Btn>
         </div>
      </div>
    </div>
  )
}

export default OurProducts
