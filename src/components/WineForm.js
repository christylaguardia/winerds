import React from 'react';
import propTypes from 'prop-types';
import Page from './Page';
import { wineNotesRef, wineConfig, wineProfiles } from '../services/firebase';

class WineForm extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      wine: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log
    // wineConfig.on('value', snapshot => {
    //   this.setState({
    //     config: snapshot.val(),
    //     // profiles: wineProfiles,
    //     ready: true
    //   });

      // wineProfiles.on('value', snapshot => {
      //   this.setState({
      //     ready: true,
      //     profiles: snapshot.val()
      //   });
      // });
    // })
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
    wineNotesRef.push(note);
    this.setState({ wine: null });
  }

  render() {
    // const config = Object.keys(this.state.config).map(g => g);
    // const profiles = Object.keys(profiles).map(p => p);
    // console.log('config', config);
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

          <div className="content">
            {Object.keys(wineConfig).map((category, index) => {
              return <Page key={index} title={category} profiles={wineConfig[category]} next={true} prev={true}/>
            })}
          </div>


                    {/* {this.state.config[category].map((profile, index) => {
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

            ) : <span>Loading...</span> } */}

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