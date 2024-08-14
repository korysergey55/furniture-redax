import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contactform: {},
  callbackForm: {},
};
const formsSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    handleModal: (state, _) => {
      state.modal = !state.modal;
    },
  },
  extraReducers: builder => {
    builder.addCase().addCase().addCase().addCase().addCase().addCase();
  },
});

export const { handleModal } = formsSlice.actions;
export const modalReducer = formsSlice.reducer;
