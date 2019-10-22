import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tag from "./Tag";

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

const TagPicker = ({ classes, tags, handleAddTag }) => (
  <div className={classes.root}>
    {tags.map((tag, tagIndex) => (
      <Tag
        key={tagIndex}
        label={tag}
        // TODO: value
        handleAddTag={() => handleAddTag(tag)}
      />
    ))}
  </div>
);

export default withStyles(styles, { withTheme: true })(TagPicker);
