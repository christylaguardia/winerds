import React from 'react';
import { guide } from '../data/guide';

// const Tags = ({ profile }) => (
//   <div>
//     {/* <p className="title">{profile.name}</p> */}
//     {profile.tags.map((t, i) => <span key={i} className="tag is-large" onClick={e => console.log(t)}>{t}</span>)}
//   </div>
// );

const Tag = ({ name, onClick }) => (
  <span className="tag is-medium" onClick={onClick}>{name}</span>
);

const TagPicker = () => (
  <section className="section">
    <div>
      {guide.map(g => {
        return (
          <div>
            <p className="title">{g.title}</p>
            
            {g.profiles.map(p => {
              return (
                <div>
                  <p className="title">{p.name}</p>
                  <div className="tags">
                    {p.tags.map((t, i) => <Tag key={i} name={t} onClick={e => console.log(t)} />)}
                  </div>
                </div>
              )}
            )}
              
          </div>
        )}
      )}
    </div>
  </section>
);

export default TagPicker;