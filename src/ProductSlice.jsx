import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  cart : JSON.parse(localStorage.getItem("cart")) || [],
} 

export const ProductSlice = createSlice({
  name: 'value',
  initialState,
  reducers: {
    GetProducts: (state,action) => {
      state.value = action.payload
    },
    FilterReducer: (state,action) => {
      state.value = action.payload
    },
    CartReducer: (state,action) => {
     state.cart = [...state.cart,action.payload]
     localStorage.setItem("cart",JSON.stringify(state.cart))
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { GetProducts,FilterReducer,CartReducer} = ProductSlice.actions

export default ProductSlice.reducer