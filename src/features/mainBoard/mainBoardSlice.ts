import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

type MainBoardType = {
  lastPage: number;
};
const initialState: MainBoardType = {
  lastPage: 0,
};

export const mainBoardSlice = createSlice({
  name: 'mainBoard',
  initialState,
  reducers: {
    setLastPage: (state, action) => {
      state.lastPage = action.payload;
    },
    addLastPage: (state) => {
      state.lastPage = state.lastPage + 1;
    },
  },
});

export const { setLastPage, addLastPage } = mainBoardSlice.actions;

export const selectLastPages = (state: RootState) => state.mainBoard.lastPage;

export default mainBoardSlice.reducer;
