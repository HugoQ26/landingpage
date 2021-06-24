import React, { ReactNode } from 'react';
import { Grid } from '@material-ui/core';

interface Props {
  children: Required<ReactNode>;
}

const MainLayout = (props: Props) => {
  return <Grid container>{props.children}</Grid>;
};

export default MainLayout;
