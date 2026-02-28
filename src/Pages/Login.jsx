import React from 'react'
import Container from '../Components/Container'
import BreadCrumb from '../Components/BreadCrumb'
import SignUpImg from '../assets/SignUp.png'

const Login = () => {
  return (
    <>
      <Container>
                <div className='mt-20'>
                    <BreadCrumb />
                </div>
                <div className='mt-15 pb-35 flex'>
                    <div className='absolute left-0'>
                        <img src={SignUpImg} alt="#" className='h-175 opacity-100 flex' />
                    </div>
                    <div className='pl-187.25 mt-31.25 z-1'>

                        <h4 className='text-[36px] font-medium font-Inter'>Log in into Exlusive</h4>
                        <p className='font-Poppins mt-6'>Enter your details below</p>

                        <div className='mt-10  '>
                            <input
                                type="email"
                                placeholder='Email or Phone Number'
                                className='border-b-2 border-secondary w-92.5 h-8 py-2 focus:outline-none' />
                        </div>

                        <div className='mt-10 mb-10 '>
                            <input
                                type="password"
                                placeholder='Password'
                                className='border-b-2 border-secondary w-92.5 h-8 py-2 focus:outline-none' />
                        </div>

                        <div className='flex gap-22 items-center'>
                            <h3 className='text-white px-12  py-4 bg-prime hover:bg-[#d60303] rounded-sm cursor-pointer'>
                                Log in
                            </h3>
                            <h6 className='text-prime hover:border-b cursor-pointer'>Forget Password?</h6>
                        </div>

                    </div>
                </div>
            </Container>
    </>
  )
}

export default Login
