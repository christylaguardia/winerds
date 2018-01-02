import React from 'react';
import propTypes from 'prop-types';

function Auth({ user, login, logout }) {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
        {user
          ? (<div>
              <h1 className="title">{user.displayName}</h1>
              <h2 className="subtitle">{user.email}</h2>
              <button className="button is-primary" onClick={logout}>Log Out</button>
            </div>)
          : (<div>
              <p className="notification is-danger">You must be logged in to view the wine notes.</p>
              <button className="button is-primary" onClick={login}>Log In</button>
            </div>)
        }
        </div>
      </div>
    </section>

    //   {user
    //     ? (<div>
    //         <button className="button is-primary" onClick={logout}>Log Out</button>
    //         <p>
    //       </div>)
    //     : <button className="button is-primary" onClick={login}>Log In</button>
    //   }
    // </section>
  );
}

// <img className="image is-48x48 is-rounded" src={user.photoURL} alt="Google profile" width="28" height="28" />

Auth.propTypes = {
  user: propTypes.shape({
    displayName: propTypes.string.isRequired,
    email: propTypes.string.isRequired
  }),
  login: propTypes.func.isRequired,
  logout: propTypes.func.isRequired
};

export default Auth;