import React from 'react';
import propTypes from 'prop-types';
import { tastingNotes, tastingGuide, tastingProfiles } from '../services/firebase';

class WineForm extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      ready: false,
      wine: null,
      guide: null,
      profiles: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    tastingGuide.on('value', snapshot => {
      this.setState({ guide: snapshot.val() });
      tastingProfiles.on('value', snapshot => {
        this.setState({
          ready: true,
          profiles: snapshot.val()
        });
      });
    })
  }

  handleChange(e, category, profile, tag) {
    // console.log('handleChange', e.target);
    // const category = e.target.attributes.getNamedItems('data-category').value;
    // const tag = e.target.attributes.getNamedItems('name').value;
    console.log('handleChange', category, profile, tag);

    if (e.target.className === "tag") {
      e.target.className = "tag is-primary";
      
      // this.setState({
      //   [category]: {
      //     [profile]: [ ...this.state[category][profile], tag ]}
      // });
    } else {
      e.target.className = "tag";
      // clear state
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = {
      email: this.props.email,
      username: this.props.displayName,
      ...this.state
    }
    tastingNotes.push(note);
    this.setState({ wine: null });
  }

  render() {
    // const guide = Object.keys(this.state.guide).map(g => g);
    // const profiles = Object.keys(tastingProfiles).map(p => p);
    // console.log('guide', guide);
    // console.log('profiles', profiles);

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

          {this.state.ready ? (
            <div className="content">
              {Object.keys(this.state.guide).map((category, index) => {
                return (
                  <div key={index} className="container">
                    <p className="title">{category}</p>

                    {this.state.guide[category].map((profile, index) => {
                      return (
                        <div key={index} className="box">
                          <p className="subtitle">{profile}</p>

                          <div className="tags">
                            {this.state.profiles[profile].map((tag, index) => {
                              return (
                                // <div className="container content">
                                  <span key={index}
                                    className="tag"
                                    onClick={(e) => this.handleChange(e, category, profile, tag)} >
                                    {tag}
                                  </span>
                                // </div>
                              )
                            })}
                          </div>

                        </div>
                      )
                      
                    })}

                  </div>
                )}
              )}
            </div>

            ) : <span>Loading...</span> }

            {/* <button className="button is-primary" type="submit">Add Wine</button> */}
          </div>
        </form>
      </section>
    );
  }
}

// WineForm.propTypes = {
  // email: propTypes.string.isRequired,
  // username: propTypes.string.isRequired
  // items: propTypes.arrayOf(
  //   propTypes.shape({
  //     id: propTypes.string.isRequired,
  //     email: propTypes.string.isRequired,
  //     username: propTypes.string.isRequired,
  //     wine: propTypes.string.isRequired,
  //   }).isRequired
  // ).isRequired,
  // handleRemove: propTypes.func.isRequired,
// };

export default WineForm;