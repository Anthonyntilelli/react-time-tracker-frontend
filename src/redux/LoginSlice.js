// Slice Controls Auth info.
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import jwt_decode from "jwt-decode";

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes

// Initial is Logged out
const INITIAL_STATE = {
  loggedIn: false,
  id: -1,
  admin: false,
  name: 'UNKNOWN',
  jwt: '',
  pending: false,
  error: false,
  errorMessage: '',
  loginMessage: '',
}

// Redux Thunk
export const fetchLogin = createAsyncThunk(
  'user/fetchLogin',
  async (endpoint, {getState}) => {
    const configObj = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name: endpoint.name, password: endpoint.password})}
    const responce = await fetch(endpoint.url, configObj);
    if (!responce.ok) throw Error(responce.statusText);
    const json = await responce.json();
    return json;
  }
)

export const UserSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
   logout: state => {
    state.loggedIn = INITIAL_STATE.loggedIn;
    state.id = INITIAL_STATE.id;
    state.admin = INITIAL_STATE.admin;
    state.name = INITIAL_STATE.name;
    state.jwt = INITIAL_STATE.jwt;
    state.loginMessage = "Logout Successfull";
   },
   clearUserError: state => {
    state.error = INITIAL_STATE.error;
    state.errorMessage = INITIAL_STATE.errorMessage;
   },
   clearLoginMessage: state => { state.loginMessage = INITIAL_STATE.loginMessage;}
  },
  extraReducers:{
   [fetchLogin.pending]: state => {
     state.pending = true;
     state.error = INITIAL_STATE.error;
     state.errorMessage = INITIAL_STATE.errorMessage;
   },
   [fetchLogin.rejected]: (state, action) => {
     state.pending = INITIAL_STATE.pending;
     state.error = true;
     state.errorMessage = `${action.error.name}: ${action.error.message}`;
   },
   [fetchLogin.fulfilled]:(state, action) => {
    state.pending = INITIAL_STATE.pending;
    try {
      const decoded = jwt_decode(action.payload.token)
      state.loggedIn = true;
      state.id = decoded.id;
      state.admin = decoded.admin;
      state.name = decoded.name;
      state.jwt = action.payload.token;
      state.loginMessage = action.payload.message;
    } catch(error) {
      state.error = true;
      state.errorMessage = `Issue when attempting to decode JWT token`;
      console.error(error);
    }
   }
  }
});

export const {logout, clearUserError, clearLoginMessage } = UserSlice.actions;
export default UserSlice.reducer;
