import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modal: false,
};
const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    handleModal: (state, { payload }) => {
      state.modal = !state.modal;
    },
  },
});

export const { handleModal } = modalSlice.actions;
export const modalReduser = modalSlice.reducer;
