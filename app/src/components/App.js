import React from 'react';
import propTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { auth } from '../services/firebase';
import Auth from './Auth';
import NavBar from './NavBar';
import Profile from './Profile';
import WineList from './WineList';
import style from '../styles/style.css';
import TreeView from './TreeView';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: null
    }

    this.logout = this.logout.bind(this);
  }

  logout() {
    auth.signOut()
      .then(() => {
        this.setState({ user: null });
        localStorage.clear();
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Router>
        <TreeView />
      </Router>
    );
  }
}
              // {this.state.user ? (
              //   <div>
              //   <NavBar user={this.state.user} logout={this.logout} />
              //   <Route path="/" component={() => <Profile user={this.state.user} />} />
              //   <Route path="/notes" component={() => <WineList user={this.state.user} />} />
              //   </div>
              //   ) : <Auth user={this.state.user} handleUser={user => this.setState({ user })} />
              // }

App.propTypes = {
  user: propTypes.shape({
    displayName: propTypes.string.isRequired,
    email: propTypes.string.isRequired
  })
};

export default App;