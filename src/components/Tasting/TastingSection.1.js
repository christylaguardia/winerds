import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Tag from "./Tag";
import { layout } from "../../muiTheme";

const styles = theme => ({
  layout,
  root: {
    display: "flex",
    flexWrap: "wrap",
    // paddingTop: theme.spacing(0) / 2,
    paddingRight: theme.spacing(0) / 2,
    paddingLeft: theme.spacing(0) / 2
    // paddingBottom: theme.spacing(0) * 2,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
});

class TastingSection extends React.PureComponent {
  handleTag = (category, tag) => {
    const { handleUserInputTag, section } = this.props;
    handleUserInputTag(section.section, category, tag);
  };

  // TODO:
  // handleSubTag = (category, subcategory, tag) => {
  //   const { handleUserInputTag, section } = this.props;
  //   handleUserInputTag(section.section, category, subcategory, tag);
  // };

  render() {
    const { classes, show, section, handleChangeIndex } = this.props;

    if (!show) return null;

    return (
      <div className={classes.layout}>
        {section.categories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <Typography className={classes.heading} gutterBottom align="left">
              {category.category}
            </Typography>
            <div className={classes.root}>
              {/* <Grid container spacing={16}>
            <Grid item> */}

              {category.tags.map((tag, tagIndex) => {
                if (typeof tag === "string") {
                  return (
                    <Tag
                      key={tagIndex}
                      label={tag}
                      handleClick={() => this.handleTag(category.category, tag)}
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
                              this.handleSubTag(
                                category.category,
                                tag.subcategory,
                                subTag
                              )
                            }
                          />
                        );
                      })}
                    </div>
                  );
                }
              })}

              {/* </Grid>
            </Grid> */}
            </div>
          </div>
        ))}
        {/* <TastingNotes
        show={true}
        notes={userInput.notes}
        name={section.name}
        handleUserInput={this.handleUserInput} /> */}
      </div>
    );
  }
}

TastingSection.propTypes = {
  classes: PropTypes.object.isRequired,
  section: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  handleClick: PropTypes.func.isRequired
};

export default withStyles(styles)(TastingSection);
