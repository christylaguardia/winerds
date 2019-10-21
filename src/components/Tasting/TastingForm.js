import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TastingLabel from "./TastingLabel";
import Tag from "./Tag";

const styles = theme => ({
  card: {
    minWidth: 275,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  }
});

class TastingForm extends React.Component {
  handleUserInputTag = () => {};

  render() {
    const { profileName, profileData } = this.props;
    const sections = Object.keys(profileData)
      .map(sectionName => ({ sectionName, tags: profileData[sectionName] }))
      .filter(section => section.sectionName !== "description");
    console.log({ sections });

    return (
      <div>
        <p>{profileName}</p>

        <TastingLabel />

        {sections.map(({ sectionName, tags }) => (
          <div>
            <p>{sectionName}</p>
            {tags.map((tag, tagIndex) => (
              <Tag
                key={tagIndex}
                label={tag}
                handleClick={value =>
                  this.handleUserInputTag(sectionName, tag, value)
                }
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

TastingForm.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(TastingForm);
