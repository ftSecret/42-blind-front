import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'features/user/userSlice';
import mainBoardReducer from 'features/mainBoard/mainBoardSlice';
import themeReducer, { themeMiddleware } from 'features/theme/themeSlice';
import { blindPostAPI } from 'api/blindPost';
import { blindCommentAPI } from 'api/blindComment';
import { blindNotificationAPI } from 'api/blindNotification';

export const store = configureStore({
  devTools: process.env.REACT_APP_ENV === 'local' ? true : false,
  reducer: {
    theme: themeReducer,
    user: userReducer,
    mainBoard: mainBoardReducer,
    [blindPostAPI.reducerPath]: blindPostAPI.reducer,
    [blindCommentAPI.reducerPath]: blindCommentAPI.reducer,
    [blindNotificationAPI.reducerPath]: blindNotificationAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      blindPostAPI.middleware,
      blindCommentAPI.middleware,
      themeMiddleware,
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
