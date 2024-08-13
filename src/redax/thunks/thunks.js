import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const setProductsThunk = createAsyncThunk(
  'partfolio/setProducts',
  async (data, thunkAPI) => {
    try {
      const response = axios.post(`${process.env.REACT_APP_BASE_URL}products/.json`, data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
