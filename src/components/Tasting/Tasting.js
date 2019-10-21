import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SwipeableViews from "react-swipeable-views";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import TastingWineLabel from "./TastingLabel";
import TastingSection from "./TastingSection";
import TastingMenu from "./TastingMenu";
import TastingNotes from "./TastingNotes";
import { fetchProfile, saveTasting } from "./actions";

const TabContainer = ({ children, dir }) => (
  <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
    {children}
  </Typography>
);

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    marginBottom: theme.spacing(0) * 8 // large margin for the bottom nav
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(0) * 8,
    right: theme.spacing(0) * 2
  }
});

class Tasting extends React.PureComponent {
  state = {
    value: 0,
    userInput: {
      profileId: "",
      type: "",
      winery: "",
      vintage: "",
      style: "",
      location: "",
      descriptors: {},
      notes: ""
    }
  };

  handleUserInput = (name, value) => {
    this.setState(prevState => ({
      userInput: {
        ...prevState.userInput,
        [name]: value
      }
    }));
  };

  handleUserInputTag = (section, tag, isAdding) => {
    console.log(">>>handleUserInputTag", isAdding);
    if (isAdding) this.handleUserInputAddTag(section, tag);
    else this.handleUserInputRemoveTag(section, tag);
  };

  handleUserInputAddTag = (section, tag) => {
    console.log(">>>> handleUserInputAddTag", section, tag);
    this.setState(prevState => {
      let newTags = [];

      if (prevState.userInput.descriptors[section]) {
        newTags = [...prevState.userInput.descriptors[section], tag];
      } else {
        newTags = [tag];
      }

      const newState = {
        userInput: {
          ...prevState.userInput,
          descriptors: {
            ...prevState.userInput.descriptors,
            [section]: newTags
          }
        }
      };

      console.log(">>>> handleUserInputAddTag", newState);

      return newState;
    });
  };

  handleUserInputRemoveTag = (section, tag) => {
    console.log(">>>> handleUserInputRemoveTag", section, tag);
    this.setState(prevState => {
      const index = prevState.userInput.descriptors[section].indexOf(tag);
      const newTags = prevState.userInput.descriptors[section];
      newTags.splice(index, 1);

      return {
        userInput: {
          ...prevState.userInput,
          descriptors: {
            ...prevState.userInput.descriptors,
            [section]: newTags
          }
        }
      };
    });
  };

  // handleUserInput = (parent, name, value) => {
  //   this.setState(prevState => ({
  //     userInput: {
  //       ...prevState.userInput,
  //       [parent]: {
  //         ...prevState.userInput[parent],
  //         [name]: value
  //       }
  //     }
  //   }));
  // };

  // handleUserInputTag = (section, category, tag) => {
  //   // TODO: check if removing or adding tag
  //   if (!newSection)
  //     this.setState(prevState => {
  //       let newSection = {};

  //       const oldSection = userInput.sections.find(s => s.section === section);

  //       return {
  //         userInput: {
  //           sections: [...prevState.userInput.sections, newSection]
  //         }
  //       };
  //     });
  // };

  // handleUserInputTag = (section, category, tag) => {
  //   // TODO: check if removing or adding tag

  //   this.setState(prevState => {
  //     let prevSection = {};
  //     let prevCategory = {};
  //     let prevSubcategory = {};

  //     // check if objects exist in state yet
  //     // only add sections/categories if user has selected tags
  //     if (prevState.userInput[section]) {
  //       prevSection = prevState.userInput[section];

  //       if (prevState.userInput[section][category]) {
  //         prevCategory = prevState.userInput[section][category];
  //       }

  //       // TODO:
  //       // if (
  //       //   subcategory &&
  //       //   prevState.userInput[section][category][subcategory]
  //       // ) {
  //       //   prevSubcategory = prevState.userInput[section][category][subcategory];
  //       // }
  //     }

  //     // TODO:
  //     // if (subcategory)
  //     //   return {
  //     //     userInput: {
  //     //       ...prevState.userInput,
  //     //       [section]: {
  //     //         ...prevSection,
  //     //         [category]: [
  //     //           ...prevCategory,
  //     //           {
  //     //             [subcategory]: [...prevSubcategory, tag]
  //     //           }
  //     //         ]
  //     //       }
  //     //     }
  //     //   };

  //     return {
  //       userInput: {
  //         ...prevState.userInput,
  //         [section]: {
  //           ...prevSection,
  //           [category]: [...prevCategory, tag]
  //         }
  //       }
  //     };
  //   });
  // };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleTabChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  handleClick = profileId => {
    this.setState(prevState => ({
      userInput: {
        ...prevState.userInput,
        profileId
      }
    }));
  };

  handleSave = () => {
    console.log("saveTasting", this.state.userInput);
    this.props.saveTasting(this.state.userInput);
  };

  render() {
    const { classes, theme, profiles } = this.props;
    const { value, userInput } = this.state;

    if (userInput.profileId === "" || !profiles)
      return <TastingMenu handleClick={this.handleClick} />;

    const lastIndex = profiles[userInput.profileId].sections.length;
    console.log("lastIndex", lastIndex);

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
            <Tab label="Label" />
            {profiles[userInput.profileId].sections.map((section, index) => (
              <Tab key={index} label={section.section} />
            ))}
            <Tab label="Notes" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          {/* LABEL TAB */}
          <TabContainer dir={theme.direction}>
            <TastingWineLabel
              show={value === 0}
              type={userInput.type}
              winery={userInput.winery}
              vintage={userInput.vintage}
              style={userInput.style}
              location={userInput.location}
              handleUserInput={this.handleUserInput}
            />
          </TabContainer>
          {/* SECTION TABS */}
          {profiles[userInput.profileId].sections.map((section, index) => (
            <TabContainer key={index} dir={theme.direction}>
              <TastingSection
                show={value === index + 1}
                section={section}
                handleUserInputTag={this.handleUserInputTag}
              />
            </TabContainer>
          ))}
          {/* NOTES TAB */}
          <TabContainer dir={theme.direction}>
            <TastingNotes
              show={value === lastIndex + 1}
              notes={userInput.notes}
              handleUserInput={this.handleUserInput}
            />
          </TabContainer>
        </SwipeableViews>
        {/* FLOATING ACTION BUTTON */}
        <Button
          variant="fab"
          className={classes.fab}
          color="primary"
          onClick={this.handleSave}
        >
          <SaveIcon />
        </Button>
      </div>
    );
  }
}

Tasting.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const styledTasting = withStyles(styles, { withTheme: true })(Tasting);

export default connect(
  ({ profiles }) => ({ profiles }),
  { fetchProfile, saveTasting }
)(styledTasting);
