import React from 'react';
import TagPicker from './TagPicker';

class Profile extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="columns is-mobile">
          <div className="column">
            <TagPicker />
          </div>
          <div className="column">

            <label>Wine</label>
            <input type="text"/>
          </div>
        </div>
      </section>
    )
  }
}

export default Profile;