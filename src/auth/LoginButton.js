import React from 'react';

const LoginButton = ({ icon, name, onClick }) => (
  <div className="field">
    <p className="control button is-medium is-primary" style={{ width: '300px' }} onClick={onClick}>
      <span className="icon">
        <i className={`fa fa-${icon}`} aria-hidden="true"></i>
      </span>
      <span>{`Sign In With ${name}`}</span>
    </p>
  </div>
);

export default LoginButton;