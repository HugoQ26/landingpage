import React from 'react';
import { Grid, createStyles, makeStyles } from '@material-ui/core';
import UsersLogin from '../../features/usersLogin/UsersLogin';

const picUrl =
  'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '100vh',
      background: `lightblue url(${picUrl}) no-repeat fixed center`,
      backgroundSize: 'cover',
    },
  }),
);

const LandingPage = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      item
      container
      justify="center"
      alignContent="center"
    >
      <UsersLogin />
    </Grid>
  );
};

export default LandingPage;
