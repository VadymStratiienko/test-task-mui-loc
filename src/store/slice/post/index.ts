import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPostState } from '../../../common/types/post';
import { deleteNewsById, getNews } from '../../thunk/post';
import { AppThunk } from '../../store';

const initialState: IPostState = {
  data: [],
  isLoading: false,
  error: null,
  nextPage: 1,
  hasNextPage: true,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getNews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data.concat(action.payload);
        state.nextPage = state.nextPage ? state.nextPage + 1 : 2;
        state.hasNextPage = action.payload.length > 0;
      })
      .addCase(getNews.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteNewsById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteNewsById.fulfilled, (state, action: PayloadAction<number>) => {
        state.isLoading = false;
        state.data = state.data
          ? state.data.filter((post) => post.id !== action.payload)
          : state.data;
        state.hasNextPage = true;
      })
      .addCase(deleteNewsById.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      })

  },
});

export const loadMore = (): AppThunk => (dispatch, getState) => {
  const { nextPage } = getState().post;
  dispatch(getNews({ page: nextPage }));
};

export default postsSlice.reducer;
