import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    width: 200
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
    const { classes, show, handleUserInput } = this.props;
    const { type, winery, vintage, style } = this.props.userInput;
    const typeOptions = [
      { value: 'red', label: 'red' },
      { value: 'white', label: 'white' },
      { value: 'rose', label: 'rose' },
      { value: 'sparkling', label: 'sparkling' },
      { value: 'dessert', label: 'dessert' },
    ];
    const vintageOptions = this.createVintageOptions();

    if (!show) return null;

    return <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="type"
        name="type"
        label="type"
        value={type}
        select
        SelectProps={{ MenuProps: { className: classes.menu } }}
        // helperText="please select the vintage year"
        fullWidth
        margin="normal"
        onChange={event => handleUserInput('label', 'type', event.target.value)}
      >
        {typeOptions.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="winery"
        name="winery"
        label="winery"
        value={winery}
        placeholder="winery name"
        // helperText="please enter the name of the winery"
        fullWidth
        margin="normal"
        onChange={event => handleUserInput('label', 'winery', event.target.value)}
      />
      <TextField
        id="vintage"
        name="vintage"
        label="vintage"
        value={vintage}
        select
        SelectProps={{ MenuProps: { className: classes.menu } }}
        // helperText="please select the vintage year"
        fullWidth
        margin="normal"
        onChange={event => handleUserInput('label', 'vintage', event.target.value)}
      >
        {vintageOptions.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="style"
        name="style"
        label="style"
        value={style}
        placeholder="style"
        // helperText="please enter the wine style name"
        fullWidth
        margin="normal"
        onChange={event => handleUserInput('label', 'style', event.target.value)}
      />
    </form>;
  }
}

TastingLabel.propTypes = {
  classes: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired
};

export default withStyles(styles)(TastingLabel);
