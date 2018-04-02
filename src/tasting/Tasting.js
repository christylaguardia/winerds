import React, { PureComponent } from 'react';
import { WineProfiles, WineTypes, WineYears, WineText } from './WineFormFields';
import TagPicker from './TagPicker';
import Card from './Card';
import { makeProfile } from '../data/guide';

export default class Tasting extends PureComponent {

  state = {
    profileName: 'Classic',
    profile: null,
    userInput: null
  }

  componentWillMount = () => {
    const profile = makeProfile('Classic');
    this.setState({ profile });
  }

  handleChange = (event) => {
    this.setState({
      profileName: event.target.value,
      profile: makeProfile(event.target.value)
    })
  }

  render() {

    const { profileName, profile } = this.state;

    return (
      <div>
        <div className="section">
          <div className="container has-text-centered" style={{ maxWidth: '300px' }}>
            <WineProfiles value={profileName}
              handleChange={this.handleChange}/>
          </div>
        </div>
      
        <Card title="Label"
          content={
            // <div className="container" style={{ maxWidth: '600px' }}>
            <div class="field is-grouped is-grouped-multiline">
              <WineTypes />
              <WineYears />
              <WineText title="Winery" />
              <WineText title="Label" />
            </div>
          } />

        {profile && <TagPicker sections={profile.sections} />}

        <div className="section">
          <div className="buttons is-centered">
            <button className="button is-medium is-primary is-outlined">Cancel</button>
            <button className="button is-medium is-primary has-text-white">Save</button>
          </div>
        </div>

      </div>
    )
  }
}