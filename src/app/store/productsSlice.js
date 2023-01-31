import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "shared/api/api";

export const getProductsRedux = createAsyncThunk(
  "products/getProductsData",
  async function () {
    const responce = await getData("/products");
    return responce;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: null,
    error: null,
    isloading: true,
  },
  reducers: {
  },
  extraReducers: {
    [getProductsRedux.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [getProductsRedux.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.products = action.payload;
      state.isloading = false;
    },
    [getProductsRedux.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;
