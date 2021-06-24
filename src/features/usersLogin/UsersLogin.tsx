import React, { SyntheticEvent, useState, ChangeEvent } from 'react';
import { Grid, Button, TextField } from '@material-ui/core';
import { useAppDispatch } from '../../app/hooks';
import { login } from './usersLoginSlice';
import { useStyles } from './usersLogin.style';

const UsersLogin = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  // const info = useAppSelector((state) => state.users.message);
  // const user = useAppSelector((state) => state.users.activeUser);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    name === 'email' ? setEmail(value) : setPassword(value);
  };

  return (
    <Grid className={classes.root} container item justify="center">
      <form
        onSubmit={onFormSubmit}
        className={classes.form}
        noValidate
        autoComplete="off"
      >
        <TextField
          type="text"
          className={classes.input}
          placeholder="Enter e-mail adress"
          autoFocus
          required
          name="email"
          value={email}
          onChange={onInputChange}
        />
        <TextField
          type="password"
          className={classes.input}
          placeholder="Enter valid password"
          name="password"
          value={password}
          required
          onChange={onInputChange}
        />
        <Button type="submit" color="secondary" variant="contained">
          Submit
        </Button>
      </form>
    </Grid>
  );
};

export default UsersLogin;
