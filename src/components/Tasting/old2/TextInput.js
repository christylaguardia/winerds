import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

const TextInput = ({ name, label, value, handleChange }) => (
  <TextField
    name={name}
    label={label}
    fullWidth
    multiline
    rows="12"
    rowsMax="12"
    value={value}
    onChange={handleChange}
    margin="normal"
    variant="outlined"
  />
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default TextInput;
