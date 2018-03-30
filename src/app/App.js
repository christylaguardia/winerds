import React, { Component } from 'react';
import propTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { auth } from '../services/firebase';
import Loading from './Loading';
import Routes from './Routes';
import Auth from '../containers/Auth';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

class App extends Component {

  state = {
    loading: true,
    user: null
  }

  componentDidMount = () => this.setState({ loading: false })

  logout = () => {
    auth.signOut()
      .then(() => {
        this.setState({ user: null });
        localStorage.clear();
      })
      .catch(error => console.log(error));
  }

  render () {
    const { loading, user } = this.state;

    if (loading) return <Loading />

    return (
      <Router>
        <div>
          <NavBar user={user} logout={this.logout} />
          <Routes isAuthenticated={!!user} />
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

export default App;