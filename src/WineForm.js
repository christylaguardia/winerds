import React from 'react';
import propTypes from 'prop-types';
import { Categories, Profiles } from './data.json';

function WineForm({ user, handleChange, handleSubmit }) {
  const categories = Object.keys(Categories).map(category => category);
  const profiles = Object.keys(Profiles).map(profile => profile);

  return (
    <form className="field" onSubmit={handleSubmit}>
      <div className="control">
      <label className="label">
        Wine Name
        <input className="input"
          type="text"
          required
          name="currentItem"
          placeholder="Winery, Style, Vintage"
          onChange={(e) => handleChange(e)}
        />
        </label>

        <div className="content">
          {categories.map((category, index) => {
            return (
            <table key={index}>
              <thead>
                <tr>
                  <th colSpan="2">{category}</th>
                </tr>
              </thead>
              <tbody>
                {Categories[category].map((profile, index) => {
                  return (
                    <tr key={index}>
                      <td>{profile}</td>
                      <td>
                        <div className="tags">
                          {Profiles[profile].map((profileItem, index) => {
                            return (
                              <span key={index}
                                className="tag"
                                name={`${category}-${profileItem}`}
                                onClick={(e) => handleChange(e)} >
                                {profileItem}
                              </span>
                          )})}
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )})}
        </div>

        <button className="button is-primary" type="submit">Add Wine</button>
      </div>
    </form>
  );
}

WineForm.propTypes = {
  user: propTypes.shape({
    displayName: propTypes.string.isRequired,
    email: propTypes.string.isRequired
  }).isRequired,
  handleChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired
};

export default WineForm;