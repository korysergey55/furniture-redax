import { createSlice } from '@reduxjs/toolkit';
import { productsArr } from '../../sourses/products/products';
import { setProductsThunk, setContactFormThunk, setCallbackFormThunk } from '../thunks/thunks';

const initialState = {
  isLoading: false,
  error: null,
  products: [...productsArr],
  productPath: null,
  isProductsSet: null,
  contactForm: null,
  callbeckForn: null,
};

const handleFulfildSetProducts = (state, { payload }) => {
  state.isLoading = false;
  state.isProductsSet = payload;
};
const handleFulfildContactForm = (state, { payload }) => {
  state.isLoading = false;
};
const handleFulfildCallbackForm = (state, { payload }) => {
  state.isLoading = false;
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
    setContactForm: (state, { payload }) => {
      state.contactForm = payload;
    },
    setCallbackForm: (state, { payload }) => {
      state.callbeckForn = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(setProductsThunk.fulfilled, handleFulfildSetProducts)
      .addCase(setProductsThunk.pending, handlePanding)
      .addCase(setProductsThunk.rejected, handleRejected)
      .addCase(setContactFormThunk.fulfilled, handleFulfildContactForm)
      .addCase(setContactFormThunk.pending, handlePanding)
      .addCase(setContactFormThunk.rejected, handleRejected)
      .addCase(setCallbackFormThunk.fulfilled, handleFulfildCallbackForm)
      .addCase(setCallbackFormThunk.pending, handlePanding)
      .addCase(setCallbackFormThunk.rejected, handleRejected);
  },
});

export const { setAllProducts, setProduct, setContactForm, setCallbackForm } =
  partfoliolSlice.actions;
export const partfolioReducer = partfoliolSlice.reducer;
