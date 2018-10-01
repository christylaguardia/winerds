import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import Chip from '@material-ui/core/Chip';
import { layout } from '../App/muiTheme';
import { fetchTastings } from './actions';

const styles = {
  layout
};

class History extends React.PureComponent {

  componentWillMount() {
    const { tastings, fetchTastings } = this.props;
    if (!tastings) fetchTastings();
  }

  render() {
    const { classes, tastings } = this.props;

    if (!tastings) return null;

    return <div className={classes.layout}>
      <Grid container spacing={16} justify="center">
        <Grid item>
          <Typography variant="title" align="center" gutterBottom>
            Tasting History
          </Typography>

          {Object.keys(tastings).map(key => <Grid item>
            <Typography variant="subheading" align="center" gutterBottom>
              {`${tastings[key].winery} - ${tastings[key].style}`}
            </Typography>

            {/* {Object.keys(tastings[key].descriptors).map(dKey => (
              <div>
                <Typography variant="Subheading" align="center" gutterBottom>
                  {dKey}
                </Typography>
                {tastings[key].descriptors[dKey].map(tag => <Chip label={tag} />)}
              </div>
            ))} */}

          </Grid>)}
        </Grid>
      </Grid>
    </div>;
  }
}

History.propTypes = {
  classes: PropTypes.object.isRequired,
  tastings: PropTypes.object
};

export default connect(
  ({ tastings }) => ({ tastings }),
  { fetchTastings }
)(withStyles(styles)(History));
