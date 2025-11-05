import { createSlice } from '@reduxjs/toolkit'

const savedCart = JSON.parse(localStorage.getItem("cartState"))

const initialState = savedCart ||{
  value: 0,
  cartItems: [],
  totalQuentity : 0,
  totalPrice : 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cartItems.find(item=> item.name === product.name)

      if(existingProduct){
        existingProduct.quantity += 1;
        existingProduct.totalPrice += product.price;
      }else{
        state.cartItems.push({
          ...product,
          quantity:1,
          totalPrice: product.price
        })
      }
      state.totalQuentity += 1
      state.totalPrice += product.price
    },
    removeFromCart : (state, action) => {
      const name = action.payload
      const existingProduct = state.cartItems.find(item => item.name === name)
      if(existingProduct){
        state.totalQuentity -= existingProduct.quantity
        state.totalPrice -= existingProduct.totalPrice
        state.cartItems = state.cartItems.filter(item=> item.name !==name)
      }
    },
    
    clearCart : (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.totalQuentity = 0;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer