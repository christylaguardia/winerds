import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import { logout } from "./actions";

const styles = {
  grow: {
    flexGrow: 1
  }
};

const MenuAppBar = ({ classes, isAuthenticated, logout }) => (
  <AppBar position="static">
    <Toolbar>
      <div className={classes.grow}>
        <Button to="/" component={Link} color="inherit">
          Winerds
        </Button>
      </div>
      {isAuthenticated ? (
        <Button color="inherit" onClick={logout}>
          Logout
        </Button>
      ) : (
        <Chip label="BETA" color="secondary" />
      )}
    </Toolbar>
  </AppBar>
);

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

export default connect(
  null,
  { logout }
)(withStyles(styles)(MenuAppBar));
