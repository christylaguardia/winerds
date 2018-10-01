import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

function FloatingActionButton(props) {
  const { classes } = props;
  return (
    <Button
      variant="extendedFab"
      aria-label="save"
      className={classes.button}
    >
      <SaveIcon className={classes.extendedIcon} />
      Extended
    </Button>
  );
}

FloatingActionButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FloatingActionButton);
