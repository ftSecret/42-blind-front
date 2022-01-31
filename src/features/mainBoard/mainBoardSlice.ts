import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

type MainBoardType = {
  pages: number[];
};
const initialState: MainBoardType = {
  pages: [0],
};

export const mainBoardSlice = createSlice({
  name: 'mainBoard',
  initialState,
  reducers: {
    setPages: (state, action) => {
      state.pages = action.payload;
    },
    addPages: (state) => {
      state.pages = [...state.pages, state.pages.length];
    },
  },
});

export const { setPages, addPages } = mainBoardSlice.actions;

export const selectPages = (state: RootState) => state.mainBoard.pages;

export default mainBoardSlice.reducer;
