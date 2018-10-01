import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { layout } from '../App/muiTheme';

const styles = theme => ({
  layout,
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  }
});

const Hero = ({ classes, title, subtitle }) => (
  <div className={classes.layout}>
    <div className={classes.heroContent}>
      <Typography
        variant="display3"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        {title}
      </Typography>
      <Typography
        variant="title"
        align="center"
        color="textSecondary"
        component="p"
      >
        {subtitle}
      </Typography>
    </div>
  </div>
);

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default withStyles(styles)(Hero);