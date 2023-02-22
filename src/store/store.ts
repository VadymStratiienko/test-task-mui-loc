import { Action, configureStore } from '@reduxjs/toolkit';
import { ThunkAction } from '@reduxjs/toolkit';
import loadingSlice from './slice/loading';
import postSlice from './slice/post';
import productSlice from './slice/products';
import languageReducer from './slice/localization';

const store = configureStore({
  reducer: {
    loading: loadingSlice,
    post: postSlice,
    product: productSlice,
    language: languageReducer,
  },
});
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
