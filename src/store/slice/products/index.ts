import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProduct } from '../../thunk/products';
import { IProduct, IProductState } from '../../../common/types/product';

const initialState: IProductState = {
  product: null,
  isLoading: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action: PayloadAction<IProduct>) => {
        state.isLoading = false;
        state.product = action.payload;
      });
  },
});

export default productSlice.reducer;
