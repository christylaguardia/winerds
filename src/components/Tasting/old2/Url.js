import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = ({
  textField: {
    width: "100%"
  }
});


const Url = ({ classes, url, handleChange }) => (
  <TextField
    id="url"
    label="url"
    type="url"
    value={url}
    placeholder="url"
    fullWidth
    margin="normal"
    variant="outlined"
    onChange={handleChange}
  />
);

Url.propTypes = {
  classes: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default withStyles(styles)(Url);
