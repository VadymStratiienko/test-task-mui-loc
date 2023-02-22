import { createAsyncThunk } from '@reduxjs/toolkit';
import { newsInstance } from '../../../utils/axios';
import { IPost } from '../../../common/types/post';
import { RootState } from '../../store';

export const getNews = createAsyncThunk<IPost[], { page?: number }, { state: RootState }>(
  'posts/getNews',
  async ({ page = 1 }, { getState }) => {
    const { nextPage } = getState().post;
    const response = await newsInstance.get<IPost[]>(`posts?_page=${nextPage ?? page}`);
    return response.data;
  },
);

export const deleteNewsById = createAsyncThunk<number, number, { rejectValue: string }>(
  'posts/deletePostById',
  async (id, { rejectWithValue }) => {
    try {
      await newsInstance.delete(`posts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(`Failed to delete post with id ${id}.`);
    }
  },
);
