import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Hero from '../Hero/Hero';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

const Home = ({ classes, isAuthenticated }) => {
  if (isAuthenticated) return <Redirect to ="/profile" />;

  return (
    <div>
      <Hero
        title="winerds"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Grid container spacing={16} justify="center">
        <Grid item>
          <Button
            to="/about"
            component={Link}
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
          >
            learn more
          </Button>
          <Button
            to="/login"
            component={Link}
            variant="outlined"
            color="primary"
            size="large"
            className={classes.button}
          >
            get started
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default withStyles(styles)(Home);
