import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { PostCardType } from 'utils/getDummies';

export type CommentType = {
  comment_id: number;
  post_id: number;
  user_id: number;
  parent_id: number;
  content: string;
  created_at: string;
  modified_at?: string;
};

type StateType = {
  post: PostCardType[];
  comment: CommentType[];
};

const initialState: StateType = {
  post: [],
  comment: [],
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
    setComment: (state, action) => {
      state.comment = action.payload;
    },
    addComment: (state, action) => {
      state.comment = [...state.comment, action.payload];
    },
    deleteComment: (state, action) => {
      state.comment = [...state.comment.filter((elem) => elem.comment_id !== action.payload)];
    },
    modifyComment: (state, action) => {
      state.comment = [
        ...state.comment.map((elem) => {
          if (elem.comment_id === action.payload.comment_id) return action.payload;
          return elem;
        }),
      ];
    },
  },
});

export const {
  setPost,
  addPost,
  deletePost,
  modifyPost,
  setComment,
  addComment,
  deleteComment,
  modifyComment,
} = dummySlice.actions;

export const getPost = (state: RootState) => state.dummy.post;
export const getComment = (state: RootState) => state.dummy.comment;

export default dummySlice.reducer;
