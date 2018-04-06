import React from 'react';
import { Redirect, Link } from 'react-router-dom';

const Home = ({ isAuthenticated }) => {
  if (isAuthenticated) return <Redirect to="/tasting" />;
  
  return (
    <div className="hero is-fullheight" style={{ marginTop: '-3.25rem' }}>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="is-size-1 logo">
            <strong>WINERDS</strong>
          </h1>
          <p className="subtitle">
            your guide for wine tasting notes
          </p>
          <Link className="button is-large is-primary" to="/login">join the nerds</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;