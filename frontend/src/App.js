import React from 'react';

import 'react-circular-progressbar/dist/styles.css';
import GlobalStyles from './styles/global';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated, getToken } from './services/auth';
import { UserContext } from './util/UserContext';

import Login from './pages/Login';
import Home from './pages/Home';
import Stories from './pages/Stories';
import Add from './pages/Add';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? <Component {...props} /> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    }
  />
);

function App () {
  const user = getToken();

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/stories/:_id" component={Stories} />
          <PrivateRoute path="/add" component={Add} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
