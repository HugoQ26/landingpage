import { createSlice, current } from '@reduxjs/toolkit';

interface User {
  [index: string]: string | boolean;
  email: Required<string>;
  password: Required<string>;
  name: Required<string>;
  isLogin: Required<boolean>;
  isAdmin: Required<boolean>;
}

interface Users {
  [index: string]: User;
}

interface Messages {
  emailError: string;
  wrongPass: string;
}

interface StateInterface {
  message: {} | Messages;
  loginForm: boolean;
  isLogin: boolean;
  users: Users;
  activeUser: User | { [key: string]: string | boolean };
}

const messages = {
  emailError: 'e-mail is not valid',
  wrongPass: 'You typed wrong password',
};

const initialState: StateInterface = {
  isLogin: false,
  loginForm: false,
  message: { ...messages },
  users: {
    admin: {
      email: 'admin@gmail.com',
      password: 'pass',
      isLogin: false,
      isAdmin: true,
      name: 'Marcin',
    },
    'groszek37@buziaczek.pl': {
      email: 'hugo26@o2.pl',
      password: 'frigo',
      isLogin: false,
      isAdmin: false,
      name: 'Gosia',
    },
  },
  activeUser: {},
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
    },
  },
});

export const { login, showLoginForm } = usersSlice.actions;
export const message = (state) => state.users.message;

export default usersSlice.reducer;
