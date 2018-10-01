import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import { logout } from './actions';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const MenuAppBar = ({ classes, isAuthenticated, logout }) => (
  <AppBar position="static">
    <Toolbar>
      <div className={classes.grow}>
        <Button to="/" component={Link} color="inherit">
          Winerds
        </Button>
      </div>
      <Typography variant="caption" color="inherit" className={classes.grow}>
        <Chip
          label="BETA"
          color="secondary"
        />
      </Typography>
      {isAuthenticated ? (
        <Button color="inherit" onClick={logout}>
          Logout
        </Button>
      ) : (
        <Button to="/login" component={Link} color="inherit">
          Login
        </Button>
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
