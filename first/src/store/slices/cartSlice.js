import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value : 0,
  products : []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers : {
    addToCart : (state, action) => {
      state.value = state.value + 1
      state.products.push(action.payload)
    },
  }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer