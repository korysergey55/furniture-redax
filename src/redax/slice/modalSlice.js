import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modal: false,
};
const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    handleModal: (state, _) => {
      state.modal = !state.modal;
    },
  },
});

export const { handleModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
