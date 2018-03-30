import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { auth, googleProvider, twitterProvider, facebookProvider } from '../services/firebase';
import Header from '../components/Header';
import Login from '../components/Login';
import About from '../components/About';
import Contact from '../components/Contact';

class Auth extends Component {

  componentWillMount() {
    // check if user credential already exists
    const credential = JSON.parse(localStorage.getItem('credential'));

    if (!credential) return console.log('no credential');
    console.log('found credential');

    let token;
    if (credential.providerId === 'google.com') token = googleProvider.credential(credential.idToken);
    if (credential.providerId === 'twitter.com') token = twitterProvider.credential(credential.idToken);
    if (credential.providerId === 'facebook.com') token = facebookProvider.credential(credential.idToken);
    
    auth.signInWithCredential(token)
      .then(result => {
        console.log('user', result.user);
        this.props.handleUser(result.user);
      })
      .catch(error => console.log('Error:', error));
  }

  render() {
    return (
      <div className="full-screen-height">
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Login handleUser={this.props.handleUser} />} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

Auth.PropTypes = {
  handleUser: PropTypes.func.isRequired
};

export default Auth;