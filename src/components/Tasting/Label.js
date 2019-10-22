import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = {
  textField: {
    width: "100%"
  }
};

const Label = ({ classes, label, handleChange }) => (
  <TextField
    id="label"
    label="label"
    type="text"
    value={label}
    placeholder="label"
    fullWidth
    // className={classes.textField}
    margin="normal"
    variant="outlined"
    onChange={handleChange}
  />
);

Label.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default withStyles(styles)(Label);
