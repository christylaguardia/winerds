import React from 'react';
import { Redirect, Link } from 'react-router-dom';

const Home = ({ isAuthenticated }) => (
  <div className="hero is-fullheight" style={{ marginTop: '-3.25rem' }}>
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="is-size-1 logo">
          <strong>{isAuthenticated ? 'WELCOME' : 'WINERDS'}</strong>
        </h1>
        <p className="subtitle">
          {isAuthenticated ? 'time to geek out' : 'your guide for wine tasting notes'}
        </p>
        {isAuthenticated
          ? <Link className="button is-large is-primary" to="/tasting">begin tasting</Link>
          : <Link className="button is-large is-primary" to="/login">join the nerds</Link>}
      </div>
    </div>
  </div>
);

export default Home;