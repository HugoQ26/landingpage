interface Settings {
  [key: string]: object;
}

interface User {
  email: Required<string>;
  password: Required<string>;
  name: Required<string>;
  isLogin: Required<boolean>;
  isAdmin: Required<boolean>;
  settings: Settings;
}

interface Users {
  [index: string]: User;
}

interface Messages {
  emailError: string;
  wrongPass: string;
}

export default interface StateInterface {
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

export const initialState: StateInterface = {
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
      settings: {},
    },
    'groszek37@buziaczek.pl': {
      email: 'hugo26@o2.pl',
      password: 'frigo',
      isLogin: false,
      isAdmin: false,
      name: 'Gosia',
      settings: {},
    },
  },
  activeUser: {},
};
