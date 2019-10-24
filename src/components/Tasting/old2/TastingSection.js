import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TagPicker from "./TagPicker";

const styles = theme => ({
  root: {
  }
});

const TastingSection = ({ classes, tags, categories, handleAddTag }) => (
  <div>
    {categories.map(({category, tags}) => (
      <div key={category}>
        <Typography variant="body1" gutterBottom>
          {category}
        </Typography>
        <TagPicker tags={tags} handleAddTag={tag => handleAddTag(category, tag) } />
      </div>
    ))}
  </div>
);

export default withStyles(styles, { withTheme: true })(TastingSection);
