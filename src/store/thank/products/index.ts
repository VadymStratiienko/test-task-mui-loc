import { createAsyncThunk } from '@reduxjs/toolkit';
import { productInstance } from '../../../utils/axios';
import { IProduct } from '../../../common/types/product';

export const getProduct = createAsyncThunk(
  'products/getProducts',
  async (_, { rejectWithValue }) => {
    const response = await productInstance.get<IProduct>('laptops');
    if (!response) {
      return rejectWithValue('Server Error!');
    }
    return response.data;
  },
);
