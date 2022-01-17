import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

type MainBoardType = {
  pages: boolean[];
};
const initialState: MainBoardType = {
  pages: [false],
};

export const mainBoardSlice = createSlice({
  name: 'mainBoard',
  initialState,
  reducers: {
    setPages: (state, action) => {
      state.pages = action.payload;
    },
    appendPage: (state) => {
      state.pages[state.pages.length - 1] = true;
      state.pages = [...state.pages, false];
    },
  },
});

export const { setPages, appendPage } = mainBoardSlice.actions;

export const selectPages = (state: RootState) => state.mainBoard.pages;

export default mainBoardSlice.reducer;
