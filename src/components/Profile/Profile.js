import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import History from "./History";
import { getUser, saveUser } from "./actions";
import { layout } from "../../muiTheme";

const styles = theme => ({
  layout: layout,
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    width: 200
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing(0)
  }
});

const experienceLevels = [
  { value: "beginner", label: "beginner" },
  { value: "experienced", label: "experienced" },
  { value: "sommelier", label: "sommelier" }
];

class Profile extends React.Component {
  state = {
    editorOff: true,
    displayName: "",
    email: "",
    experience: ""
  };

  componentWillMount() {
    const { user, getUser } = this.props;

    if (!user.data) getUser();
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
        email: user.data.email,
        experience: user.data.experience
      });
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    const { displayName, email, experience } = this.state;
    const user = {
      displayName,
      email,
      experience,
      uid: this.props.user.uid
    };
    this.props.saveUser(user);
  };

  render() {
    const { classes, user } = this.props;
    const { editorOff, displayName, email, experience } = this.state;

    return (
      <div className={classes.layout}>
        <Typography variant="title" align="center" gutterBottom>
          {user.providerData[0].displayName}
        </Typography>

        <Grid container spacing={16} justify="center">
          <Grid item>
            {editorOff ? (
              <Button
                color="primary"
                variant="outlined"
                className={classes.button}
                onClick={() => this.setState({ editorOff: false })}
              >
                edit your profile
              </Button>
            ) : (
              <form
                className={classes.container}
                noValidate
                autoComplete="off"
                onSubmit={event => {
                  event.preventDefault();
                  this.handleSubmit();
                  // TODO: reset not working
                  // event.target.reset();
                }}
              >
                <TextField
                  id="displayName"
                  name="displayName"
                  label="name"
                  value={displayName}
                  placeholder="your name"
                  fullWidth
                  margin="normal"
                  disabled={editorOff}
                  onChange={this.handleChange}
                />
                <TextField
                  id="email"
                  name="email"
                  label="email"
                  type="email"
                  value={email}
                  placeholder="email"
                  fullWidth
                  margin="normal"
                  disabled={editorOff}
                  onChange={this.handleChange}
                />
                <TextField
                  id="experience"
                  name="experience"
                  label="wine experience"
                  value={experience}
                  select
                  SelectProps={{ MenuProps: { className: classes.menu } }}
                  fullWidth
                  margin="normal"
                  disabled={editorOff}
                  onChange={this.handleChange}
                >
                  {experienceLevels.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  save
                </Button>
                <Button
                  color="primary"
                  className={classes.button}
                  onClick={() => this.setState({ editorOff: true })}
                >
                  cancel
                </Button>
              </form>
            )}
          </Grid>
        </Grid>

        <History />
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  ({ user }) => ({ user }),
  { getUser, saveUser }
)(withStyles(styles)(Profile));
