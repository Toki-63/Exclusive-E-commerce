import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
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
    
  },
})

// Action creators are generated for each case reducer function
export const { GetProducts,FilterReducer} = ProductSlice.actions

export default ProductSlice.reducer