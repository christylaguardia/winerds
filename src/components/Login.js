import React, { PureComponent } from 'react';
import { auth, googleProvider, twitterProvider, facebookProvider } from '../services/firebase';
import LoginButton from './LoginButton';
import LoginForm from './LoginForm';

class Login extends PureComponent {

  login = (provider) => {
    return auth.signInWithRedirect(provider)
      .then()
      .then(this.handleLogin)
      .catch(this.handleLoginError);
  }

  loginWithEmailAndPassword = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
      .then(this.handleLogin)
      .catch(this.handleLoginError);
  }

  promptUserForPassword() {
    console.log('promptUserForPassword');
    // TODO
  }

  getProviderForProviderId() {
    console.log('getProviderForProviderId');
    // TODO
  }

  handleLogin = (result) => {
    return auth.getRedirectResult()
      .then(result => {
        console.log('handleLogin result', result);
        if (result.credential) {
          localStorage.setItem('credential', JSON.stringify(result.credential));
          this.props.handleUser(result.user);
        }
      })
      .catch(this.handleLoginError);
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

        <div className="has-text-centered">
          <LoginButton icon="google" name="Google" onClick={() => this.login(googleProvider)} />
          <LoginButton icon="twitter" name="Twitter" onClick={() => this.login(twitterProvider)} />
          <LoginButton icon="facebook" name="Facebook" onClick={() => this.login(facebookProvider)} />
        </div>

        <div className="has-text-centered" style={{ margin: '10px 0' }}>
          <hr />
          <span style={{ verticalAlign: 'middle', padding: '0 10px' }}>OR</span>
          <hr />
        </div>

        <LoginForm handleSubmit={this.loginWithEmailAndPassword} />

      </section>
    )
  }
}

export default Login;
