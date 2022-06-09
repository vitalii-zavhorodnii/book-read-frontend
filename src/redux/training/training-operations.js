import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notyf } from 'notyf';

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_LINK;

const notyf = new Notyf();

const fetch = createAsyncThunk(
  'training/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/training');

      return data.result;
    } catch (err) {
      const errorMsg = err?.response?.data?.message;

      if (errorMsg) notyf.error(errorMsg);

      return rejectWithValue(err?.response?.data);
    }
  }
);

const operations = {
  fetch,
};

export default operations;
