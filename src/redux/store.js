import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './LoginSlice'
import adminReducer from './AdminSlice'
import AlarmSlice from './AlarmSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    alarm: AlarmSlice,
    admin: adminReducer
  },
  middleware: [...getDefaultMiddleware()]
});
