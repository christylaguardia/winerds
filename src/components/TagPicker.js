import React from 'react';
import { profiles } from '../data/guide';

class TagPicker extends React.Component {
  render() {
    const prof = Object.keys(profiles);

    return (
      <div>
        {prof.map((p,i) => {
          return (
            <div>
              <p key={i}>{p}</p>
              <div className="tags">
                  {profiles[p].map((t,i) => <span key={i} className="tag">{t}</span>)}
              </div>
            </div>
          )}
        )}
      </div>
    );
  }
}

export default TagPicker;