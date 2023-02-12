import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { Product } from "entities/product";
import { getData } from "shared/api/api";

interface ProductState {
  products: Product[];
  status: string | null;
  isloading: boolean;
  error: string | null;
}

export const getProductsRedux = createAsyncThunk<Product[]>(
  "products/getProductsData",
  async function () {
    const response = await getData("/products");
    return response;
  }
);

const initialState: ProductState = {
  products: [],
  status: null,
  isloading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsRedux.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        getProductsRedux.fulfilled,
        (state, action) => {
          state.status = "resolved";
          state.products = action.payload;
          state.isloading = true;
        }
      );
  },
});

// export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;
