import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './LoginSlice'
import selfReducer from './SelfSlice'
import adminReducer from './AdminSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    self: selfReducer,
    admin: adminReducer
  },
  middleware: [...getDefaultMiddleware()]
});
