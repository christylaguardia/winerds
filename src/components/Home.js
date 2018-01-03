import React from 'react';

function Home({ login }) {
  return (
    <section className="hero is-fullheight is-primary is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            Wine Tasting Notes
          </h1>
          <h2 className="subtitle">
            subtitle
          </h2>
          <span className="button is-medium is-primary is-inverted" onClick={login}>
            <span className="icon"><i className="fa fa-google" aria-hidden="true"></i></span>
            <span>Sign In With Google</span>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Home;