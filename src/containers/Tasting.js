import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
// , WineTypes, WineYears, WineText, WineTextArea, WineRating } from '../components/WineFormFields';
// import TagPicker from './TagPicker';
// import Card from './Card';
// import Panel from './Panel';
// import Modal from '../components/Modal';

import { makeProfile } from '../data/guide';
import Profile from '../components/Profile';
import ProfileSections from '../components/ProfileSections';


const Section = ({ section }) => <h1>{section}</h1>;

const Category = ({ category }) => <h3>{category}</h3>;

const SubCategory = ({ subcategory }) => {

  if (typeof subcategory === 'string') return <span className="tag">{subcategory}</span>;

  return console.log('subcategory', subcategory);
  // return (
  //   <div>
  //     <h5>{subcategory.name}</h5>
  //     <div className="tags">
  //       {subcategory.tags.map((tagName, tagIndex) => {
  //         return <span key={tagIndex} className="tag">{tagName}</span>;
  //       })}
  //     </div>
  //   </div>
  // );
}
export default class TastingContainer extends PureComponent {

  // TODO: add local state for profile to be saved
  // or save on click new button, then delete if canceled

  state = {
    profileName: 'Classic',
    profile: null,
    userInput: null
  }

  componentWillMount = () => {
    const profile = makeProfile('Classic');
    this.setState({ profile }, () => console.log('profile', profile));
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
      <div className="container">
        <div className="content">
          {/* <Profile value={profileName} handleChange={this.handleChange} />
          <ProfileSections sections={profile.sections} /> */}

          {profile.sections.map((section, sectionIndex) => {
            return (
              <div key={sectionIndex} >
                <Section section={section.name} />

                {section.categories.map((category, categoryIndex) => {
                  return (
                    <div key={categoryIndex}>
                      <Category category={category.name} />
                      {console.log('category.tags', category.tags)}

                      <div className="tags">
                        {category.tags.map((tag, tagIndex) => {
                          if (typeof tag === 'string') return <span key={tagIndex} className="tag">{tag}</span>;
                          else return <SubCategory key={tagIndex} subcategory={tag} />;
                        })}
                      </div>

                    </div>
                  );
                })}

              </div>
            );
          })}


        {/* <Switch>
          {profile.sections.map((section, index) => {
            return <Route path={`/${}`} />
          })}
        </Switch> */}

        {/* <Panel sections={profile.sections} /> */}
        {/* <Card title="Label"
          content={
            <div className="field is-grouped is-grouped-multiline">
              <WineProfiles value={profileName} handleChange={this.handleChange}/>
              <WineTypes />
              <WineYears />
              <WineText title="Winery" />
              <WineText title="Label" />
            </div>
          }
        /> */}

        {/* {profile && <TagPicker sections={profile.sections} />} */}

        {/* <Card title="Finish"
          content={
          <div>
            <WineRating value={2} />
            <WineTextArea title="Comments" />
          </div>}
        /> */}

        {/* <div className="section">
          <div className="buttons is-centered">
            <button className="button is-medium is-primary is-outlined">Cancel</button>
            <button className="button is-medium is-primary has-text-white">Save</button>
          </div>
        </div> */}

        </div>
      </div>
    )
  }
}