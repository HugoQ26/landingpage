import React from 'react';
import { Button, makeStyles, createStyles } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { showLoginForm } from '../../features/usersLogin/usersLoginSlice';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: 'absolute',
      right: 20,
      top: 20,
    },
  }),
);

// interface Props {
//   children: Required<React.ReactNode>;
// }

const LoginButton = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const isLogin = useAppSelector((state) => state.users.isLogin);
  const { name } = useAppSelector((state) => state.users.activeUser);

  const onClickHandler = () => {
    if (!isLogin) {
      dispatch(showLoginForm(true));
    }
    if (isLogin) {
      dispatch(showLoginForm(false));
    }
  };

  const buttonLabel = isLogin ? 'Log out' : 'Log in';

  return (
    <Button
      onClick={onClickHandler}
      className={classes.root}
      color="secondary"
      variant="contained"
    >
      {buttonLabel} {name}
    </Button>
  );
};

export default LoginButton;
