import React from 'react';

function Home({ login }) {
  return (
    <section className="hero is-fullheight is-primary is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            Winerds
          </h1>
          <h2 className="subtitle">
            A guide for wine tasting notes
          </h2>
          {/* <div className="box"> */}
            <div className="container content">
              <p className="button is-medium is-primary is-inverted" onClick={login}>
                <span className="icon"><i className="fa fa-google" aria-hidden="true"></i></span>
                <span>Sign In With Google</span>
              </p>
            </div>
            {/* <hr />
            <form >
              <div className="field">
                <label className="visually-hidden" for="email" >Email</label>
                <div className="control is-expanded">
                  <input className="input" name="email" type="email" placeholder="email" required />
                </div>
              </div>
              <div className="field">
                <label className="visually-hidden" for="password" >Password</label>
                <div className="control is-expanded">
                  <input className="input" name="password" type="password" placeholder="password" required />
                </div>
              </div>
              <div className="control buttons is-centered">
                <input className="button is-medium is-primary" type="submit" value="Sign In"/>
              </div>
            </form> */}
        </div>
      </div>
    </section>
  );
}

export default Home;