import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Tag from './Tag';
import { layout } from '../../muiTheme';

const styles = theme => ({
  layout,
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    // paddingTop: theme.spacing.unit / 2,
    paddingRight: theme.spacing.unit / 2,
    paddingLeft: theme.spacing.unit / 2,
    // paddingBottom: theme.spacing.unit * 2,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
});

const TastingSection = ({ classes, show, section, handleUserInputTag }) => {
  if (!show) return null;

  return <div className={classes.layout}>
      {section.categories.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <Typography className={classes.heading} gutterBottom align="left">
            {category.category}
          </Typography>
          <div className={classes.root}>
            {category.tags.map((tag, tagIndex) => (
              <Tag
                key={tagIndex}
                label={tag}
                handleClick={value =>
                  handleUserInputTag(section.section, tag, value)
                }
              />
            ))}
          </div>
        </div>
      ))}
    </div>;
};
    
TastingSection.propTypes = {
  classes: PropTypes.object.isRequired,
  // section: PropTypes.shape({
  //   name: PropTypes.string.isRequired
  // }).isRequired,
  handleUserInputTag: PropTypes.func.isRequired
};

export default withStyles(styles)(TastingSection);