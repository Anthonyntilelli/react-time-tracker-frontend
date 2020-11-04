// Slice Controls clients employment info.
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes

// Initial is Logged out
const INITIAL_STATE = {
  employee_list: [],
  employee_modification: {},
  pending: false,
  errorMessage: null,
  successMessage: null
}
export const fetchAdminList = createAsyncThunk(
  'admin/fetchAdminList',
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
export const fetchEmp = createAsyncThunk(
  'admin/fetchEmp',
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
// export const fetchAdminHire = createAsyncThunk(
//   'admin/fetchAdminHire',
//   async (endpoint, {getState}) => {
//     const configObj = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${endpoint.token}`
//       },
//       body: JSON.stringify(
//         {
//           hire_name: endpoint.hire_name,
//           hire_password: endpoint.hire_password,
//           hire_is_admin: endpoint.hire_is_admin,
//           pto_rate: endpoint.pto_rate,
//           pto_max: endpoint.pto_max
//         }
//       )
//     }
//     const responce = await fetch(endpoint.url, configObj);
//     if (!responce.ok) throw Error(responce.statusText);
//     const json = await responce.json();
//     return json;
//   }
// );
// export const fetchAdminUpdate = createAsyncThunk();
// export const fetchAdminTerminate = createAsyncThunk();

export const AdminSlice = createSlice({
  name: 'admin',
  initialState: INITIAL_STATE,
  reducers: {
   resetAdmin: state => {
    state.employee_list = INITIAL_STATE.employee_list;
    state.employee_modification = INITIAL_STATE.employee_modification;
    state.pending = INITIAL_STATE.pending;
    state.errorMessage = INITIAL_STATE.errorMessage;
    state.successMessage = INITIAL_STATE.successMessage;
  },
   clearAdminError: state => { state.errorMessage = INITIAL_STATE.errorMessage; },
   clearAdminSuccess: state => { state.successMessage = INITIAL_STATE.successMessage; },
  },
  extraReducers:{
   [fetchAdminList.pending]: state => {
     state.pending = true;
     state.errorMessage = INITIAL_STATE.errorMessage;
     state.successMessage = INITIAL_STATE.successMessage;
     state.employee_list = INITIAL_STATE.employee_list;
   },
   [fetchAdminList.rejected]: (state, action) => {
     state.pending = INITIAL_STATE.pending;
     state.errorMessage = `${action.error.name}: ${action.error.message}`;
   },
   [fetchAdminList.fulfilled]:(state, action) => {
    state.pending = INITIAL_STATE.pending;
    state.employee_list = action.payload;
   },
   [fetchEmp.pending]: state => {
    state.pending = true;
    state.errorMessage = INITIAL_STATE.errorMessage;
    state.successMessage = INITIAL_STATE.successMessage;
    state.employee_modification = INITIAL_STATE.employee_modification;
   },
   [fetchEmp.rejected]: (state, action) => {
    state.pending = INITIAL_STATE.pending;
    state.errorMessage = `${action.error.name}: ${action.error.message}`;
   },
   [fetchEmp.fulfilled]: (state, action) => {
    state.pending = INITIAL_STATE.pending;
    state.employee_modification = action.payload;
   },
  },
});

export const {resetAdmin, clearAdminError, clearAdminSuccess } = AdminSlice.actions;
export default AdminSlice.reducer;
