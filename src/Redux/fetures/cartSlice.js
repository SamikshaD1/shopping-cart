import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
      } else {
        const newItem = { ...action.payload, qnty: 1 };
        state.carts.push(newItem);
      }
    },
    removeToCart: (state, action) => {
      state.carts = state.carts.filter((item) => item.id !== action.payload);
    },
    removeSingleItem: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0 && state.carts[itemIndex].qnty > 0) {
        state.carts[itemIndex].qnty -= 1;
      }
    },
  },
});

export const { addToCart, removeSingleItem, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
