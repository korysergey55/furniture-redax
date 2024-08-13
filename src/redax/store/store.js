import { configureStore } from '@reduxjs/toolkit';
import { modalReducer } from '../slice/modalSlice';
import { partfolioReducer } from '../slice/partfolioSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    partfolio: partfolioReducer,
  },
});
