import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './LoginSlice'
import adminReducer from './AdminSlice'
import alertReducer from './AlertSlice'


export default configureStore({
  reducer: {
    user: userReducer,
    admin: adminReducer,
    alert: alertReducer
  },
  middleware: [...getDefaultMiddleware()]
});
