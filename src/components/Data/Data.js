import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: theme.spacing(2),
    marginBottom: '64px' // offset the bottom nav
  }
}));

const Data = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Data is not available to view at this time.
        </Typography>
        <Typography component="p">
          Check back later to view your past tastings and insights.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Data;
