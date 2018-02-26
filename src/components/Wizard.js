import React from 'react';
import { Route, Link } from 'react-router-dom';
import guide from '../data/guide';

class Wizard extends React.Component {

  state = {
    user: this.props.user,
    configIndex: 0,
    profileIndex: 0,
    hasNext: true,
    hasPrev: true
  }

  prev = () => {
    // check if on last profile 
    // if (this.state.profileIndex === wineConfig[this.state.configIndex])
    this.setState({ configIndex: this.state.configIndex - 1 });
  }
  
  next = () => {
    console.log(this.state);
    
    const nextConfigIndex = this.state.configIndex + 1;
    const nextProfileIndex = this.state.profileIndex + 1;

    const maxConfigIndex = guide.length - 1;
    const maxProfileIndex = guide[this.state.configIndex].profiles[this.state.profileIndex].tags.length - 1;

    if (this.state.configIndex === maxConfigIndex && this.state.profileIndex === maxProfileIndex) {
      alert('done!');
    } else {
      if (this.state.profileIndex === maxProfileIndex) {
        this.setState({
          configIndex: nextConfigIndex,
          profileIndex: 0
        });
      } else {
        this.setState({ profileIndex: nextProfileIndex });
      }
    }

    // TODO:
    // if (this.state.configIndex > 0 && this.state.configIndex < maxConfigIndex) {
    //   this.setState({ hasPrev: true, hasNext: true })
    // }
  }

  handleChange(e, title, name, tag) {
    console.log('handleChange', title, name, tag);

    if (e.target.className === "tag is-large") {
      e.target.className = "tag is-large is-primary";
      // TODO:
      // this.setState({
      //   [title]: {
      //     [name]: [ ...this.state[title][name], tag ]}
      // });
    } else {
      e.target.className = "tag is-large";
      // TODO: clear state
    }
  }

  render() {
    
    const { configIndex, profileIndex } = this.state;

    return (
      <section className="section">
        <div className="content">
          <p className="title">{guide[configIndex].title}</p>
          <p className="subtitle">{guide[configIndex].profiles[profileIndex].name}</p>

          <div className="container" style={{ minHeight: '50vh' }}>
            <div className="tags">
              {guide[configIndex].profiles[profileIndex].tags.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className="tag is-large"
                    onClick={e => this.handleChange(e, guide[configIndex].title, guide[configIndex].profiles[profileIndex].name, tag)}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="buttons has-addons is-centered">
            {this.state.hasPrev && <span className="button" onClick={this.prev}>Previous</span>}
            {this.state.hasNext && <span className="button" onClick={this.next}>Next</span>}
          </div>
          
        </div>
      </section>
    );
  }
}

export default Wizard;