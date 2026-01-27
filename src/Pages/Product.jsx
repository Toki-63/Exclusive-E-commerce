import React, { useEffect, useState } from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import { VscCircleLargeFilled } from "react-icons/vsc";
import Card from '../Components/Card'
import BreadCrumb from '../Components/BreadCrumb';
import Paginate from '../Components/Paginate';
import Skeleton from '../Components/Skeleton';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { FilterReducer, GetProducts } from '../ProductSlice';



const Product = () => {

  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState([])
  const [value, setValue] = useState(6)


  const dispatch = useDispatch()


  async function getAllData() {
    await axios.get('https://dummyjson.com/products')
      .then((res) => {
        setProduct(res.data.products)
        setLoading(true)
        dispatch(GetProducts(res.data.products))
      })
  }

  useEffect(() => {
    getAllData()
  }, [])




  useEffect(() => {
    const UniqueCategory = [... new Set(product.map((item) => item.category))]
    setCategory(UniqueCategory)
  }, [product])


  const handleFilter = (item) => {
    const FilterItem = product.filter((categoryItem) => categoryItem.category == item)
    dispatch(FilterReducer(FilterItem))
  }





  return (
    <>
      <Container>
        <BreadCrumb className='mt-20 mb-12.5' />
        <div className='flex justify-between'>
          <h3 className='text-start font-Poppins font-bold text-xl'>Shop by Category</h3>
          <div className="flex items-center gap-2 lg:mb-3.5 -mb-3.75">
            <h2>Show:</h2>
            <select onChange={(e)=>{setValue(e.target.value)}} className="py-1 px-2 border border-gray-300 rounded-md">
              <option value='6' >6</option>
              <option value='9' >9</option>
              <option value='12' >12</option>
            </select>
          </div>
        </div>
        <Flex className='mt-12.5'>
          <div className="w-[20%]">
            <div>
              <ul className='pt-5 pe-4.5 font-Poppins flex flex-col gap-4'>

                <li onClick={() => { dispatch(GetProducts(product)) }} className='flex justify-between w-54.25 cursor-pointer capitalize'>All Products</li>

                {category.map((item, idx) => {
                  return (
                    <li key={idx} onClick={() => handleFilter(item)} className='flex justify-between w-54.25 cursor-pointer capitalize'>{item}</li>
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
                  <Paginate itemsPerPage={value} />
                  :
                  <>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
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
