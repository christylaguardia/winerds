import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Login from "../../components/Login/Login";

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '600px'
  }
});

const Home = ({ classes, isAuthenticated }) => {
  if (isAuthenticated) return <Redirect to="/tasting" />;

  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h1" align="center" color="textPrimary">
          Wine Tasting Guide
        </Typography>
        <Login />
      </div>
    </div>
  );
};

Home.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
