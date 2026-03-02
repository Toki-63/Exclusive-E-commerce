import React from 'react'
import Container from '../Components/Container'
import BreadCrumb from '../Components/BreadCrumb'
import Card from '../Components/Card'
import SecHeading from '../Components/SecHeading'
import { useSelector } from 'react-redux'
import console from '../assets/console.png'

const WishList = () => {
  const wishItem = useSelector((state) => state.Products.wish)
  return (
    <div>
      <Container>
                <div className='mt-5 lg:mt-20'>
                    <BreadCrumb />
                </div>

                <div className=''>
                    <div className='flex justify-end mt-10'>
                        <button className='px-4 py-2 border-1  hover:text-white hover:border-primary hover:bg-primary rounded-sm duration-300'>Move All To Bag</button>
                    </div>

                    <div className='mt-[60px] flex flex-wrap gap-6'>

                        {
                            wishItem.map((item, id) => {
                                return (
                                    <Card
                                      key={id}
                                      productDetails={item}
                                      id={item.id}
                                      ImgSrc={item.thumbnail}
                                      title={item.title}
                                      price={Math.round(item.price-(item.price * item.discountPercentage)/100)}
                                      discount={item.price}
                                      review={item.reviews.length}
                                      percentage={item.discountPercentage}
                                      rating={item.rating}
                                      />
                                )
                            })
                        }

                    </div>

                    <div className='flex justify-between mt-42.5'>
                        <SecHeading
                            title="Just For You"
                        />
                        <button className='px-4 py-2 border-1 hover:text-white hover:border-primary hover:bg-primary rounded-sm duration-300'>See All</button>
                    </div>

                    <div className='flex gap-6 mt-[80px]'>
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
                    </div>

                </div>
            </Container>
    </div>
  )
}

export default WishList
