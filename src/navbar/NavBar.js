import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../services/firebase';
import UserMedia from './UserMedia';

const PrivateOptions = ({ logout }) => (
  <div className="navbar-end">
    <Link className="navbar-item" to="/tasting">NEW TASTING NOTE</Link>
    <Link className="navbar-item" to="/profile">CREATE TASTING PROFILE</Link>
    <Link className="navbar-item" to="/tags">TAG REFERENCE</Link>
    <Link className="navbar-item" to="/contact">CONTACT</Link>
    <div className="navbar-item">
      <button className="button is-primary" onClick={logout}>Log Out</button>
    </div>
  </div>
);

const PublicOptions = () => (
  <div className="navbar-end">
    <Link className="navbar-item" to="/contact">CONTACT</Link>
    <Link className="navbar-item" to="/login">LOGIN</Link>
  </div>
)

export default class NavBar extends Component {

  state = {
    open: false
  }

  handleLogout = () => {
    auth.signOut()
      .then(this.props.handleLogout)
      .catch(error => console.log(error));
  }

  toggleMenu = () => this.setState(state => ({ open: !state.open }))

  render() {
    const { user } = this.props;

    return (
      <nav className="navbar is-fixed-top is-transparent">
      
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <h1 className="logo is-size-5">WINERDS</h1>
          </Link>
          <button className={`navbar-burger burger is-transparent ${this.state.open ? 'is-active' : ''}`}
            data-target="burger-options" onClick={this.toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div id="burger-options" className={`navbar-menu has-text-centered ${this.state.open ? 'is-active' : ''}`}
          onClick={this.toggleMenu}>
          {user ? <PrivateOptions logout={this.handleLogout} /> : <PublicOptions />}
        </div>

      </nav>
    );
  }
}