import React from 'react';

const Loading = () => (
  <div className="modal is-active">
    <div className="modal-background"></div>
    <div className="modal-content">
      <div className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title logo">
              WINERDS
            </h1>
            <p className="subtitle">
              just a sec...we're decanting
            </p>
            <div className="loader"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Loading;