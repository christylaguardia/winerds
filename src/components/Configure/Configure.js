import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
// import Typography from '@material-ui/core/Typography';
import { layout } from "../../muiTheme";

const styles = theme => ({
  layout,
  heroButtons: {
    marginTop: theme.spacing(0) * 4
  }
});

const Configure = ({ classes }) => (
  <div className={classes.heroButtons}>
    <Grid container spacing={16} justify="center">
      <Grid item>
        <Button
          component={Link}
          to="/configure/new"
          variant="contained"
          color="primary"
        >
          Main call to action
        </Button>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          to="/configure/edit"
          variant="outlined"
          color="primary"
        >
          Secondary action
        </Button>
      </Grid>
    </Grid>
  </div>

  // <div className={classes.layout}>
  //   <Link to ="/configure/new">
  //     <Typography>Create new Tasting Profile</Typography>
  //   </Link>
  //   <Link to ="/configure/edit">
  //     <Typography>Edit existing Tasting Profile</Typography>
  //   </Link>
  // </div>
);

Configure.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Configure);

// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Switch from '@material-ui/core/Switch';

// const styles = theme => ({
//   root: {
//     width: '100%'
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular
//   }
// });

// function Configure(props) {
//   const { classes } = props;

//   return (
//     <div className={classes.root}>
//       <ExpansionPanel>
//         <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//           <Typography className={classes.heading}>Sight</Typography>
//         </ExpansionPanelSummary>
//         <ExpansionPanelDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </ExpansionPanelDetails>
//       </ExpansionPanel>
//       <ExpansionPanel>
//         <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//           <Typography className={classes.heading}>Nose</Typography>
//         </ExpansionPanelSummary>
//         <ExpansionPanelDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </ExpansionPanelDetails>
//       </ExpansionPanel>
//       <ExpansionPanel disabled>
//         <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//           <Typography className={classes.heading}>
//             Disabled Expansion Panel
//           </Typography>
//         </ExpansionPanelSummary>
//       </ExpansionPanel>
//     </div>
//   );
// }
