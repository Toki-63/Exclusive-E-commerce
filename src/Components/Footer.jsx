import React from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import QR from '../assets/QR.png'
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { VscSend } from "react-icons/vsc";

const Footer = () => {
  return (
    <>
      <footer className='bg-black  mt-[140px]'>
        <Container>
          <Flex className='justify-between py-20'>
            <div>
              <div>
                <h1 className='text-white font-bold text-2xl font-Inter'>Exclusive</h1>
                <h2 className='text-xl font-medium font-poppins py-6 text-white '>Subscribe</h2>
                <p className='font-poppins pb-4 text-white'>Get 10% off your first order</p>
                <input
                  type='text'
                  className="w-40  bg-transparent text-[#FAFAFA]  lg:mt-0 text-xs py-2.5 pl-5 pr-3 border-1 rounded-full lg:rounded-sm"
                  placeholder="Enter your email"
                />
                <div className='relative'>
                  <VscSend className='absolute lg:right-14 right-6 -top-6.5 text-white cursor-pointer' />
                </div>
              </div>
            </div>
            <div className='font-poppins w-43.75 lg:mx-0 text-start text-white '>
              <h2 className='text-xl font-medium'>Support</h2>
              <p className='lg:pt-6 lg:pb-4 pt-2 pb-1'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
              <h2 className='lg:pb-4 pb-1'>exclusive@gamil.com</h2>
              <h2>+88015-88888-9999</h2>
            </div>

            <ul className="lg:mx-0 mx-auto lg:text-start text-center text-white">
              <h2 className='text-xl font-medium font-poppins'>Account</h2>
              <li className='lg:pt-6 lg:pb-4 pt-3 pb-1'>My Account</li>
              <li>Login / Register</li>
              <li className='lg:pt-6 lg:pb-4 pt-3 pb-1'>Cart</li>
              <li className='lg:pb-4 pb-1'>Wishlist</li>
              <li>Shop</li>
            </ul>

            <ul className="lg:mx-0 mx-auto lg:text-start text-center text-white">
              <h2 className='text-xl font-medium font-poppins'>Quick Link</h2>
              <li className='lg:pt-6 lg:pb-4 pt-3 pb-1'>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li className='plg:pt-6 lg:pb-4 pt-3 pb-1'>FAQ</li>
              <li>Contact</li>
            </ul>

            <div className='lg:mx-0 mx-auto lg:text-start text-center text-white'>
              <h2 className='text-xl font-medium font-poppins'>Download App</h2>
              <p className='text-xs font-poppins font-medium lg:pt-6 lg:pb-4 pt-3 pb-1'>Save $3 with App New User Only</p>
              <img src={QR} alt="" />
              <div className='flex justify-around gap-2 pt-6 text-2xl'>
                <FaFacebookF />
                <CiTwitter />
                <FaInstagram />
                <FaLinkedinIn />
              </div>
            </div>
          </Flex>
          <div className='flex justify-center items-center text-[#353434b3] gap-1 mt-[76px]'>
            <FaRegCopyright />
            <h2 className='text-[#353434b3] text-center py-4'>Copyright Rimel 2022. All right reserved</h2>
          </div>
        </Container>
      </footer>
    </>
  )
}

export default Footer
