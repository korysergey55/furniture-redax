import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { db } from '../../Firabase/firabase';
import { collection, addDoc } from 'firebase/firestore';

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

export const setContactFormThunk = createAsyncThunk(
  'contactForm/setContactForm',
  async (data, thunkAPI) => {
    try {
      const response = await addDoc(collection(db, 'mail'), {
        to: 'Vitaly.furniture.uk@gmail.com',
        message: {
          subject: `You are resive massage from ${data?.email}`,
          text: data?.message,
          html: `You are resive massage from ${data?.email} 
          .First name - ${data?.firstName}. Last name - ${data?.lastName}. Massage ${data?.message}`,
        },
      });

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setCallbackFormThunk = createAsyncThunk(
  'contactForm/setCallbackForm',
  async (data, thunkAPI) => {
    try {
      const response = await addDoc(collection(db, 'mail'), {
        to: 'Vitaly.furniture.uk@gmail.com',
        message: {
          subject: `You are resive call beck request from ${data?.phoneNumber}`,
          text: `You are resive call beck request from ${data?.phoneNumber}`,
          html: `You are resive call beck request from ${data?.phoneNumber}`,
        },
      });
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
