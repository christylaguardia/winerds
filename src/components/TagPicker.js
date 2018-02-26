import React from 'react';
import { profiles } from '../data/guide';
import Tag from './Tag';

class TagPicker extends React.Component {
  render() {
    const prof = Object.keys(profiles);

    return (
      <div>
        {prof.map((p,i) => {
          return (
            <div key={i}>
              <p>{p}</p>
              <div className="tags">
                {profiles[p].map((t,i) => <Tag key={i} name={t}/> )}
              </div>
            </div>
          )}
        )}
      </div>
    );
  }
}

export default TagPicker;