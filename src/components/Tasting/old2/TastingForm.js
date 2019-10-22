import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Name from "./Name";
import Url from "./Url";
import Tag from "./Tag";
import Notes from "./Notes";

const styles = theme => ({
  card: {
    minWidth: 275,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(0) * 8,
    right: theme.spacing(0) * 2
  }
});

class TastingForm extends React.Component {
  state = {
    name: '',
    url: '',
    tags: {},
    notes: '',
  };

  handleChange = () => {};

  handleUserInputTag = (sectionName, tag, value) => {};

  render() {
    const { classes, profileName, profileData } = this.props;
    const { name, url, tags, notes } = this.state;

    const sections = Object.keys(profileData)
      .map(sectionName => ({ sectionName, tags: profileData[sectionName] }))
      .filter(section => section.sectionName !== "description");
    console.log({ sections });

    return (
      <div>
        <p>{profileName}</p>

        <Name name={name} handleChange={this.handleChange} />
        <Url url={url} handleChange={this.handleChange} />

        {sections.map(({ sectionName, tags }) => (
          <div key={sectionName}>
            <p>{sectionName}</p>
            {tags.map((tag, tagIndex) => (
              <Tag
                key={tagIndex}
                label={tag}
                // TODO: value
                handleClick={value =>
                  this.handleUserInputTag(sectionName, tag, value)
                }
              />
            ))}
          </div>
        ))}

        <Notes notes={notes} handleChange={this.handleChange} />

        <Button
          variant="fab"
          className={classes.fab}
          color="primary"
          onClick={this.handleSave}
        >
          <SaveIcon />
        </Button>
      </div>
    );
  }
}

TastingForm.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(TastingForm);
