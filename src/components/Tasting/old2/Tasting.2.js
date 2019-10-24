import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TastingSection from "./TastingSection";

import TASTING_PROFILE from "../../data/classic.json";

const TYPE_OPTIONS = [
  { value: "red", label: "red" },
  { value: "white", label: "white" },
  { value: "rose", label: "rose" },
  { value: "sparkling", label: "sparkling" },
  { value: "dessert", label: "dessert" }
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginBottom: "64px" // offset the bottom nav
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  },
  tabPanel: {
    marginBottom: "100px"
  },
  button: {
    margin: theme.spacing(1)
  }
});

class Tasting extends React.Component {
  state = {
    activeTabValue: 0,
    type: "",
    label: "",
    sight: [],
    nose: [],
    palate: [],
    finish: ""
  };

  handleTabChange = (event, newValue) => {
    this.setState({ activeTabValue: newValue });
  };

  handleNextTab = () => {
    this.setState(prevState => ({
      activeTabValue: prevState.activeTabValue + 1
    }));
  };

  handleChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };

  handleAddTag = ({ section, category, tag }) => {
    console.log(">>>> handleAddTag", section, category, tag);
    this.setState(prevState => {
      const newState = {
        [section]: {
          ...prevState[section],
          [category]: [...prevState[section][category], tag]
        }
      };

      return newState;
    });

    // this.setState(prevState => {
    //   let newTags = [];

    // // if (prevState.[section]) {
    // //   newTags = [...prevState.userInput.descriptors[section], tag];
    // // } else {
    // //   newTags = [tag];
    // }

    // const newState = {
    //   [section]: {
    //     ...prevState[section],
    //     descriptors: {
    //       ...prevState[section].descriptors,
    //       [section]: newTags
    //     }
    //   }
    // };

    // console.log(">>>> handleUserInputAddTag", newState);

    // return newState;
    // });
  };

  render() {
    const { classes } = this.props;
    const {
      activeTabValue,
      type,
      label,
      sight,
      nose,
      palate,
      finish
    } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={activeTabValue}
            onChange={this.handleTabChange}
            aria-label="wine tasting tabs"
            centered
          >
            <Tab label="Label" {...a11yProps(0)} />
            <Tab label="Sight" {...a11yProps(1)} />
            <Tab label="Nose" {...a11yProps(2)} />
            <Tab label="Pallet" {...a11yProps(3)} />
            <Tab label="Finish" {...a11yProps(4)} />
          </Tabs>
        </AppBar>
        <TabPanel value={activeTabValue} index={0}>
          <Container maxWidth="sm" className={styles.tabPanel}>
            <TextField
              name="type"
              select
              label="type"
              value={type}
              onChange={this.handleChange}
              fullWidth
              margin="normal"
            >
              {TYPE_OPTIONS.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              name="label"
              fullWidth
              multiline
              rows="12"
              rowsMax="12"
              value={label}
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={this.handleNextTab}
            >
              Next
            </Button>
          </Container>
        </TabPanel>
        <TabPanel value={activeTabValue} index={1}>
          <Container maxWidth="sm" className={styles.tabPanel}>
            <TastingSection
              tags={sight}
              categories={TASTING_PROFILE.sight}
              handleAddTag={(category, tag) => this.handleAddTag('sight', category, tag)}
            />
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={this.handleNextTab}
            >
              Next
            </Button>
          </Container>
        </TabPanel>
        <TabPanel value={activeTabValue} index={2}>
          <Container maxWidth="sm" className={styles.tabPanel}>
            <TastingSection
              tags={nose}
              categories={TASTING_PROFILE.nose}
              handleAddTag={(category, tag) => this.handleAddTag('nose', category, tag)}
            />
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={this.handleNextTab}
            >
              Next
            </Button>
          </Container>
        </TabPanel>
        <TabPanel value={activeTabValue} index={3}>
          <Container maxWidth="sm" className={styles.tabPanel}>
            <TastingSection
              tags={palate}
              categories={TASTING_PROFILE.palate}
              handleAddTag={(category, tag) => this.handleAddTag('palate', category, tag)}
            />
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={this.handleNextTab}
            >
              Next
            </Button>
          </Container>
        </TabPanel>
        <TabPanel value={activeTabValue} index={4}>
          <Container maxWidth="sm" className={styles.tabPanel}>
            <TextField
              name="finish"
              fullWidth
              multiline
              rows="12"
              rowsMax="12"
              value={finish}
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Save
            </Button>
          </Container>
        </TabPanel>
      </div>
    );

    // return (
    //   <div className={classes.root}>
    //     <AppBar position="static">
    //       <Tabs
    //         // orientation="vertical"
    //         // variant="scrollable"
    //         value={activeTabValue}
    //         onChange={this.handleTabChange}
    //         aria-label="Vertical tabs example"
    //         // className={classes.tabs}
    //       >
    //         <Tab label="Label" {...a11yProps(0)} />
    //         <Tab label="Sight" {...a11yProps(1)} />
    //         <Tab label="Nose" {...a11yProps(2)} />
    //         <Tab label="Pallet" {...a11yProps(3)} />
    //         <Tab label="Finish" {...a11yProps(4)} />
    //       </Tabs>
    //     </AppBar>
    //     <TabPanel value={activeTabValue} index={0}>
    //       <Container maxWidth="sm">
    //         <TextInput
    //           name="label"
    //           value={label}
    //           handleChange={this.handleChange}
    //         />
    //       </Container>
    //     </TabPanel>
    //     <TabPanel value={activeTabValue} index={1}>
    //       <TastingSection categories={TASTING_PROFILE.sight} />
    //     </TabPanel>
    //     <TabPanel value={activeTabValue} index={2}>
    //       <TastingSection categories={TASTING_PROFILE.nose} />
    //     </TabPanel>
    //     <TabPanel value={activeTabValue} index={3}>
    //       <TastingSection categories={TASTING_PROFILE.palate} />
    //     </TabPanel>
    //     <TabPanel value={activeTabValue} index={4}>
    //       <TextInput
    //         name="finish"
    //         value={finish}
    //         handleChange={this.handleChange}
    //       />
    //     </TabPanel>
    //   </div>
    // );
  }
}

export default withStyles(styles)(Tasting);
