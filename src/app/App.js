import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import propTypes from 'prop-types';
import { auth, googleProvider, twitterProvider, facebookProvider } from '../services/firebase';
import Loading from './Loading';
import Routes from './Routes';
import NavBar from '../navbar/NavBar';
import Footer from './Footer';

export default class App extends Component {

  state = {
    loading: true,
    user: null
  }

  componentWillMount = () => this.loginFromToken()

  componentDidMount = () => this.setState({ loading: false })

  loginFromToken = () => {

    // check if user credential already exists
    const credential = JSON.parse(localStorage.getItem('credential'));

    if (!credential) return console.log('no credential');
    console.log('found credential', credential);

    let token = null;

    if (credential.providerId === 'google.com') token = googleProvider.credential(credential.idToken, credential.accessToken);
    if (credential.providerId === 'twitter.com') token = twitterProvider.credential(credential.idToken);
    if (credential.providerId === 'facebook.com') token = facebookProvider.credential(credential.idToken);

    if (token) {
      auth.signInWithCredential(token)
        .then(user => {
          console.log('signInWithCredential user', user);
          this.handleUser(user);
        })
        .catch(error => console.log('Error:', error));
    }
  }

  handleUser = (user) => this.setState({ user })

  render () {
    const { loading, user } = this.state;

    if (loading) return <Loading />;

    return (
      <Router>
        <div>
          <NavBar user={user} />
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