import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'features/user/userSlice';
import dummyReducer from 'features/dummy/dummySlice';
import themeReducer, { themeMiddleware } from 'features/theme/themeSlice';
import { blindPostAPI } from 'api';
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    dummy: dummyReducer,
    [blindPostAPI.reducerPath]: blindPostAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blindPostAPI.middleware, themeMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
