import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
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
