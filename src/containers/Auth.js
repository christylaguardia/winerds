import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import { auth, googleProvider, twitterProvider, facebookProvider } from '../services/firebase';
import LoginButton from '../components/LoginButton';
import LoginForm from '../components/LoginForm';
import Loading from '../components/Loading';

export default class Auth extends PureComponent {

  state = {
    loading: false
  }

  componentWillMount() {
    this.loginFromRedirect();
  }

  handleLogin = (result) => {
    console.log('handleLogin result', result);
    if (result.credential) {
      localStorage.setItem('token', JSON.stringify(result.credential));
      this.props.handleUser(result.user);
      this.setState({ loading: false });
    }
  }

  loginFromRedirect = () => {
    auth.getRedirectResult()
      .then(result => {
        this.handleLogin(result);
      })
      .catch(this.handleLoginError);
  }

  loginWithProvider = (provider) => {
    this.setState({ loading: true });
    auth.signInWithRedirect(provider);
  }

  loginWithEmailAndPassword = (email, password) => {
    this.setState({ loading: true });

    auth.signInWithEmailAndPassword(email, password)
      .then(token => {
        localStorage.setItem('token', JSON.stringify(token.credential));
        this.setState({ loading: false });
      })
      .catch(err => {
        if (err.code === 'auth/user-not-found') {
          auth.createUserWithEmailAndPassword(email, password)
            .then(user => {
              this.props.handleUser(user);
              this.loginWithEmailAndPassword(email, password);
            })
            .catch(this.handleLoginError);
        } else {
          this.handleLoginError;
        }
      });
  }

  promptUserForPassword() {
    console.log('promptUserForPassword');
    // TODO
  }

  getProviderForProviderId() {
    console.log('getProviderForProviderId');
    // TODO
  }

  handleLoginError = (error) => {
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
          auth.signInWithPopup(provider)
            .then(result => {
              result.user.link(pendingCred)
                .then(user => this.props.handleUser(user));
            });
        });
    }
  }

  render() {
    if (this.props.user) return <Redirect to="/tasting" />;
    if (this.state.loading) return <Loading />;

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