import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import FaceIcon from "@material-ui/icons/Face";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";

const styles = theme => ({
  bottomNav: {
    position: "fixed",
    bottom: "0",
    width: "100%"
  }
});

class BottomNavBar extends React.PureComponent {
  state = {
    value: 0
  };

  componentWillReceiveProps(nextProps) {
    const { pathname } = nextProps.location;

    const value = ["/data", "/tasting", "/profile"].indexOf(pathname);

    if (value > -1) {
      this.setState({
        value
      });
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.bottomNav}
      >
        <BottomNavigationAction
          to="/data"
          component={Link}
          label="Data"
          icon={<BubbleChartIcon />}
        />
        <BottomNavigationAction
          to="/tasting"
          component={Link}
          label="Tasting"
          icon={<AddCircleIcon />}
        />
        <BottomNavigationAction
          to="/profile"
          component={Link}
          label="Profile"
          icon={<FaceIcon />}
        />
      </BottomNavigation>
    );
  }
}

BottomNavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(BottomNavBar));
