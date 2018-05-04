import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import propTypes from 'prop-types';
import { auth, getCredentialFromToken } from '../services/firebase';
import Routes from './Routes';
import Loading from '../components/Loading';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default class App extends Component {

  state = {
    loading: true,
    user: null
  }

  componentDidMount = () => {
    this.setState({ loading: false });
    this.loginFromToken();
  }

  loginFromToken = () => {
    const credential = getCredentialFromToken();
    if (credential) {
      auth.signInWithCredential(credential)
        .then(user => this.handleUser(user))
        .catch(error => console.log('Error:', error));
    }
  }

  handleUser = (user) => this.setState({ user })
  
  handleLogout = () => this.setState({ user: null })

  render () {
    const { loading, user } = this.state;

    if (loading) return <Loading />;

    return (
      <Router>
        <div>
          <NavBar user={user} handleLogout={this.handleLogout} />
          <Routes user={user} handleUser={this.handleUser} />
          <Footer />
        </div>
      </Router>
    )
  }
}

App.propTypes = {
  user: propTypes.shape({
    displayName: propTypes.string,
    email: propTypes.string
  })
};