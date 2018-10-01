import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0
  }
});

const TastingNotes = ({ classes, name, notes, handleUserInput }) => (
  <TextField
    id="outlined-multiline-flexible"
    label="Notes"
    fullWidth
    multiline
    rows="12"
    rowsMax="12"
    value={notes}
    onChange={event => handleUserInput('notes', name, event.target.value)}
    className={classes.textField}
    margin="normal"
  />
);

TastingNotes.propTypes = {
  classes: PropTypes.object.isRequired,
  notes: PropTypes.string,
  handleChange: PropTypes.func.isRequired
};

export default withStyles(styles)(TastingNotes);