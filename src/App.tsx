import React, { ReactNode } from 'react';
import { Grid } from '@material-ui/core';

interface Props {
  children: Required<ReactNode>;
}

function App(props: Props) {
  return (
    <Grid container role="appcontainer">
      {props.children}
    </Grid>
  );
}

export default App;
