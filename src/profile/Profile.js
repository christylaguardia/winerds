import React, { PureComponent } from 'react';
// import { Link } from 'react-router-dom';
import { WineTypes, WineYears, WineText } from './WineFormFields';
import TagPicker from '../tags/TagPicker';
import Wizard from '../old/Wizard';

// import config from '../data/config.json';

// const tabs = Object.keys(config);
// console.log('tabs', tabs);

class Profile extends PureComponent {
  
  state = {
    active: 'sight'
  }

  // selectTab = (tab) => this.setState({ active: tab });

  render() {
    // const { sight, nose, pallet } = this.state;
    const { active, tabs } = this.state;

    return (
      <section className="section">
        <div className="container box">
          <h1 className="title">Label</h1>
          <form>
            <WineTypes />
            <WineYears />
            <WineText title="Winery" />
            <WineText title="Label" />
          </form>
        </div>

        {/* <div className="tabs is-centered">
          <ul>
            <li className={active === 'sight' ? 'is-active' : ''} onClick={() => this.selectTab('sight')}><a>Sight</a></li>
            <li className={active === 'nose' ? 'is-active' : ''} onClick={() => this.selectTab('nose')}><a>Nose</a></li>
            <li className={active === 'pallet' ? 'is-active' : ''} onClick={() => this.selectTab('pallet')}><a>Pallet</a></li>
            <li className={active === 'finish' ? 'is-active' : ''} onClick={() => this.selectTab('finish')}><a>Finish</a></li>
          </ul>
        </div> */}
        
        <div>
          <TagPicker />
          {/* <Wizard /> */}
        </div>

      </section>
    )
  }
}

export default Profile;