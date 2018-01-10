import React from 'react';
import guide from '../data/guide';
console.log('Guide', guide);

class Card extends React.Component {

  state = {
    configIndex: 0,
    profileIndex: 0,
    hasNext: true,
    hasPrev: false
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
  }

  render() {
    
    const { configIndex, profileIndex } = this.state;

    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">{guide[configIndex].title}</p>
        </header>

        <div className="card-content">
          <div className="content">
            <p>{guide[configIndex].profiles[profileIndex].name}</p>
            <Tags tags={guide[configIndex].profiles[profileIndex].tags}/>
          </div>
        </div>

        <footer className="card-footer">
          {this.state.hasPrev && <span className="button is-link card-footer-item" onClick={this.prev}>Previous</span>}
          {this.state.hasNext && <span className="button is-link card-footer-item" onClick={this.next}>Next</span>}
        </footer>
      </div>
    );
  }
}

function Tags({ tags }) {
  return (
    <div className="menu">
      <ul className="menu-list">
        {tags.map((tag, index) => {
          return <li key={index} onClick={(e) => console.log('you clicked it')}>{tag}</li>;
        })}
      </ul>
    </div>
  );
}

export default Card;