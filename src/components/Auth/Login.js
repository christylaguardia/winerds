import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import Typography from '@material-ui/core/Typography';
import { login } from './actions';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

// const styles = theme => ({
//   container: {
//     display: "flex",
//     flexWrap: "wrap"
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//     width: 200
//   },
//   button: {
//     margin: theme.spacing.unit
//   }
// });

class Login extends React.PureComponent {
  state = {
    email: "",
    password: ""
  };

  // componentWillMount() {
  //   this.loginFromRedirect();
  // }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleLogin = () => {
    const { email, password } = this.state;
    this.props.login(email, password);
  };

  render() {
    const { classes } = this.props;
    const { email, password } = this.state;

    return (
      <Grid container justify="center">
        {/* <Grid container {...rest} className={classes.grid + " " + className}> */}
        <Grid item xs={12} sm={12} md={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary">
                Login
              </Typography>
              {/* <IconButton
                className={classes.button}
                aria-label="login with twitter"
                onClick={() => this.loginWithProvider(twitterProvider)}
              >
                <i className={"fab fa-twitter"} />
              </IconButton>
              <IconButton
                className={classes.button}
                aria-label="login with facebook"
                onClick={() => this.loginWithProvider(facebookProvider)}
              >
                <i className={"fab fa-facebook"} />
              </IconButton>
              <IconButton
                className={classes.button}
                aria-label="login with google"
                onClick={() => this.loginWithProvider(googleProvider)}
              >
                <i className={"fab fa-google"} />
              </IconButton> */}
              <TextField
                id="email"
                label="Email"
                className={classes.textField}
                value={email}
                onChange={this.handleChange("email")}
                margin="normal"
                fullWidth
              />
              <TextField
                id="password-input"
                label="Password"
                className={classes.textField}
                value={password}
                onChange={this.handleChange("password")}
                type="password"
                autoComplete="password"
                margin="normal"
                fullWidth
              />
            </CardContent>
            <CardActions>
              <Button color="primary" size="small" onClick={this.handleLogin}>
                Login
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(
  ({ user }) => ({ user }),
  { login }
)(withStyles(styles)(Login));
