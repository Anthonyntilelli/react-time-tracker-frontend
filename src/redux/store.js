import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './LoginSlice'
import selfReducer from './SelfSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    self: selfReducer
  },
  middleware: [...getDefaultMiddleware()]
});
