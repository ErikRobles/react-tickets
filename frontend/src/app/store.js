import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';

//adding front end folder to git

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
