// Slice Controls alerts for client employment info.
import { createSlice } from '@reduxjs/toolkit';

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes

// Initial is Logged out
const INITIAL_STATE = {
  errorMessage: null,
  successMessage: null
}

export const AlertSlice = createSlice({
  name: 'alert',
  initialState: INITIAL_STATE,
  reducers: {
    resetAlert: state => {
    state.errorMessage = INITIAL_STATE.errorMessage;
    state.successMessage = INITIAL_STATE.successMessage;
   },
   clearAlertError: state => { state.errorMessage = INITIAL_STATE.errorMessage; },
   clearAlertSuccess: state => { state.successMessage = INITIAL_STATE.successMessage; }
  },
});

export const {resetAlert, clearAlertError, clearAlertSuccess } = AlertSlice.actions;
export default AlertSlice.reducer;
