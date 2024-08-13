import { createSlice } from '@reduxjs/toolkit';
import { productsArr } from '../../sourses/products/products';
import { setProductsThunk } from '../thunks/thunks';

const initialState = {
  isLoading: false,
  error: null,
  products: [...productsArr],
  productPath: null,
  isProductsSet: null,
};

const handleFulfildSetProducts = (state, { payload }) => {
  state.isProductsSet = payload;
};
const handlePanding = state => {
  state.isLoading = true;
};
const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};

const partfoliolSlice = createSlice({
  name: 'partfoliolSlice',
  initialState,
  reducers: {
    setAllProducts: (state, { payload }) => {
      state.products = [...payload];
    },
    setProduct: (state, { payload }) => {
      state.productPath = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(setProductsThunk.fulfilled, handleFulfildSetProducts)
      .addCase(setProductsThunk.pending, handlePanding)
      .addCase(setProductsThunk.rejected, handleRejected);
  },
});

export const { setAllProducts, setProduct } = partfoliolSlice.actions;
export const partfolioReducer = partfoliolSlice.reducer;
