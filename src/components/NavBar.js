import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserMedia from './UserMedia';

class NavBar extends Component {

  state = {
    open: false
  }

  toggleMenu = () => this.setState(state => ({ open: !state.open }))

  render() {
    const { user, logout } = this.props;

    return (
      <nav className="navbar is-fixed-top is-transparent">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">WINERDS</Link>
          <div name="navbar-item">
            {user && <UserMedia user={user} />}
          </div>

          <button className={`navbar-burger burger is-transparent ${this.state.open ? 'is-active' : ''}`}
            data-target="burger-options" onClick={this.toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

        <div id="burger-options"
          className={`navbar-menu has-text-centered ${this.state.open ? 'is-active' : ''}`}
          onClick={this.toggleMenu} >
          <div className="navbar-end">
            {user && <Link className="navbar-item" to="/new">NEW TASTING NOTE</Link>}
            {user && <Link className="navbar-item" to="/tags">TAGS</Link>}
            <Link className="navbar-item" to="/about">ABOUT</Link>
            <Link className="navbar-item" to="/contact">CONTACT</Link>
            {user &&
              <div className="navbar-item">
                <button className="button is-primary" onClick={logout}>Log Out</button>
              </div>}
          </div>
        </div>

      </nav>
    );
  }
}

export default NavBar;