import React from 'react'
import Container from '../Components/Container'
import BreadCrumb from '../Components/BreadCrumb'
import SignUpImg from '../assets/SignUp.png'
import { FcGoogle } from "react-icons/fc";
import { NavLink } from 'react-router';

const SignUp = () => {
  return (
    <>
      <Container>
        <div className='mt-20'>
          <BreadCrumb />
        </div>
        <div className='mt-15 flex'>
          <div className='absolute left-0'>
            <img src={SignUpImg} alt="#" className='h-185.25 opacity-100 flex' />
          </div>
          <div className='pl-187.25 mt-31.25 z-1'>

            <h4 className='text-[36px] font-medium font-Inter'>Create an account</h4>
            <p className='font-Poppins mt-6'>Enter your details below</p>

            <div className='mt-12 '>
              <input
                type="text"
                placeholder='Name'
                className='border-b-2 border-secondary w-92.5 h-8 py-2 focus:outline-none'
              />
            </div>

            <div className='mt-10  '>
              <input
                type="email"
                placeholder='Email or Phone Number'
                className='border-b-2 border-secondary w-92.5 h-8 py-2 focus:outline-none'
              />
            </div>

            <div className='mt-10 mb-10 '>
              <input
                type="password"
                placeholder='Password'
                className='border-b-2 border-secondary w-92.5 h-8 py-2 focus:outline-none'
              />
            </div>

            <div>
              <button className='text-white px-33 py-4 bg-prime hover:bg-[#d60303] duration-300 rounded-sm cursor-pointer'>
                Create Account
              </button>
            </div>

            <div className='mt-8'>
              <button className='text-black flex items-center gap-2 border border-secondary hover:text-white hover:bg-black duration-300 px-22 py-4 rounded-sm cursor-pointer'>
                <span className='text-2xl'><FcGoogle/></span>
                Sign up with Google
              </button>
            </div>

            <div className='flex gap-2 items-center mt-8 text-center justify-center'>
              <p>Already have account?</p>
              <h6 className='hover:border-b hover:border-black font-medium'>Log in</h6>
            </div>

          </div>
        </div>
      </Container>
    </>
  )
}

export default SignUp
