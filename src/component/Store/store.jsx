import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './orderSlice';

export const store = configureStore({
  reducer: {
    orders: orderReducer,
  },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;
