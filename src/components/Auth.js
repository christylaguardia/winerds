import React, { Component } from 'react';
import { auth, googleProvider, twitterProvider, facebookProvider } from '../services/firebase';

const LoginButton = ({ icon, name, onClick }) => (
  <div className="field">
    <p className="control button is-medium is-primary" onClick={onClick}>
      <span className="icon"><i className={`fa fa-${icon}`} aria-hidden="true"></i></span>
      <span>{`Sign In With ${name}`}</span>
    </p>
  </div>
)

class Auth extends Component {

  componentWillMount() {
    const credential = JSON.parse(localStorage.getItem('credential'));
    if (!credential) return console.log('no credential');
    console.log('found credential');

    // // {"accessToken":"3259367419-F28iaCCKJYXGN0aRTawrZ9vKJNmsnLZB1KmMGJg","secret":"RKFaxgVxTfKhAXyyhWpMUa1RTlEokKGWmVZTHgQWCnX2x","providerId":"twitter.com"}

    // let token;
    // const { idToken, providerId } = credential;

    // switch (providerId) {
    //   case 'twitter.com':
    //     token = twitterProvider.credential(idToken);
    //   case 'google.com':
    //     token = googleProvider.credential(idToken);
    //   case 'facebook.com':
    //     token = facebookProvider.credential(idToken);
    //   default:
    //     token = null;
    // }
    
    if (credential.providerId === 'google.com') {
      let token = googleProvider.credential(credential.idToken);
      auth.signInWithCredential(token)
        .then(this.props.handleUser)
        .catch(error => console.log('Error:', error));
    }
    // else if (credential.providerId === 'twitter.com') {
    //   token = twitterProvider.credential(credential.idToken);
    // } else if (credential.providerId === 'facebook.com') {
    //   token = facebookProvider.credential(credential.idToken);
    // }

  }

  login(provider) {
    auth.signInWithPopup(provider)
      .then(result => this.handleLogin(result))
      .catch(error => this.handleLoginError(error));
  }

  loginWithEmailAndPassword(email, password) {
    auth.signInWithEmailAndPassword(email, password)
      .then(result => this.handleLogin(result))
      .catch(error => this.handleLoginError(error));
  }

  promptUserForPassword() {
    console.log('promptUserForPassword');
    // TODO
  }

  getProviderForProviderId() {
    console.log('getProviderForProviderId');
    // TODO
  }

  handleLogin(result) {
    if (result.credential) {
      localStorage.setItem('credential', JSON.stringify(result.credential));
      this.props.handleUser(result.user);
    }
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
    return (
      <section className="section">
        <div className="container has-text-centered">

          <h1 className="title">Winerds</h1>
          <h2 className="subtitle">A guide for wine tasting notes</h2>

          <div className="has-text-centered">
            <LoginButton icon="google" name="Google" onClick={() => this.login(googleProvider)} />
            <LoginButton icon="twitter" name="Twitter" onClick={() => this.login(twitterProvider)} />
            <LoginButton icon="facebook" name="Facebook" onClick={() => this.login(facebookProvider)} />
          </div>

          {/* <hr />

          <form
            onSubmit={e => {
              e.preventDefault();
              this.loginWithEmailAndPassword();
            }}>
            <div className="field">
              <label className="label" htmlFor="email">Email</label>
              <div className="control">
                <input className="input" name="email" type="email" placeholder="email" required />
              </div>
            </div>

            <div className="field">
              <label className="label" htmlFor="password">Password</label>
              <div className="control">
                <input className="input" name="password" type="password" placeholder="password" required />
              </div>
            </div>

            <div className="field">
              <div className="control buttons is-centered">
                <input className="button is-medium is-primary" type="submit" value="Sign In"/>
              </div>
            </div>
          </form> */}

        </div>
      </section>
    );
  }
}

export default Auth;