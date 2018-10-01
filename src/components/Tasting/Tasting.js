import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import RightIcon from '@material-ui/icons/KeyboardArrowRight';
import green from '@material-ui/core/colors/green';

import TastingWineLabel from './TastingLabel';
import TastingSection from './TastingSection';
import TastingMenu from './TastingMenu';
import TastingNotes from './TastingNotes';
import { fetchProfile } from './actions';

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
    width: '100%'
    // backgroundColor: theme.palette.background.paper,
    // width: 500,
    // position: 'relative',
    // minHeight: 200
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500]
  }
});

class Tasting extends React.PureComponent {
  state = {
    value: 0,
    profileId: '',
    userInput: {
      profileId: '',
      label: {
        type: '',
        winery: '',
        vintage: null,
        style: ''
      },
      // [section]: {
      //   [category]: [
      //     tag, tag, tag, { subcategory: [ tag, tag, tag ]}
      //   ]
      // },
      notes: {
        final: ''
      }
    }
  };

  // componentDidMount() {
  //   const { profiles } = this.props;
  //   const { profileId } = this.state;
    
  //   if (profiles && profileId) {
  //     const newState = {}
  //     profiles[profileId].sections.forEach(section => {
  //       newState[section.section] = [];
  //     })

  //     this.setState = {
  //       userInput: 
  //     }
  //   }
  // };

  handleUserInput = (parent, name, value) => {
    this.setState(prevState => ({
      userInput: {
        ...prevState.userInput,
        [parent]: {
          ...prevState.userInput[parent],
          [name]: value
        }
      }
    }));
  };

  handleUserInputTag = (section, category, subcategory, tag) => {
    this.setState(prevState => {
      let prevSection = {};
      let prevCategory = {};
      let prevSubcategory = {};

      // check if objects exist in state yet
      // only add sections/categories if user has selected tags
      if (prevState.userInput[section]) {
        prevSection = prevState.userInput[section];
        
        if (prevState.userInput[section][category]) {
          prevCategory = prevState.userInput[section][category];
        }

        if (subcategory && prevState.userInput[section][category][subcategory]) {
          prevSubcategory = prevState.userInput[section][category][subcategory];
        }
      }

      if (subcategory) return {
        userInput: {
          ...prevState.userInput,
          [section]: {
            ...prevSection,
            [category]: [
              ...prevCategory,
              {
                [subcategory]: [
                  ...prevSubcategory,
                  tag
                ]
              }
            ]
          }
        }
      };

      return {
        userInput: {
          ...prevState.userInput,
          [section]: {
            ...prevSection,
            [category]: [
              ...prevCategory,
              tag
            ]
          }
        }
      };

    });
  };

  // TODO: add, subcategories, remove tag

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
    this.setState({ profileId });
  };

  saveTasting = () => {
    console.log('saveTasting');
  };

  render() {
    const { classes, theme, profiles } = this.props;
    const { value, profileId, userInput } = this.state;

    if (profileId === '' || !profiles)
      return <TastingMenu handleClick={this.handleClick} />;

    const lastIndex = profiles[profileId].sections.length;
    
    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen,
    };
    const fabs = [
      {
        color: 'primary',
        className: classes.fab,
        icon: <RightIcon />,
      },
      {
        color: 'secondary',
        className: classes.fab,
        icon: <EditIcon />,
      },
      {
        color: 'inherit',
        className: classNames(classes.fab, classes.fabGreen),
        icon: <UpIcon />,
      },
    ];


    return <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs value={this.state.value} onChange={this.handleTabChange} indicatorColor="primary" textColor="primary" scrollable scrollButtons="auto">
          <Tab label="Label" />
          {profiles[profileId].sections.map((section, index) => (
            <Tab key={index} label={section.section} />
          ))}
          <Tab label="Notes" />
        </Tabs>
      </AppBar>
      <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={this.state.value} onChangeIndex={this.handleChangeIndex}>
        {/* LABEL TAB */}
        <TabContainer dir={theme.direction}>
          <TastingWineLabel
            show={value === 0}
            userInput={userInput.label}
            handleUserInput={this.handleUserInput}
          />
        </TabContainer>
        {/* SECTION TABS */}
        {profiles[profileId].sections.map((section, index) => (
          <TabContainer key={index} dir={theme.direction}>
            <TastingSection
              show={value === index + 1}
              section={section}
              handleUserInput={this.handleUserInput}
              handleUserInputTag={this.handleUserInputTag}
            />
          </TabContainer>
        ))}
        {/* NOTES TAB */}
        <TabContainer dir={theme.direction}>
          <TastingNotes
            show={value === lastIndex + 1}
            notes={userInput.notes.final}
            name="final"
            handleUserInput={this.handleUserInput}
          />
        </TabContainer>
      </SwipeableViews>

      {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={this.state.value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${this.state.value === index ? transitionDuration.exit : 0}ms`,
          }}
          unmountOnExit
        >
          <Button variant="fab" className={fab.className} color={fab.color}>
            {fab.icon}
          </Button>
        </Zoom>
      ))}
    </div>;
  }
}

Tasting.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const styledTasting = withStyles(styles, { withTheme: true })(Tasting);

export default connect(
  ({ profiles }) => ({ profiles }),
  { fetchProfile }
)(styledTasting);