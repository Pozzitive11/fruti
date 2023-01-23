import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductsData } from "widgets/main/api/getProductsData";

export const getProductsRedux = createAsyncThunk(
  "products/getProductsData",
  async function () {
    const responce = await getProductsData();
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
    getProducts(state, action) {},
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
    [getProductsRedux.rejected]: (state, action) => {},
  },
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;
