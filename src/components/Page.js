import React from 'react';
import { wineProfiles } from '../services/firebase';

export default class Page extends React.Component {

  state = {
    ref: null
  }

  componentDidMount() {
    // wineProfiles.on('value', snapshot => this.setState({ ref: snapshot.val() }));
  }

  render() {
    console.log('wineProfiles', wineProfiles);

    const { title, profiles, next, prev } = this.props;
    console.log('title, profiles', title, profiles);

    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">{title}</p>
        </header>

        <div className="card-content">
          <div className="content">
            {profiles.map((profile, index) => {
              return (
                <div key={index}>
                  <p>{profile}</p>
                
                  <div className="tags">
                    {wineProfiles[profile].map((tag, index) => {
                      return (
                        <span key={index}
                          className="tag"
                          // onClick={(e) => this.handleChange(e, category, profile, tag)}
                        >{tag}
                        </span>
                      );
                    })}
                  </div>
              
                </div>
              );
            })}
          </div>
        </div>

        <footer className="card-footer">
          {prev && <span className="button is-link card-footer-item" onClick={prev}>Previous</span>}
          {next && <span className="button is-link card-footer-item" onClick={next}>Next</span>}
        </footer>
      </div>
    );
  }
}


// wineProfiles[.map((profile, index) => {
// return (
//   <div key={index} className="box">
//     <p className="subtitle">{profile}</p>

{/* <div className="tags">
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
                </div> */}

          //     </div>
          //   )

          // })}