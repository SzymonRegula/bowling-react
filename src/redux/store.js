import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './booking';

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
  },
});
