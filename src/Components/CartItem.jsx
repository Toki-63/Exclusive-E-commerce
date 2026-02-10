import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const CartItem = ({thumbnail,title,price,id}) => {

      const [count, setCount] = useState(0)
    
    
      const handleProductDecrement = () => {
        if (count > 0) {
          setCount(count - 1)
        }
      }
      const handleProductIncrement = () => {
        setCount(count + 1)
      }

    return (
        <>
            <div className='py-6 px-10 my-10 shadow-sm flex justify-between items-center '>
                <div className='flex gap-2 items-center'>
                    <img className='w-10 h-10' src={thumbnail} alt="" />
                    {title}
                </div>
                <div>${price}</div>
                <div className='items-center flex gap-2 py-1.5 px-3 border'>
                    {count}
                    <div className=' grid '>
                        <button onClick={handleProductIncrement} className='Block'><IoIosArrowUp /></button>
                        <button onClick={handleProductDecrement} className='Block'><IoIosArrowDown /></button>
                    </div>
                </div>
                <div>${price}</div>
            </div>
        </>
    )
}

export default CartItem
