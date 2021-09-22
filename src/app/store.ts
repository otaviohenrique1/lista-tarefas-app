import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import TarefasSlice from '../features/TarefasSlice';

export const store = configureStore({
  reducer: {
    tarefa: TarefasSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
