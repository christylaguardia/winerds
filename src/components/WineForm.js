import React from 'react';
import propTypes from 'prop-types';
import { Categories, Profiles } from '../data/tastingRubic.json';
import firebase, { tastingNotes } from '../services/firebase';

class WineForm extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      user: this.props.user.email,
      wine: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = {
      user: this.state.user.email,
      wine: this.state.wine
    }
    tastingNotes.push(note);
    this.setState({ wine: null });
  }

  render() {

    const categories = Object.keys(Categories).map(category => category);
    const profiles = Object.keys(Profiles).map(profile => profile);

    return (
      <section className="section">
        <form className="field" onSubmit={this.handleSubmit}>
          <div className="control">
          <label className="label">
            Wine Name
            <input className="input"
              type="text"
              required
              name="wine"
              placeholder="Winery, Style, Vintage"
              onChange={(e) => this.handleChange(e)}
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
                                    onClick={(e) => this.handleChange(e)} >
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
      </section>
    );
  }
}

// WineForm.propTypes = {
//   user: propTypes.shape({
//     displayName: propTypes.string.isRequired,
//     email: propTypes.string.isRequired
//   }).isRequired,
//   handleChange: propTypes.func.isRequired,
//   handleSubmit: propTypes.func.isRequired
// };

export default WineForm;