import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { removeCartReducer } from '../ProductSlice'

const CartItem = ({ImgSrc,Title,Price,id}) => {
    const dispatch = useDispatch()

      const [count, setCount] = useState(0)
    
    
      const handleProductDecrement = () => {
        if (count > 0) {
          setCount(count - 1)
        }
      }
      const handleProductIncrement = () => {
        setCount(count + 1)
      }
      const handleRemove = () => {
    dispatch(removeCartReducer(id))

  }

    return (
        <>
            <div className='py-6 px-10 my-10 shadow-sm flex justify-between items-center '>
                <div className='flex gap-2 items-center'>
                     <div className='relative' >
            <span className='w-4 h-4 text-xs bg-prime text-white absolute top-0 left-0 rounded-full items-center flex justify-center cursor-pointer' onClick={handleRemove}>X</span>
            <img className='w-20 h-12' src={ImgSrc} alt="product" />
            </div>
            {Title}
        
                    
                </div>
                <div>${Price}</div>
                <div className='items-center flex gap-2 py-1.5 px-3 border'>
                    {count}
                    <div className=' grid '>
                        <button onClick={handleProductIncrement} className='Block'><IoIosArrowUp /></button>
                        <button onClick={handleProductDecrement} className='Block'><IoIosArrowDown /></button>
                    </div>
                </div>
                <div>${Price}</div>
            </div>
        </>
    )
}

export default CartItem
