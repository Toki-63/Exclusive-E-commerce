import { configureStore } from '@reduxjs/toolkit'
import { ProductSlice } from './ProductSlice'

export const store = configureStore({
  reducer: {
    Products : ProductSlice.reducer
  },
})



export default store