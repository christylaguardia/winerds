import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Home from '../Home/Home';
import Tasting from '../../components/Tasting/Tasting';
import Profile from '../../components/Profile/Profile';
import Configure from '../../components/Configure/Configure';
import Data from '../../components/Data/Data';

const Placeholder = ({ text }) => (
  <Typography variant="display1" gutterBottom>
    {text}
  </Typography>
);

const Error = () => <Placeholder text="Error!" />;

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
    <Route exact path="/" render={() => <Home isAuthenticated={isAuthenticated} />} />
    <PrivateRoute
      path="/data"
      component={Data}
      isAuthenticated={isAuthenticated}
    />
    <PrivateRoute
      path="/profile"
      component={Profile}
      isAuthenticated={isAuthenticated}
    />
    <PrivateRoute
      path="/tasting"
      component={Tasting}
      isAuthenticated={isAuthenticated}
    />
    <PrivateRoute
      path="/configure"
      component={Configure}
      isAuthenticated={isAuthenticated}
      exact
    />
    <Route path="/" component={Error} />
  </Switch>
);

Routes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

export default Routes;
