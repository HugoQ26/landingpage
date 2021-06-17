import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App>
        <Router>
          <Switch>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </Router>
      </App>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
