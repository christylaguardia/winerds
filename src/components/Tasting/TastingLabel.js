import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  menu: {
    width: 200
  }
});

class TastingLabel extends React.Component {

  componentWillMount() {
    this.createVintageOptions();
  };

  createVintageOptions = () => {
    let year = new Date().getFullYear()
    const years = [];

    while (year >= 1950) {
      year = year - 1;
      years.push({ value: year, label: year });
    }

    return years;
  };

  render() {
    const { classes, show, handleUserInput, type, winery, vintage, style, location } = this.props;
    const typeOptions = [
      { value: 'red', label: 'red' },
      { value: 'white', label: 'white' },
      { value: 'rose', label: 'rose' },
      { value: 'sparkling', label: 'sparkling' },
      { value: 'dessert', label: 'dessert' },
    ];
    const vintageOptions = this.createVintageOptions();
    const locationOptions = [
      { value: 'home', label: 'home' },
      { value: 'restaurant', label: 'restaurant' },
      { value: 'tasting room', label: 'tasting room' },
      { value: 'vineyard', label: 'vineyard' },
      { value: 'winery', label: 'winery' },
    ];

    if (!show) return null;

    return <Grid container spacing={16} justify="center">
      <Grid item>
        {/* <form className={classes.container} noValidate autoComplete="off"> */}
          <TextField
            id="type"
            label="type"
            value={type}
            select
            SelectProps={{ MenuProps: { className: classes.menu } }}
            fullWidth
            margin="normal"
            onChange={event => handleUserInput('type', event.target.value)}
          >
            {typeOptions.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="winery"
            label="winery"
            value={winery}
            placeholder="winery name"
            fullWidth
            margin="normal"
            onChange={event => handleUserInput('winery', event.target.value)}
          />
          <TextField
            id="vintage"
            label="vintage"
            value={vintage}
            select
            SelectProps={{ MenuProps: { className: classes.menu } }}
            fullWidth
            margin="normal"
            onChange={event => handleUserInput('vintage', event.target.value)}
          >
            {vintageOptions.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="style"
            label="style"
            value={style}
            placeholder="style"
            fullWidth
            margin="normal"
            onChange={event => handleUserInput('style', event.target.value)}
          />
          <TextField
            id="location"
            label="location"
            value={location}
            select
            SelectProps={{ MenuProps: { className: classes.menu } }}
            fullWidth
            margin="normal"
            onChange={event => handleUserInput('location', event.target.value)}
          >
            {locationOptions.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        {/* </form> */}
      </Grid>
    </Grid>;
  }
}

TastingLabel.propTypes = {
  classes: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired
};

export default withStyles(styles)(TastingLabel);
