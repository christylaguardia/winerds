import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import WineForm from './WineForm';
import WineList from './WineList';
import Search from './Search';

function Routes({ user, login, logout }) {
  return (
    <Router>
      <Switch>
        <Route path="/" component={() => <Home login={login} />} />
        {user
          ? (<div>
              <NavBar user={user} />
              <Route path="/new" component={WineForm} />
              <Route path="/notes" component={WineList} />
              <Route path="/search" component={Search} />
            </div>)
          : <Redirect to="/" />}
      </Switch>
    </Router>
  );
}

export default Routes;