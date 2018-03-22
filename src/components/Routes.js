import React from 'react';
import propTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import Auth from './Auth';
import ProfileContainer from './ProfileContainer';
import TreeView from './TreeView';

const Routes = ({ user, logout }) => (
  <div>
    <NavBar user={user} logout={logout} />
    <Switch>
      <Route exact path="/" component={ProfileContainer} />
      <Route path="/signin" component={Auth} />
      <Route path="/tags" component={TreeView} />
    </Switch>
  </div>
);

Routes.propTypes = {
  user: propTypes.object.isRequired,
  logout: propTypes.func.isRequired,
};

export default Routes;