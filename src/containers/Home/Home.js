import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hero from "../../components/Hero/Hero";
import Login from "../../components/Login/Login";

const styles = theme => ({
  button: {
    margin: theme.spacing(0)
  }
});

const Home = ({ isAuthenticated }) => {
  if (isAuthenticated) return <Redirect to="/profile" />;

  return (
    <div>
      <Hero title="Wine Tasting Guide" />
      <Grid container spacing={16} justify="center">
        <Grid item>
          <Login />
        </Grid>
      </Grid>
    </div>
  );
};

Home.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

export default withStyles(styles)(Home);
