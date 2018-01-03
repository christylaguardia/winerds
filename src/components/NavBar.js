import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ user, logout }) {
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
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/new">New</Link>
          <Link className="navbar-item" to="/notes">Tasting Notes</Link>
          <Link className="navbar-item" to="/search">Search</Link>
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

export default NavBar;