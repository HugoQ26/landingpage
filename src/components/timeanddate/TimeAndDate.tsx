import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Typography, makeStyles, createStyles } from '@material-ui/core';

const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '2rem',
      position: 'absolute',
      top: '10px',
    },
  }),
);

const TimeAndDate = (props) => {
  const classes = useStyles();
  let [date, setDate] = useState(new Date());
  const weekday = weekDays[date.getDay()];
  const hour = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  return (
    <Typography className={classes.root} variant="h1">
      {`${weekday} ${hour}:${minutes}:${seconds}`}
    </Typography>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    dupa: state.users.isLogin,
  };
};

export default connect(mapStateToProps)(TimeAndDate);
