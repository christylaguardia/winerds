import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TagPicker from "./TagPicker";
import { saveTasting } from "./actions";
import { STYLE_OPTIONS } from "./constants";
import { getTags } from "./helpers";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginBottom: "64px" // offset the bottom nav
  }
});

const initialState = {
  error: null,
  style: "",
  label: "",
  styleDisabled: false,
  tags: [],
  selectedTags: []
};

class Tasting extends React.Component {
  // TODO: should this state should go in redux?
  state = initialState;

  handleTypeSelect = event => {
    const { value } = event.target;
    const tags = getTags(value);
    if (!tags || !tags.length) {
      this.setState({ error: "please select another style" });
    } else {
      this.setState({ style: value, styleDisabled: true, tags });
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleToggleTag = tag => {
    // TODO: handle primary, secondary and tertiary levels
    this.setState(prevState => {
      let newState;

      if (prevState.selectedTags.includes(tag)) {
        const newSelectedTags = prevState.selectedTags.filter(
          selectedTag => selectedTag !== tag
        );
        newState = {
          ...prevState,
          selectedTags: newSelectedTags
        };
      } else {
        newState = {
          ...prevState,
          selectedTags: [...prevState.selectedTags, tag]
        };
      }

      return newState;
    });
  };

  handleSave = () => {
    const { saveTasting } = this.props;
    const { style, label, selectedTags } = this.state;
    saveTasting({ style, label, selectedTags });
    // TODO: handle redirect or update?
  };

  handleReset = () => {
    // TODO: confirm if unsaved
    this.setState(initialState);
  };

  render() {
    const { classes } = this.props;
    const {
      error,
      style,
      label,
      styleDisabled,
      tags,
      selectedTags
    } = this.state;

    return (
      <div className={classes.root}>
        <Container maxWidth="sm">
          <TextField
            name="style"
            helperText="select the style of your wine"
            label="style"
            select
            value={style}
            onChange={this.handleTypeSelect}
            fullWidth
            margin="normal"
            // variant="outlined"
            disabled={styleDisabled}
            required
          >
            {STYLE_OPTIONS.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          {error && (
            <Typography color="textPrimary" component="p">
              {error}
            </Typography>
          )}

          {styleDisabled && (
            <>
              <TextField
                name="label"
                label="label"
                helperText="enter the wine label info (maker, vintage)"
                type="text"
                value={label}
                placeholder="label"
                fullWidth
                margin="normal"
                // variant="outlined"
                onChange={this.handleChange}
                required
              />
              <Typography variant="body2" color="textSecondary" component="p">
                find your tasting notes
              </Typography>
              <TagPicker
                tags={tags}
                selectedTags={selectedTags}
                handleTagClick={this.handleToggleTag}
              />

              {/* TODO: use fab */}
              <br />

              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={this.handleSave}
              >
                Save
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={this.handleReset}
              >
                Reset
              </Button>
            </>
          )}
        </Container>
      </div>
    );
  }
}

Tasting.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  null,
  { saveTasting }
)(withStyles(styles, { withTheme: true })(Tasting));
