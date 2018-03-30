import React from 'react';
import PropTypes from 'prop-types';

const UserMedia = ({ user }) => (
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
);

UserMedia.PropTypes = {
  user: PropTypes.object.isRequired
};

export default UserMedia;