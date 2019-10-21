import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { getCurrentUser, updateDisplayName, updateEmail } from "./actions";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(0)
  }
});

class Profile extends React.Component {
  state = {
    displayName: "",
    email: ""
  };

  componentWillMount() {
    const { user, getCurrentUser } = this.props;
    if (!user.data) getCurrentUser();
  }

  componentDidMount() {
    const { user } = this.props;

    if (!user.data) {
      this.setState({
        displayName: user.providerData[0].displayName,
        email: user.providerData[0].email
      });
    } else {
      this.setState({
        displayName: user.data.displayName,
        email: user.data.email
      });
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleUpdateDisplayName = () => {
    const { displayName } = this.state;
    this.props.updateDisplayName(displayName);
  };

  handleUpdateEmail = () => {
    const { email } = this.state;
    this.props.updateEmail(email);
  };

  render() {
    const { classes } = this.props;
    const { displayName, email } = this.state;

    return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="displayName"
          name="displayName"
          label="name"
          value={displayName}
          placeholder="your name"
          fullWidth
          margin="normal"
          onChange={this.handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.handleUpdateDisplayName}
        >
          update
        </Button>
        <TextField
          id="email"
          name="email"
          label="email"
          type="email"
          value={email}
          placeholder="email"
          fullWidth
          margin="normal"
          onChange={this.handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.handleUpdateEmail}
          disabled={true}
          // TODO: disabling email until verificaiton is setup
        >
          update
        </Button>
        <p>Updating email is not available at this time.</p>
      </form>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  getCurrentUser: PropTypes.func.isRequired,
  updateDisplayName: PropTypes.func.isRequired,
  updateEmail: PropTypes.func.isRequired
};

export default connect(
  ({ user }) => ({ user }),
  { getCurrentUser, updateDisplayName, updateEmail }
)(withStyles(styles)(Profile));
