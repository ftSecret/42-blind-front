import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { PostCardType } from 'utils/getDummies';

type StateType = {
  post: PostCardType[];
};

const initialState: StateType = {
  post: [],
};

export const dummySlice = createSlice({
  name: 'dummy',
  initialState,
  reducers: {
    setPost: (state, action) => {
      state.post = action.payload;
    },
    addPost: (state, action) => {
      state.post = [...state.post, action.payload];
    },
    deletePost: (state, action) => {
      state.post = [...state.post.filter((elem) => elem.post_id !== action.payload)];
    },
    modifyPost: (state, action) => {
      state.post = [
        ...state.post.map((elem) => {
          if (elem.post_id === action.payload.post_id) return action.payload;
          return elem;
        }),
      ];
    },
  },
});

export const { setPost, addPost, deletePost, modifyPost } = dummySlice.actions;

export const getPost = (state: RootState) => state.dummy.post;

export default dummySlice.reducer;
