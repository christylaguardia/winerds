import React from 'react';
import guide from '../data/guide';
console.log('Guide', guide);

class TreeView extends React.Component {

  state = {
    collapsed: true
  }

  handleMenuClick = (e) => {
    e.preventDefault();
    if (e.target.className === 'is-active') {
      e.target.className = '';
    } else {
      e.target.className = 'is-active';
    }
  }

  render() {
    return (
      <section className="section">
        <div className="tabs is-centered is-boxed is-medium">
          <ul>
            {guide.map(g => {
              return (
                <li className='' onClick={e => this.handleMenuClick(e)}><a>{g.title}</a></li>
                  // {/* <div className="tabs">
                  //   <ul>
                  //     {g.profiles.map(p => <li><a>{p.name}</a></li>)}
                  //   </ul>
                  // </div> */}
              )
            })}
          </ul>
        </div>

        <div className="menu">
          {guide.map(g => {
            return (
              <div>
                <p className="menu-label">{g.title}</p>
                <ul className="menu-list">
                  {g.profiles.map(p => {
                    return (
                      <li>{p.name}
                        <ul className="menu-list">
                          {p.tags.map(t => <li>{t}</li>)}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default TreeView;