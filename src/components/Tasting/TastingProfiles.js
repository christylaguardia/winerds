import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import tastingProfiles from "../../data/profiles.json";

const styles = theme => ({
  card: {
    minWidth: 275,
    margin: theme.spacing(2)
  },
});

class TastingProfiles extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        {Object.keys(tastingProfiles).map(profile => (
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {profile}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {tastingProfiles[profile].description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Begin Tasting</Button>
            </CardActions>
          </Card>
        ))}
      </>
    );
  }
}

TastingProfiles.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(TastingProfiles);
