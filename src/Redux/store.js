import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./fetures/cartSlice";
import productReducer from "./fetures/product";

export const store = configureStore({
  reducer: {
    allCart: cartReducer,
    product: productReducer,
  },
});
