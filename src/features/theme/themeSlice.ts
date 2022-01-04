import { createSlice } from '@reduxjs/toolkit';
import { DARK_THEME, LIGHT_THEME, ThemeType } from 'constants/theme';
import { RootState } from '../../app/store';

const getInitialTheme = () => {
  if (window.localStorage.getItem('theme')) {
    const { matches } = window.matchMedia('(prefers-color-scheme: dark)');
    return matches ? DARK_THEME : LIGHT_THEME;
  }
  return DARK_THEME;
};

const initialState: ThemeType = {
  value: getInitialTheme(),
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = state.value === DARK_THEME ? LIGHT_THEME : DARK_THEME;
    },
  },
});

export const themeMiddleware = (store: any) => (next: any) => (action: any) => {
  const prevTheme = store.getState().theme.value;
  if (toggle.match(action)) {
    window.localStorage.setItem('theme', prevTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME);
  }
  return next(action);
};

export const { toggle } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.value;

export default themeSlice.reducer;
