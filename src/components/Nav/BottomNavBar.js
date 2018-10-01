import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FaceIcon from '@material-ui/icons/Face';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';

const styles = theme => ({
  root: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
  bottomNav: {
    // backgroundColor: theme.palette.text.primary,
    width: '100%'
  }
});

class BottomNavBar extends React.PureComponent {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return <div className={classes.root}>
      <BottomNavigation value={value} onChange={this.handleChange} showLabels className={classes.bottomNav}>
        <BottomNavigationAction to="/profile" component={Link} label="Profile" icon={<FaceIcon />} />
        <BottomNavigationAction to="/tasting" component={Link} label="Tasting" icon={<AddCircleIcon />} />
        <BottomNavigationAction to="/stats" component={Link} label="Data" icon={<BubbleChartIcon />} />
      </BottomNavigation>
    </div>;
  }
}

BottomNavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BottomNavBar);
