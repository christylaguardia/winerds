import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
// import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
// import Chip from '@material-ui/core/Chip';
// import { layout } from "../../muiTheme";

import { getTastings } from "../Tasting/actions";
import NotFound from "./NotFound";

const styles = theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: theme.spacing(2),
    marginBottom: "64px" // offset the bottom nav
  }
});

// const styles = {
//   layout
// };

class Data extends React.PureComponent {
  componentDidMount() {
    const { tastings, getTastings } = this.props;
    if (!tastings) getTastings();
  }

  render() {
    const { classes, tastings } = this.props;

    if (!tastings) return <NotFound />;

    return (
      <Container maxWidth="sm">
        {/* <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            Data is not available to view at this time.
          </Typography>
          <Typography component="p">
            Check back later to view your past tastings and insights.
          </Typography>
        </Paper> */}

      <List component="nav" aria-label="secondary mailbox folders">
        {Object.keys(tastings).map(key => (
          <ListItem button component="a" href="" >
            <ListItemText primary={tastings[key].label} />
          </ListItem>
        ))}
      </List>


      </Container>
    );
  }
}
        // <Grid container spacing={16} justify="center">
        //   <Grid item>
        //     <Typography variant="title" align="center" gutterBottom>
        //       Tasting History
        //     </Typography>

        //     {Object.keys(tastings).map(key => (
        //       <Grid item>
        //         <Typography variant="subheading" align="center" gutterBottom>
        //           {`${tastings[key].winery} - ${tastings[key].style}`}
        //         </Typography>

        //         {/* {Object.keys(tastings[key].descriptors).map(dKey => (
        //       <div>
        //         <Typography variant="Subheading" align="center" gutterBottom>
        //           {dKey}
        //         </Typography>
        //         {tastings[key].descriptors[dKey].map(tag => <Chip label={tag} />)}
        //       </div>
        //     ))} */}
        //       </Grid>
        //     ))}
        //   </Grid>
        // </Grid>

Data.propTypes = {
  classes: PropTypes.object.isRequired,
  tastings: PropTypes.object
};

export default connect(
  ({ tastings }) => ({ tastings }),
  { getTastings }
)(withStyles(styles, { withTheme: true })(Data));
