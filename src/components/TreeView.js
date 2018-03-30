import React from 'react';
import guide from '../data/guide.json';

const TreeView = () => {
  const level1 = Object.keys(guide);
  
  return (
    <section className="section">
      <div className="content">
        <h1>Winerds</h1>
        <ul>
          {level1.map((a,i) => {
            console.log('level1',a);
            
            return (
              <li key={i}>
                {a}
                <ul>
                  {guide[a].map((b,i) => {
                    console.log('level2', b);
                    console.log(typeof b);
                    
                    if (typeof b === 'string') {
                      return <li key={i}>{b}</li>;
                    } else {
                      const c = Object.keys(b)[0];
                      
                      return (
                        <li>
                          {c}
                          <ul classNam="collapsed">
                            {b[c].map(a => <li>{a}</li>)}
                          </ul>
                        </li>)
                    }
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  );
}

export default TreeView;