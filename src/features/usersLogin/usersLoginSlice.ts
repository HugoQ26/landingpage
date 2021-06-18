import { createSlice } from '@reduxjs/toolkit';
import StateInterface, { initialState } from './usersInterfaces';

const messages = {
  emailError: 'e-mail is not valid',
  wrongPass: 'You typed wrong password',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login: (
      state: StateInterface,
      action: { payload: { email: string; password: string } },
    ) => {
      const { email, password } = action.payload;
      if (state.users[email]) {
        if (state.users[email].password === password) {
          state.message = '';
          state.isLogin = true;
          state.loginForm = false;
          state.activeUser = { ...state.users[email] };
        } else {
          state.message = messages.wrongPass;
        }
      } else {
        state.message = messages.emailError;
      }
    },
    showLoginForm: (state: StateInterface, action: { payload: boolean }) => {
      state.isLogin = false;
      state.loginForm = action.payload;
      if (!action.payload) {
        state.activeUser = {};
      }
    },
  },
});

export const { login, showLoginForm } = usersSlice.actions;
export const message = (state) => state.users.message;

export default usersSlice.reducer;
