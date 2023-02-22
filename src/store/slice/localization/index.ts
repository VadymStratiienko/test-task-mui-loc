import { createSlice } from '@reduxjs/toolkit';
import i18n from '../../../utils/i18next';

type LanguageState = {
  language: string;
};

const initialState: LanguageState = {
  language: localStorage.getItem('language') || i18n.language,
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem('language', action.payload);
      i18n.changeLanguage(action.payload);
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
