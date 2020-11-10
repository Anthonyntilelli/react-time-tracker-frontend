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

export const AlarmSlice = createSlice({
  name: 'alarm',
  initialState: INITIAL_STATE,
  reducers: {
   resetAlarm: state => {
    state.errorMessage = INITIAL_STATE.errorMessage;
    state.successMessage = INITIAL_STATE.successMessage;
   },
   clearAlarmError: state => { state.errorMessage = INITIAL_STATE.errorMessage; },
   clearALarmSuccess: state => { state.successMessage = INITIAL_STATE.successMessage; }
  },
});

export const {resetAlarm, clearAlarmError, clearALarmSuccess } = AlarmSlice.actions;
export default AlarmSlice.reducer;
