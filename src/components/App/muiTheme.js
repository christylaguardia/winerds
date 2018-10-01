import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#63a4ff',
      main: '#1976d2',
      dark: '#004ba0',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ffbd45',
      main: '#fb8c00',
      dark: '#c25e00',
      contrastText: '#000'
    }
  }
  // overrides: {
  // }
});

export const layout = {
  width: 'auto',
  marginTop: theme.spacing.unit,
  marginBottom: theme.spacing.unit,
  marginLeft: theme.spacing.unit * 3,
  marginRight: theme.spacing.unit * 3,
  [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
    width: 1100,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};