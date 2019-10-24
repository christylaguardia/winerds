import React from "react";
import PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    // justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5)
    }
  }
});

const TagPicker = ({ classes, tags, selectedTags, handleTagClick }) => (
  <div className={classes.root}>
    {tags.map((tag, tagIndex) => (
      <span onClick={() => handleTagClick(tag)}>
        <Chip
          key={tagIndex}
          label={tag}
          color={selectedTags.includes(tag) ? "primary" : "secondary"}
        />
      </span>
    ))}
  </div>
);

TagPicker.propTypes = {
  classes: PropTypes.object.isRequired,
  tags: PropTypes.array.isRequired,
  handleTagClick: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(TagPicker);
