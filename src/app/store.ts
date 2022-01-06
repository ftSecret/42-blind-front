import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { blindBoardAPI } from 'api/blindBoard';
import userReducer from 'features/user/userSlice';
import dummyReducer from 'features/dummy/dummySlice';
import themeReducer, { themeMiddleware } from 'features/theme/themeSlice';
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    dummy: dummyReducer,
    [blindBoardAPI.reducerPath]: blindBoardAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blindBoardAPI.middleware, themeMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
