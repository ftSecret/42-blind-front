import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

type UserType = {
  id: number;
};
const initialState: UserType = {
  id: -1,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUserId = (state: RootState) => state.user.id;

export default userSlice.reducer;
