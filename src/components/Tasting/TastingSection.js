import React from 'react';
import PropTypes from 'prop-types';
// import update from 'immutability-helper';
import { withStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
import FloatingActionButton from './FloatingActionButton';
import Tag from './Tag';

const styles = theme => ({
  root: {
    display: 'flex',
    // justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
});

class TastingSection extends React.PureComponent {

  // handleTag = (category, tag) => {
  //   let prevState = [];

  //   if (this.state[category]) prevState = this.state[category];

  //   const newState = {
  //     [category]: [
  //       ...prevState,
  //       tag
  //     ]
  //   };

  //   this.setState(newState);
  // }

  handleTag = (category, tag) => {
    const { handleUserInputTag, section } = this.props;
    handleUserInputTag(section.section, category, null, tag);
  };

  handleSubTag = (category, subcategory, tag) => {
    const { handleUserInputTag, section } = this.props;
    handleUserInputTag(section.section, category, subcategory, tag);
  };

  render() {
    const { classes, show, section } = this.props;

    if (!show) return null;

    return <div style={{ flexGrow: 1 }}>
        {section.categories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <Typography
              className={classes.heading}
              gutterBottom
              align="left"
            >
              {category.category}
            </Typography>

             <div className={classes.root}>

              {category.tags.map((tag, tagIndex) => {
                if (typeof tag === 'string') {
                  return (
                    <Tag
                      key={tagIndex}
                      label={tag}
                      handleClick={() =>
                        this.handleTag(category.category, tag)
                      }
                    />
                  );
                } else {
                  return (
                    <div>
                      <Typography
                        className={classes.secondaryHeading}
                        gutterBottom
                        align="left"
                      >
                        {tag.subcategory}
                      </Typography>
                      {tag.tags.map((subTag, subTagIndex) => {
                        return (
                          <Tag
                            key={subTagIndex}
                            label={subTag}
                            handleClick={() =>
                              this.handleSubTag(category.category, tag.subcategory, subTag)
                            }
                          />
                        );
                      })}
                    </div>
                  );
                }
              })}

            </div>
          </div>
        ))}
        {/* <TastingNotes
          show={true}
          notes={userInput.notes}
          name={section.name}
          handleUserInput={this.handleUserInput} /> */}
      </div>;
  }
}
    
    // return <Typography component="div" style={{ padding: 8 * 3 }}>
    //     <div style={{ flexGrow: 1 }}>
    //       {/* <Grid container spacing={24}> */}
    //         {section.categories.map((category, categoryIndex) => (
    //           <Grid item xs={12} key={categoryIndex}>
    //             <Grid container spacing={24} alignItems="center">
    //               <Grid item xs={3}>
    //                 <Typography className={classes.heading} align="right">
    //                   {category.category}
    //                 </Typography>
    //               </Grid>
    //               <Grid item>
    //                 {category.tags.map((tag, tagIndex) => {
    //                   console.log('tag', tag);
    //                   if (typeof tag === 'string')
    //                     return <Tag key={tagIndex} label={tag} handleClick={() => this.handleTag(category.category, tag)} />;
    //                   else return <div>
    //                     <Typography className={classes.heading} align="right">
    //                       {tag.subcategory}
    //                     </Typography>
    //                     {tag.tags.map((subTag, subTagIndex) => {
    //                       return <Tag key={subTagIndex} label={subTag} handleClick={() => this.handleTag(tag.subcategory, subTag)} />; 
    //                     })}
    //                   </div>;
    //                 })}
    //               </Grid>
    //             </Grid>
    //           </Grid>
    //         ))}
    //       </Grid>
    //     </div>
    //   </Typography>;

TastingSection.propTypes = {
  classes: PropTypes.object.isRequired,
  // name: PropTypes.string.isRequired,
  // expanded: PropTypes.string,
  // handleChange: PropTypes.func.isRequired,
  section: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  // handleTag: PropTypes.func.isRequired
  handleClick: PropTypes.func.isRequired
};

export default withStyles(styles)(TastingSection);