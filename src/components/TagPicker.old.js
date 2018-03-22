import React, { PureComponent } from 'react';
import { profiles } from '../data/guide';

const Tag = ({ name, isActive }) => (
  <span className={`tag ${isActive ? 'is-primary' : ''}`}>{name}</span>
);

class TagPicker extends PureComponent {
  render() {
    const prof = Object.keys(profiles);

    return (
      <div>
        {prof.map((p,i) => {
          return (
            <div key={i}>
              <p>{p}</p>
              <div className="tags">
                {profiles[p].map((t, i) => <Tag key={i} isActive={false} name={t}/> )}
              </div>
            </div>
          )}
        )}
      </div>
    );
  }
}

export default TagPicker;