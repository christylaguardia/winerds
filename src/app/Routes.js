import React from 'react';
import propTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from '../components/About';
import Contact from '../components/Contact';
import Auth from '../containers/Auth';
import Profile from '../containers/Profile';
import TreeView from '../components/TreeView';

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route {...rest}
    render={props =>
      isAuthenticated
        ? <Component {...props} />
        : <Redirect
             to={{
              pathname: "/",
              state: { from: props.location }
            }} />
    }
  />
);

const Routes = ({ isAuthenticated }) => (
  <Switch>
    <Route path="/" component={Auth} />
    <PrivateRoute exact path="/new" component={Profile} isAuthenticated={isAuthenticated} />
    <PrivateRoute exact path="/tags" component={TreeView} isAuthenticated={isAuthenticated} />
  </Switch>
);

Routes.propTypes = {
  isAuthenticated: propTypes.bool.isRequired
};

export default Routes;