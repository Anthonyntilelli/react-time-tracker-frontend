// Slice Controls clients employment info.
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes

// Initial is Logged out
const INITIAL_STATE = {
  id: -1,
  name: 'Loading, please standby....',
  pto_rate: -1,
  pto_current: -1,
  pto_max: -1,
  pending: false,
  errorMessage: null,
  successMessage: null,
}

// Redux Thunk
export const fetchSelf = createAsyncThunk(
  'self/fetchSelf',
  async (endpoint, {getState}) => {
    const configObj = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${endpoint.token}`
      }
    }
    const responce = await fetch(endpoint.url, configObj);
    if (!responce.ok) throw Error(responce.statusText);
    const json = await responce.json();
    return json;
  }
)

export const SelfSlice = createSlice({
  name: 'self',
  initialState: INITIAL_STATE,
  reducers: {
   resetSelf: state => {
    state.id = INITIAL_STATE.id;
    state.name = INITIAL_STATE.name;
    state.pto_rate = INITIAL_STATE.pto_rate;
    state.pto_current = INITIAL_STATE.pto_current;
    state.pto_max = INITIAL_STATE.pto_max;
    state.pending = INITIAL_STATE.pending;
    state.errorMessage = INITIAL_STATE.errorMessage;
    state.successMessage = INITIAL_STATE.successMessage;
   },
   clearSelfError: state => { state.errorMessage = INITIAL_STATE.errorMessage; },
   clearSelfSuccess: state => { state.successMessage = INITIAL_STATE.successMessage;}
  },
  extraReducers:{
   [fetchSelf.pending]: state => {
     state.pending = true;
     state.errorMessage = INITIAL_STATE.errorMessage;
     state.successMessage = INITIAL_STATE.successMessage;
   },
   [fetchSelf.rejected]: (state, action) => {
     state.pending = INITIAL_STATE.pending;
     state.errorMessage = `${action.error.name}: ${action.error.message}`;
   },
   [fetchSelf.fulfilled]:(state, action) => {
    state.pending = INITIAL_STATE.pending;
    state.id = action.payload.id;
    state.name = action.payload.name;
    state.pto_rate = action.payload.pto_rate;
    state.pto_current = action.payload.pto_current;
    state.pto_max = action.payload.pto_max;
    state.successMessage = `Hello #{state.name}`;
   }
  },
});

export const {resetSelf, clearSelfError, clearSelfSuccess } = SelfSlice.actions;
export default SelfSlice.reducer;
