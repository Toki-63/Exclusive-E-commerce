import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { DecrementReducer, IncrementReducer, removeCartReducer, SubTotalReducer } from '../ProductSlice'
import { Bounce, toast } from 'react-toastify'

const CartItem = ({ImgSrc,Title,Price,id,quantity}) => {
    const dispatch = useDispatch()

      const [count, setCount] = useState(0)

      const notify = () => toast.error('Removed', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
    
    
      const handleIncrement = () => {
        dispatch(IncrementReducer(id))
        dispatch(SubTotalReducer())
      }
      const handleDecrement = () => {
        if(quantity > 1){
          dispatch(DecrementReducer(id))
          dispatch(SubTotalReducer())
        }
      }


      const handleRemove = () => {
    dispatch(removeCartReducer(id))
    dispatch(SubTotalReducer())
    notify()
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
                    {quantity}
                    <div className=' grid '>
                        <IoIosArrowUp onClick={handleIncrement}/>
                        <IoIosArrowDown onClick={handleDecrement}/>
                    </div>
                </div>
                <div>${Number(quantity * Price).toFixed(2)}</div>
            </div>
        </>
    )
}

export default CartItem
