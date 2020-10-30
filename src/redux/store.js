import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './LoginSlice'

export default configureStore({
  reducer: {
    user: userReducer
  },
  middleware: [...getDefaultMiddleware()]
});
