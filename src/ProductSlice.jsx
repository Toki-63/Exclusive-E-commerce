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
    cartData: (state, action) => {
      state.cart = [...state.cart, action.payload]
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    removeCartReducer: (state,action) => {
     state.cart = [...state.cart.filter((item)=>item.id !==action.payload)]
     localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    IncrementReducer: (state,action) => {
      state.cart = state.cart.map((item)=>{
        return item.id == action.payload ? {...item , quan: item.quan+1} : item
      })
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    DecrementReducer:(state,action) => {
      state.cart = state.cart.map((item)=>{
        return item.id == action.payload ? {...item , quan: item.quan-1} : item
      })
      localStorage.setItem("cart", JSON.stringify(state.cart))
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { GetProducts,FilterReducer,cartData,removeCartReducer,IncrementReducer,DecrementReducer} = ProductSlice.actions

export default ProductSlice.reducer