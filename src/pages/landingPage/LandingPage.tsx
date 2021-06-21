import React from 'react';
import { Grid, createStyles, makeStyles } from '@material-ui/core';
import UsersLogin from '../../features/usersLogin/UsersLogin';
import { useAppSelector } from '../../app/hooks';
import LoginButton from '../../components/loginButton/LoginButton';
import TimeAndDate from '../../components/timeanddate/TimeAndDate';

const picUrl =
  'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '100vh',
      background: `lightblue url(${picUrl}) no-repeat fixed center`,
      backgroundSize: 'cover',
      position: 'relative',
    },
  }),
);

const LandingPage = () => {
  const classes = useStyles();
  const showLoginForm = useAppSelector((state) => state.users.loginForm);
  return (
    <Grid
      id="landingpage"
      className={classes.root}
      item
      container
      justify="center"
      alignContent="center"
    >
      <LoginButton />
      <TimeAndDate />
      {showLoginForm && <UsersLogin />}
    </Grid>
  );
};

export default LandingPage;
