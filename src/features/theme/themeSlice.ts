import { createSlice } from '@reduxjs/toolkit';
import { DARK_THEME, LIGHT_THEME, ThemeType } from 'constants/theme';
import { RootState } from 'app/store';

const getInitialTheme = () => {
  //저장된 값이 없다면 시스템 설정을 기준으로 함
  const theme = localStorage.getItem('theme') as typeof DARK_THEME | typeof LIGHT_THEME;

  if (theme === null)
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK_THEME : LIGHT_THEME;

  return theme;
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
