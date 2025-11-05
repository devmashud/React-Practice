import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../feature/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart : cartReducer,
  },

  
});

store.subscribe(() => {
  localStorage.setItem("cartState", JSON.stringify(store.getState().cart))
})