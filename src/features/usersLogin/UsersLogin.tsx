import React from 'react';
import {
  Grid,
  Button,
  makeStyles,
  createStyles,
  Input,
} from '@material-ui/core';

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
  }),
);

const UsersLogin = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container item justify="center">
      <Input
        type="text"
        className={classes.input}
        placeholder="Enter e-mail adress"
        autoFocus
        required
      />
      <Input
        type="password"
        className={classes.input}
        placeholder="Enter valid password"
        required
      />
      <Button type="submit" color="secondary" variant="contained">
        Submit
      </Button>
    </Grid>
  );
};

export default UsersLogin;
