import { configureStore } from '@reduxjs/toolkit';
import { modalReduser } from '../slice/modalSlice';

export const store = configureStore({
  reducer: {
    modal: modalReduser,
  },
});
