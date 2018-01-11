import React from 'react';
import propTypes from 'prop-types';
import { auth, provider } from '../services/firebase';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Profile from './Profile';
import WineList from './WineList';
import style from '../styles/style.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: null
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    const credential = JSON.parse(localStorage.getItem('credential'));
    if (!credential) return console.log('no credential');
    let token = provider.credential(credential.idToken);

    auth.signInWithCredential(token)
      .then(user => this.setState({ user }))
      .catch(error => console.log('Error:', error));
  }

  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        localStorage.setItem('credential', JSON.stringify(result.credential));
        const user = result.user;
        this.setState({ user });
      })
      .catch(error => console.log(error));
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
        {this.state.user ? (
          <div>
            <NavBar user={this.state.user} logout={this.logout} />
            <Route path="/" component={() => <Profile user={this.state.user} />} />
            <Route path="/notes" component={() => <WineList user={this.state.user} />} />
          </div>
          ) : <Route path="/" component={() => <Home login={this.login} />} />
        }
      </Router>
    );
  }
}

App.propTypes = {
  user: propTypes.shape({
    displayName: propTypes.string.isRequired,
    email: propTypes.string.isRequired
  })
};

export default App;