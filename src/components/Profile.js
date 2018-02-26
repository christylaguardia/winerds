import React from 'react';
import TagPicker from './TagPicker';
import TagTarget from './TagTarget';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Profile extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="columns is-mobile">
          <div className="column">
            <TagPicker />
          </div>
          <div className="column">
            <div className="field">
              <label className="label" htmlFor="wine-name">Wine Name</label>
              <div className="control">
                <input className="input" name="wine-name" type="text" placeholder="Winery, Style, Vintage" />
              </div>
            </div>
            
            <TagTarget />

            {/* <label>Wine</label>
            <input type="text"/> */}
          </div>
        </div>
      </section>
    )
  }
}

// export default Profile;
export default DragDropContext(HTML5Backend)(Profile);