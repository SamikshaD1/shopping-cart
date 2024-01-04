import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  SUCCESS: "SUCCESS",
  ERROR: "There was an error",
  Loading: "LOADING",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.SUCCESS,
    error: STATUSES.ERROR,
  },
  reducers: {
    setproducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setproducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// middleware

export function fetchproducts() {
  return async function fetchproductThunk(dispatch) {
    dispatch(setStatus(STATUSES.Loading));
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      dispatch(setproducts(data.products));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
