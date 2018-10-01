import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300 // TODO: can't get this to be auto
  }
});

const TastingNotes = ({ classes, notes, handleUserInput }) => (
  <Grid container spacing={16} justify="center">
    <Grid item>
      <Paper>
        <TextField
          id="notes"
          variant="outlined"
          fullWidth
          multiline
          rows="12"
          rowsMax="12"
          value={notes}
          placeholder="final thoughts..."
          onChange={event => handleUserInput('notes', event.target.value)}
          className={classes.textField}
          margin="normal"
        />
      </Paper>
    </Grid>
  </Grid>
);

TastingNotes.propTypes = {
  classes: PropTypes.object.isRequired,
  notes: PropTypes.string.isRequired,
  handleUserInput: PropTypes.func.isRequired
};

export default withStyles(styles)(TastingNotes);