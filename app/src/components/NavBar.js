import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  state = {
    open: false
  }

  toggleMenu = () => this.setState(state => ({ open: !state.open }))

  render() {
    const { user, logout } = this.props;
    return (
      <nav className="navbar" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item">

            <article className="media">
              <figure className="media-left">
                <p className="image is-32x32">
                  <img src={user.photoURL} alt={user.displayName} />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>{user.displayName}</p>
                </div>
              </div>
            </article>
          </div>

          <button
            className={`navbar-burger burger ${this.state.open ? 'is-active' : ''}`}
            data-target="burger-options" onClick={this.toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

        <div
          id="burger-options"
          className={`navbar-menu ${this.state.open ? 'is-active' : ''}`}
          onClick={this.toggleMenu}
        >
          <div className="navbar-start">
            <Link className="navbar-item" to="/">New</Link>
            <Link className="navbar-item" to="/notes">Tasting Notes</Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <button className="button is-primary" onClick={logout}>Log Out</button>
            </div>
          </div>
        </div>

      </nav>
    );
  }
}

export default NavBar;