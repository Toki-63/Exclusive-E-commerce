import React from 'react'
import Container from '../Components/Container'
import BreadCrumb from '../Components/BreadCrumb'
import Button from '../Components/Button'

const Account = () => {
  return (
    <>
      <Container>
                <div className='flex justify-between mt-10 mb-20'>
                    <BreadCrumb />
                    <h2>Welcome! <span className='text-prime text-sm'>Md Rimel</span></h2>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <div>
                            <h2 className='font-Poppins font-medium'>Manage My Account</h2>
                            <ul className='pl-10 pt-4 font-Poppins'>
                                <li className='text-secondary cursor-pointer select-none hover:text-prime capitalize'>My Profile</li>
                                <li className='text-secondary hover:text-prime cursor-pointer select-none capitalize'>Address Book</li>
                                <li className='text-secondary hover:text-prime cursor-pointer select-none capitalize'>My Payment Options</li>
                            </ul>
                        </div>
                        <div className='pt-6'>
                            <h2 className='font-Poppins font-medium'>My Orders</h2>
                            <ul className='pl-10 pt-4 font-poppins'>
                                <li className='text-secondary hover:text-prime cursor-pointer select-none capitalize'>My Returns</li>
                                <li className='text-secondary hover:text-prime cursor-pointer select-none capitalize'>My Cancellations</li>
                            </ul>
                            <h2 className='font-Poppins font-medium pt-4'>My WishList</h2>
                        </div>

                    </div>

                    <div className='shadow-sm rounded-sm px-20 py-10'>
                        <h2 className='text-prime text-xl font-medium'>Edit Your Profile</h2>
                        <div className='flex gap-12.5 mt-4'>
                            <div>
                                <h2 className='font-Poppins'>First Name</h2>
                                <input type="text"
                                    placeholder='Md'
                                    className='w-82.5 h-12.5 pl-4 bg-[#f5f5f5] mt-2 rounded-sm focus:outline-none' />
                            </div>
                            <div>
                                <h2 className='font-Poppins'>Last Name</h2>
                                <input type="text"
                                    placeholder='Rimel'
                                    className='w-82.5 h-12.5 pl-4 bg-[#f5f5f5] mt-2 rounded-sm focus:outline-none' />
                            </div>
                        </div>

                        <div className='flex gap-12.5 mt-4'>
                            <div>
                                <h2 className='font-Poppins'>Email</h2>
                                <input type="text"
                                    placeholder='rimel1111@gmail.com'
                                    className='w-82.5 h-12.5 pl-4 bg-[#f5f5f5] mt-2 rounded-sm focus:outline-none' />
                            </div>
                            <div>
                                <h2 className='font-Poppins'>Address</h2>
                                <input type="text"
                                    placeholder='Kingston, 5236, United State'
                                    className='w-82.5 h-12.5 pl-4 bg-[#f5f5f5] mt-2 rounded-sm focus:outline-none' />
                            </div>
                        </div>

                        <div>
                            <div className='mt-4'>
                                <h2 className='font-Poppins'>Password Changes</h2>
                                <input type="text"
                                    placeholder='Current Passwod'
                                    className='w-177.5 h-12.5 pl-4 bg-[#f5f5f5] mt-4 rounded-sm focus:outline-none' />
                            </div>

                            <div>
                                <input type="text"
                                    placeholder='New Passwod'
                                    className='w-177.5 h-12.5 pl-4 bg-[#f5f5f5] mt-4 rounded-sm focus:outline-none' />
                            </div>

                            <div>
                                <input type="text"
                                    placeholder='Confirm New Passwod'
                                    className='w-177.5 h-12.5 pl-4 bg-[#f5f5f5] mt-4 rounded-sm focus:outline-none' />
                            </div>
                        </div>

                        <div className='flex justify-end gap-6 mt-6'>
                            <h2 className='mt-4 font-Poppins hover:text-prime cursor-pointer'>Cancel</h2>
                            <Button className='bg-prime hover:bg-[#b30606] px-12 py-4 font-Poppins text-white rounded-sm'>Save Changes</Button>
                        </div>
                    </div>
                </div>

            </Container>
    </>
  )
}

export default Account
