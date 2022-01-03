import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const getInitialTheme = () => {
  let theme = window.localStorage.getItem('theme') as 'darkTheme' | 'lightTheme';
  const INVALID_THEME = theme !== 'darkTheme' && theme !== 'lightTheme';
  if (INVALID_THEME) {
    const { matches } = window.matchMedia('(prefers-color-scheme: dark)');
    theme = matches ? 'darkTheme' : 'lightTheme';
  }
  return theme;
};

export interface ThemeState {
  value: 'darkTheme' | 'lightTheme';
}

const initialState: ThemeState = {
  value: getInitialTheme(),
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = state.value === 'darkTheme' ? 'lightTheme' : 'darkTheme';
    },
  },
});

export const themeMiddleware = (store: any) => (next: any) => (action: any) => {
  const prevTheme = store.getState().theme.value;
  if (toggle.match(action)) {
    window.localStorage.setItem('theme', prevTheme === 'darkTheme' ? 'lightTheme' : 'darkTheme');
  }
  return next(action);
};

export const { toggle } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.value;

export default themeSlice.reducer;
