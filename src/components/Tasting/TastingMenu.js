import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { fetchProfile, fetchProfiles } from './actions';
import { layout } from '../App/muiTheme';

const styles = theme => ({
  layout
});

class TastingMenu extends React.PureComponent {
  componentWillMount() {
    const { profileNames, fetchProfiles } = this.props;

    if (!profileNames) fetchProfiles();
  };

  handleClick = id => {
    console.log('handleClick = id', id);
    this.props.fetchProfile(id);
    this.props.handleClick(id);
  }

  render() {
    const { classes, profileNames } = this.props;

    if (!profileNames) return null;

    return <div className={classes.layout}>
        <Typography variant="title" gutterBottom>
          Select a tasting note profile
        </Typography>
        <List component="nav">
          {profileNames.map((profile, index) => (
            <ListItem
              button
              key={index}
              onClick={() => this.handleClick(profile._id)}
            >
              <ListItemText primary={profile.profile} />
            </ListItem>
          ))}
        </List>
        <Button component={Link} to="/configure/new" variant="contained" color="primary" disabled>
          Create a new profile
        </Button>
      </div>;
  }
}

TastingMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default connect(
  ({ profileNames }) => ({ profileNames }),
  { fetchProfile, fetchProfiles }
)(withStyles(styles)(TastingMenu));
