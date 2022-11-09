import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUser, logIn, logOut, register } from './auth-operations';

const initialauthState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchCurenntUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialauthState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.pending]: state => {
      state.isFetchCurenntUser = true;
    },
    [fetchCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchCurenntUser = false;
    },
    [fetchCurrentUser.rejected]: state => {
      state.isFetchCurenntUser = false;
    },
  },
});
export const authReducer = authSlice.reducer;
