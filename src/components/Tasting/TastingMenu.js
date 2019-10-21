import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import Button from '@material-ui/core/Button';
import { fetchProfile, fetchProfiles } from './actions';
import { layout } from '../../muiTheme';

const styles = theme => ({
  layout,
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 4
  }
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
        <Grid container spacing={16} justify="center">

          <Grid item>
            <Typography variant="title" align="center" gutterBottom>
              Select a Profile
            </Typography>
            <Paper className={classes.paper}>
              <List component="nav">
                {profileNames.map((profile, index) => (
                  <ListItem
                    button
                    key={index}
                    onClick={() => this.handleClick(profile._id)}
                  >
                    <ListItemText
                      primary={profile.profile}
                      secondary="description goes here"
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          {/* <Button component={Link} to="/configure/new" variant="contained" color="primary" disabled>
            Create a new profile
          </Button> */}

        </Grid>
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
