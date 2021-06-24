import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { store } from './app/store';
import LandingPage from './pages/landingPage/LandingPage';
import MainLayout from './components/layout/MainLayout/MainLayout';

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <MainLayout>
        <Router>
          <Switch>
            <Route path="/" component={LandingPage} />
          </Switch>
        </Router>
      </MainLayout>
    </Provider>
  );
}
// function App(props: Props) {
//   return (
//     <Grid container role="appcontainer">
//       {props.children}
//     </Grid>
//   );
// }

export default App;
