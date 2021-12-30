import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { blindBoardAPI } from 'api/blindBoard';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [blindBoardAPI.reducerPath]: blindBoardAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(blindBoardAPI.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
