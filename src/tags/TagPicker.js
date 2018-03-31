import React, { PureComponent } from 'react';
import { guide } from '../data/guide';

class Tag extends PureComponent {

  state = {
    active: false
  }

  handleClick = () =>  this.setState({ active: !this.state.active })
  
  render() {
    return (
      <span className={`tag is-medium ${this.state.active ? 'is-info' : ''}`} onClick={this.handleClick}>
        {this.props.name}
      </span>
    )

  }
};

const TagPicker = () => (
  <div>
    {guide.map(g => {
      return (
        <div className="container box">
          <h1 className="title">{g.title}</h1>

          {g.profiles.map(p => {
            return (
              <div className="content">
                <h3 className="is-text-4">{p.name}</h3>
                <div className="tags">
                  {p.tags.map((t, i) => <Tag key={i} name={t} />)}
                </div>
              </div>)
          })}

        </div>
      )
    }
    )}
  </div>
);

export default TagPicker;