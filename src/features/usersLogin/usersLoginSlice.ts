import { createSlice } from '@reduxjs/toolkit';

interface User {
  [index: string]: string | boolean;
  email: Required<string>;
  password: Required<string>;
  isLogin: Required<boolean>;
  isAdmin: Required<boolean>;
}

interface Users {
  [index: string]: User;
}

interface StateInterface {
  message: string | '';
  users: Users;
  activeUser: User | {};
}

const messages = {
  emailError: 'e-mail is not valid',
  wrongPass: 'You typed wrong password',
};

const initialState: StateInterface = {
  message: '',
  users: {
    'hugo42@o2.pl': {
      email: 'hugo26@o2.pl',
      password: 'frigo',
      isLogin: false,
      isAdmin: true,
    },
    'groszek37@buziaczek.pl': {
      email: 'hugo26@o2.pl',
      password: 'frigo',
      isLogin: false,
      isAdmin: false,
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
        if (state.users[email][password] === password) {
          state.message = '';
          state.users[email].isLogin = true;
          state.activeUser = state.users[email];
        }
      } else {
        state.message = messages.emailError;
      }
    },
  },
});
