import React, { SyntheticEvent, useState, ChangeEvent } from 'react';
import {
  Grid,
  Button,
  makeStyles,
  createStyles,
  TextField,
} from '@material-ui/core';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { login, message } from './usersLoginSlice';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      borderRadius: '5px',
      width: '300px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      paddingTop: '20px',
      paddingBottom: '15px',
    },
    input: {
      width: '80%',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
    },
  }),
);

const UsersLogin = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const info = useAppSelector((state) => state.users.message);
  const user = useAppSelector((state) => state.users.activeUser);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(user);

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
