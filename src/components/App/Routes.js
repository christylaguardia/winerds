import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Home from '../Home/Home';
import About from '../Home/About';
import Login from '../Home/Login';
import Tasting from '../Tasting/Tasting';
import Profile from '../Profile/Profile';
import Configure from '../Configure/Configure';

const Placeholder = ({ text }) => (
  <Typography variant="display1" gutterBottom>
    {text}
  </Typography>
);

const Error = () => <Placeholder text="Error!" />;
const Stats = () => <Placeholder text="Stats" />;

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
    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} />
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
      path="/stats"
      component={Stats}
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