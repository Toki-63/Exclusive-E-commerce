import React from 'react'
import Container from '../Components/Container'
import BreadCrumb from '../Components/BreadCrumb'
import girls from '../assets/girls.png'
import { AiOutlineShop } from "react-icons/ai";
import { CiInstagram, CiTwitter } from 'react-icons/ci';
import { TiSocialLinkedin } from "react-icons/ti";
import tom from '../assets/tom.png'
import emma from '../assets/emma.png'
import will from '../assets/will.png'
import Services from '../Components/Services';
import { HiMiniCurrencyDollar, HiMiniShoppingBag } from 'react-icons/hi2';
import { FaSackDollar } from 'react-icons/fa6';

const About = () => {
  return (
    <>
      <Container>
        <div className='mt-5 lg:mt-20 mb-5 lg:mb-10.5'>
          <BreadCrumb/>
        </div>
        <div className='lg:flex flex-col gap-12 pb-35'>
          <div className='mt-8 font-poppins w-100 pl-5 lg:pl-0 pr-5 lg:pr-0 lg:w-131.25'>
            <h2 className='font-Inter font-bold text-[54px]'>Our Story</h2>
            <p className='my-8 font-Poppins'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3  millioons customers across the region. </p>
            <p className='font-Poppins'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categoriesranging from consumer.</p>
          </div>
          <div className='absolute mt-5 lg:mt-0 right-0'>
            <img src={girls} alt="" className='w-162.5 h-153 pb-35' />
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-3.5 justify-between items-center mt-100 lg:mt-35 '>


          <div className='w-67.5 h-57.5 border-2 border-secondary hover:border-prime hover:bg-prime hover:text-white duration-300 ease-linear text-center rounded-sm mx-auto'>
              <div className='mt-7 flex justify-center items-center w-18 h-18 mx-auto bg-black rounded-full border-[10px] border-gray-300'>
                <AiOutlineShop className='text-white text-3xl' />
              </div>
            <h5 className='text-[32px] mt-5 font-inter font-bold'>10.5k</h5>
            <h5 className='font-Poppins'>Sallers active our site</h5>
          </div>


         <div className='w-67.5 h-57.5 border-2 border-secondary hover:border-prime hover:bg-prime hover:text-white duration-300 ease-linear text-center rounded-sm mx-auto'>
              <div className='mt-7 flex justify-center items-center w-18 h-18 mx-auto bg-black rounded-full border-[10px] border-gray-300'>
                <HiMiniCurrencyDollar className='text-white text-3xl' />
              </div>
            <h5 className='text-[32px] mt-5 font-inter font-bold'>33k</h5>
            <h5 className='font-Poppins'>Mopnthly Produduct Sale</h5>
          </div>


          <div className='w-67.5 h-57.5 border-2 border-secondary hover:border-prime hover:bg-prime hover:text-white duration-300 ease-linear text-center rounded-sm mx-auto'>
              <div className='mt-7 flex justify-center items-center w-18 h-18 mx-auto bg-black rounded-full border-[10px] border-gray-300'>
                <HiMiniShoppingBag className='text-white text-3xl' />
              </div>
            <h5 className='text-[32px] mt-5 font-inter font-bold'>45.5k</h5>
            <h5 className='font-Poppins'>Customer active in our site</h5>
          </div>


          <div className='w-67.5 h-57.5 border-2 border-secondary hover:border-prime hover:bg-prime hover:text-white duration-300 ease-linear text-center rounded-sm mx-auto'>
              <div className='mt-7 flex justify-center items-center w-18 h-18 mx-auto bg-black rounded-full border-[10px] border-gray-300'>
                <FaSackDollar className='text-white text-3xl' />
              </div>
            <h5 className='text-[32px] mt-5 font-inter font-bold'>25k</h5>
            <h5 className='font-Poppins'>Annual gross sale in our site</h5>
          </div>


        </div>

        <div className='mt-15 flex flex-col lg:flex-row gap-3.5 justify-between items-center'>
          <div>
            <div>
              <img src={tom} alt="" />
              <h3 className='font-bold text-[32px] mt-8'>Tom Cruise</h3>
              <p className='mt-2'>Founder & Chairman</p>
            </div>
            <div className='flex gap-3 mt-2'>
              <CiTwitter />
              <CiInstagram />
              <TiSocialLinkedin />
            </div>
          </div>

          <div>
            <div>
              <img src={emma} alt="" />
              <h3 className='font-bold text-[32px] mt-8'>Emma Watson</h3>
              <p className='mt-2'>Managing Director</p>
            </div>
            <div className='flex gap-3 mt-2'>
              <CiTwitter />
              <CiInstagram />
              <TiSocialLinkedin />
            </div>
          </div>

          <div>
            <div>
              <img src={will} alt="" />
              <h3 className='font-bold text-[32px] mt-8'>Will Smith</h3>
              <p className='mt-2'>Product Designer</p>
            </div>
            <div className='flex gap-3 mt-2'>
              <CiTwitter />
              <CiInstagram />
              <TiSocialLinkedin />
            </div>
          </div>
        </div>

        <div>
          <Services />
        </div>

      </Container>
    </>
  )
}

export default About
