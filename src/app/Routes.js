import React from 'react';
import propTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Auth from '../auth/Auth';
import Profile from '../profile/Profile';
import Tasting from '../tasting/Tasting';
import TreeView from '../tags/TreeView';

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

const Routes = ({ user, handleUser }) => {

  const isAuthenticated = !!user;

  return (
    <Switch>
      <Route exact path="/" render={() => <Home isAuthenticated={isAuthenticated} />} />
      <Route path="/login" render={() => <Auth user={user} handleUser={handleUser} />} />
      <Route path="/contact" component={Contact} />
      <PrivateRoute path="/tasting" component={Tasting} isAuthenticated={isAuthenticated} />
      <PrivateRoute path="/profile" component={Profile} isAuthenticated={isAuthenticated} />
      <PrivateRoute path="/tags" component={TreeView} isAuthenticated={isAuthenticated} />
    </Switch>
  );
}

Routes.propTypes = {
  isAuthenticated: propTypes.bool,
  handleUser: propTypes.func
};

export default Routes;