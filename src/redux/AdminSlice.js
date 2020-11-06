// Slice Controls clients employment info.
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes

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
export const fetchAdminTerminate = createAsyncThunk(
  'admin/fetchAdminTerminate',
  async (endpoint, {getState}) => {
    const configObj = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${endpoint.token}` },
      body: JSON.stringify( { reason: endpoint.reason } )
    }
    const responce = await fetch(endpoint.url, configObj);
    if (!responce.ok) throw Error(responce.statusText);
    const json = await responce.json();
    return json;
  }
);
export const fetchAdminUpdate = createAsyncThunk(
  'admin/fetchAdminUpdate',
  async (endpoint, {getState}) => {
    const configObj = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${endpoint.token}`
      },
      body: JSON.stringify(
        {
          reason: endpoint.reason,
          pto_current: endpoint.pto_current,
          pto_rate: endpoint.pto_rate,
          pto_max: endpoint.pto_max,
        }
      )
    }
    const responce = await fetch(endpoint.url, configObj);
    if (!responce.ok) throw Error(responce.statusText);
    const json = await responce.json();
    return json;
  }
);
export const fetchAdminHire = createAsyncThunk(
  'admin/fetchAdminHire',
  async (endpoint, {getState}) => {
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${endpoint.token}`
      },
      body: JSON.stringify(
        {
          hire_name: endpoint.hire_name,
          hire_password: endpoint.hire_password,
          hire_is_admin: endpoint.hire_is_admin,
          pto_rate: endpoint.pto_rate,
          pto_max: endpoint.pto_max
        }
      )
    }
    const responce = await fetch(endpoint.url, configObj);
    if (!responce.ok) throw Error(responce.statusText);
    const json = await responce.json();
    return json;
  }
);

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
   [fetchAdminList.fulfilled]: (state, action) => {
    state.pending = INITIAL_STATE.pending;
    state.employee_list = action.payload;
    state.successMessage = action.payload.message;
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
    state.successMessage = action.payload.message;
   },
   [fetchAdminTerminate.pending]: state => {
    state.pending = true;
    state.errorMessage = INITIAL_STATE.errorMessage;
    state.successMessage = INITIAL_STATE.successMessage;
   },
   [fetchAdminTerminate.rejected]: (state, action) => {
    state.pending = INITIAL_STATE.pending;
    state.errorMessage = `${action.error.name}: ${action.error.message}`;
   },
   [fetchAdminTerminate.fulfilled]: (state, action) => {
    state.pending = INITIAL_STATE.pending;
    state.successMessage = action.payload.message;
   },
   [fetchAdminUpdate.pending]: (state) => {
    state.pending = true;
    state.errorMessage = INITIAL_STATE.errorMessage;
    state.successMessage = INITIAL_STATE.successMessage;
   },
   [fetchAdminUpdate.rejected]: (state, action) => {
    state.pending = INITIAL_STATE.pending;
    state.errorMessage = `${action.error.name}: ${action.error.message}`;
   },
   [fetchAdminUpdate.fulfilled]: (state, action) => {
    state.pending = INITIAL_STATE.pending;
    state.successMessage = `PTO Updated for ${action.payload.name}`;
    state.employee_modification = action.payload;
   },
   [fetchAdminHire.pending]: (state) => {
    state.pending = true;
    state.errorMessage = INITIAL_STATE.errorMessage;
    state.successMessage = INITIAL_STATE.successMessage;
    state.action = null
   },
   [fetchAdminHire.rejected]: (state, action) => {
    state.pending = INITIAL_STATE.pending;
    state.errorMessage = `${action.error.name}: ${action.error.message}`;
    state.action = action
   },
   [fetchAdminHire.fulfilled]: (state, action) => {
    state.pending = INITIAL_STATE.pending;
    state.successMessage = `${action.payload.name} added to the system.`;
    state.employee_list.push(action.payload);
    state.action = action
   },
  },
});

export const {resetAdmin, clearAdminError, clearAdminSuccess } = AdminSlice.actions;
export default AdminSlice.reducer;
