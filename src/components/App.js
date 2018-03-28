import React, { Component } from 'react';
import propTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { auth } from '../services/firebase';
import NavBar from './NavBar';
import Auth from './Auth';
import Routes from './Routes';
import Footer from './Footer';
import style from '../styles/style.css';

class App extends Component {

  state = {
    user: null
  }

  logout = () => {
    auth.signOut()
      .then(() => {
        this.setState({ user: null });
        localStorage.clear();
      })
      .catch(error => console.log(error));
  }

  render () {
    const { user } = this.state;

    return (
      <div>
        <Router>
          {user
            ? <Routes user={user} logout={this.logout} />
            : <Auth user={user} handleUser={user => this.setState({ user })} />}
        </Router>
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  user: propTypes.shape({
    displayName: propTypes.string,
    email: propTypes.string
  })
};

export default App;