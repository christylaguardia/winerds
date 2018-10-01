import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Hero from '../Hero/Hero';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

const About = ({ classes }) => (
  <div>
    <Hero
      title="how it works"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
    <Grid container spacing={16} justify="center">
      <Grid item>
        <Button
          to="/login"
          component={Link}
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
        >
          login
        </Button>
      </Grid>
    </Grid>
  </div>
);

About.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(About);
