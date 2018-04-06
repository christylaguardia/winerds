import React, { PureComponent } from 'react';
import { WineProfiles, WineTypes, WineYears, WineText, WineTextArea, WineRating } from './WineFormFields';
import TagPicker from './TagPicker';
import Card from './Card';
import { makeProfile } from '../data/guide';

export default class Tasting extends PureComponent {

  // TODO: add local state for profile to be saved
  // or save on click new button, then delete if canceled

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
        <Card title="Label"
          content={
            <div className="field is-grouped is-grouped-multiline">
              <WineProfiles value={profileName} handleChange={this.handleChange}/>
              <WineTypes />
              <WineYears />
              <WineText title="Winery" />
              <WineText title="Label" />
            </div>
          }
        />

        {profile && <TagPicker sections={profile.sections} />}

        <Card title="Finish"
          content={
          <div>
            <WineRating value={2} />
            <WineTextArea title="Comments" />
          </div>}
        />

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