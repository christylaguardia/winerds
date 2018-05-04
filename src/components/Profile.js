import React from 'react';

const Profile = ({ value, handleChange }) => (
  <div className="field">
    {/* <label className="label">Tasting Note Profile</label> */}
    <div className="control">
      <div className="select">
        <select value={value} onChange={handleChange}>
          <option value="Classic">Classic</option>
          <option value="Easy">Easy</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
    </div>
  </div>
);

export default Profile;