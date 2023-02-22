import { createSlice } from '@reduxjs/toolkit';
import { ILoadingState } from '../../../common/types/loading';

const initialState: ILoadingState = {
  loading: false,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    loading(state) {
      state.loading = true;
    },
  },
});

export default loadingSlice.reducer;
