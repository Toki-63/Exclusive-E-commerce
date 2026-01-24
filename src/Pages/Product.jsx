import React, { useEffect, useState } from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import { VscCircleLargeFilled } from "react-icons/vsc";
import Card from '../Components/Card'
import BreadCrumb from '../Components/BreadCrumb';
import Paginate from '../Components/Paginate';
import Skeleton from '../Components/Skeleton';
import axios from 'axios';



const Product = () => {

  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState({})

  // useEffect(() => {
  //   fetch('https://dummyjson.com/products')
  //     .then(res => res.json())
  //     .then(data => {
  //       setProduct(data.products)
  //       setLoading(true)
  //     });
  // },[])


  async function getAllData(){
    await axios.get('https://dummyjson.com/products')
    .then((res)=>{
      setProduct(res.data.products)
      setLoading(true)
    })
  }

  useEffect(()=>{
    getAllData()
  },[])




  useEffect(()=>{
    const UniqueCategory = [... new Set(product.map((item)=>item.category))]
    setCategory(UniqueCategory)
  },[product])



  return (
    <>
      <Container>
        <BreadCrumb className='mt-20' />
        <Flex className='mt-12.5'>
          <div className="w-[20%]">
            <div>
              <h3 className='text-start font-Poppins font-bold text-xl'>Shop by Category</h3>
              <ul className='pt-5 pe-4.5 font-Poppins flex flex-col gap-4'>
                { product.map((item)=>{
                  return(
                    <li className='flex justify-between w-54.25'>{item.category}</li>
                  )
                })
                }
              </ul>
              <ul className='mt-10'>
                <h3 className='text-start font-bold text-xl font-Poppins'>Shop by Color</h3>
                <li className='mt-3.75 flex items-center gap-2.5'><VscCircleLargeFilled />Color 1</li>
                <li className='py-4.5 flex items-center gap-2.5'><VscCircleLargeFilled className='text-red-500' />Color 2</li>
                <li className='flex items-center gap-2.5'><VscCircleLargeFilled className='text-green-500' />Color 3</li>
              </ul>
            </div>
          </div>
          <div className='w-[80%] relative'>
            <Flex className='flex-wrap justify-between'>
              { 
                loading ?
                <Paginate itemsPerPage={6} products={product} />
                :
                <>
                 <Skeleton/>
                 <Skeleton/>
                 <Skeleton/>
                 <Skeleton/>
                 <Skeleton/>
                 <Skeleton/>
                </>
              }

            </Flex>
          </div>
        </Flex>
      </Container>
    </>
  )
}

export default Product
