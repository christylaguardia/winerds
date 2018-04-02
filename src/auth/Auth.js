import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import { auth, googleProvider, twitterProvider, facebookProvider } from '../services/firebase';
import LoginButton from './LoginButton';
import LoginForm from './LoginForm';

export default class Auth extends PureComponent {

  componentWillMount() {
    console.log('Auth props', this.props);
    this.login();
    // this.loginFromToken();
  }

  // loginFromToken = () => {

  //   // check if user credential already exists
  //   const credential = JSON.parse(localStorage.getItem('credential'));

  //   if (!credential) return console.log('no credential');
  //   console.log('found credential', credential);

  //   let token = null;
    
  //   if (credential.providerId === 'google.com') token = googleProvider.credential(credential.idToken, credential.accessToken);
  //   if (credential.providerId === 'twitter.com') token = twitterProvider.credential(credential.idToken);
  //   if (credential.providerId === 'facebook.com') token = facebookProvider.credential(credential.idToken);
    
  //   if (token) {
  //     auth.signInWithCredential(token)
  //       .then(user => {
  //         console.log('signInWithCredential user', user);
  //         this.props.handleUser(user);
  //       })
  //       .catch(error => console.log('Error:', error));
  //   }
  // }

  login = () => {
    auth.getRedirectResult()
      .then(result => {
        console.log('login getRedirectResult result', result);
        if (result.credential) {
          localStorage.setItem('credential', JSON.stringify(result.credential));
          this.props.handleUser(result.user);
        }
      })
      .catch(this.handleLoginError);
  }

  loginWithProvider = (provider) => auth.signInWithRedirect(provider)

  loginWithEmailAndPassword = (email, password) => {
    // auth.signInWithEmailAndPassword(email, password)
    //   .then(this.handleLogin)
    //   .catch(this.handleLoginError);
  }

  promptUserForPassword() {
    console.log('promptUserForPassword');
    // TODO
  }

  getProviderForProviderId() {
    console.log('getProviderForProviderId');
    // TODO
  }

  handleLoginError(error) {
    if (error.code === 'auth/account-exists-with-different-credential') {
      const pendingCred = error.credential;
      const email = error.email;
      auth.fetchProvidersForEmail(email)
        .then(providers => {

          if (providers[0] === 'password') {
            var password = this.promptUserForPassword();
            auth.signInWithEmailAndPassword(email, password)
              .then(user => user.link(pendingCred))
              .then(user => this.props.handleUser(user));
            return;
          }

          var provider = this.getProviderForProviderId(providers[0]);
          auth.signInWithPopup(provider).then(result => {
            result.user.link(pendingCred)
              .then(user => this.props.handleUser(user));
          });
        });
    }
  }

  render() {

    const { user, handleUser } = this.props;

    if (user) return <Redirect to="/tasting" />;

    return (
      <section className="section">

        <div className="has-text-centered">
          <LoginButton icon="google" name="Google" onClick={() => this.loginWithProvider(googleProvider)} />
          <LoginButton icon="twitter" name="Twitter" onClick={() => this.loginWithProvider(twitterProvider)} />
          <LoginButton icon="facebook" name="Facebook" onClick={() => this.loginWithProvider(facebookProvider)} />
        </div>

        <div className="has-text-centered" style={{ margin: '10px 0' }}>
          <hr />
          <span style={{ verticalAlign: 'middle', padding: '0 10px' }}>OR</span>
          <hr />
        </div>

        <LoginForm handleSubmit={this.loginWithEmailAndPassword} />

      </section>
    );
  }
}

Auth.propTypes = {
  handleUser: propTypes.func.isRequired
};