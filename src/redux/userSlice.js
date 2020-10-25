import { createSlice } from '@reduxjs/toolkit';

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes

// Initial is Logged out
const INITIAL_STATE = { loggedIn: false, id: -1, admin: false, name: 'UNKNOWN', jwt: ''}

export const UserSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    login: (state, action) => {
      const { loggedIn, id, admin, name, jwt } = action.payload
      state.loggedIn = loggedIn;
      state.id = id;
      state.admin = admin;
      state.name = name;
      state.jwt = jwt;
    },
   logout: state => {
    state.loggedIn = INITIAL_STATE.loggedIn;
    state.id = INITIAL_STATE.id;
    state.admin = INITIAL_STATE.admin;
    state.name = INITIAL_STATE.name;
    state.jwt = INITIAL_STATE.jwt;
   }
  },
});

export const { login, logout } = UserSlice.actions;
export default UserSlice.reducer;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = state => state.counter.value;

