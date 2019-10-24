import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import TagPicker from "./TagPicker";
import { STYLE_OPTIONS } from "./constants";
import { getTags } from "./helpers";


import tastingProfile from "../../data/classic.json";

// TODO: find out how to use makeStyles
const styles = theme => ({
  root: {
    width: "90%"
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  }
});

const initialState = {
  style: "",
  label: "",
  styleDisabled: false,
  tags: [],
  selectedTags: []
};

class Tasting extends React.Component {
  state = initialState;

  handleChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };

  handleNext = () => {
    this.setState(prevState => ({ activeStep: prevState.activeStep + 1 }));
  };

  handleBack = () => {
    this.setState(prevState => ({ activeStep: prevState.activeStep - 1 }));
  };

  handleReset = () => {
    // this.setState(prevState => ({ activeStep: 0 }));
    // TODO: confirm if unsaved
    this.setState(initialState);
  };

  getSteps = () => {
    return ["Style", "Label", "Notes", "Finish"];
  };

  getStepContent = step => {
    const { label, sight, nose, palate, finish } = this.state;

    switch (step) {
      case 0:
        return 'style';
      case 1:
        return 'label';
      case 2:
        return 'tasting notes';
      case 3:
        return 'final notes';
      default:
        return "Unknown step";
    }
  };

  handleTypeSelect = event => {
    const { value } = event.target;
    const tags = getTags(value);
    // TODO: handle if (!tags)
    console.log({ style: value, styleDisabled: true, tags });
    this.setState({ style: value, styleDisabled: true, tags });
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
    // TODO:
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    const steps = this.getSteps();

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{this.getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Tasting);
