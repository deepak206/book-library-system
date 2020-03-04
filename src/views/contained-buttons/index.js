import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { func, string } from "prop-types";

/**
 * button component
 * @title use to display the title on the button
 * @onClick use to handel the click for user
 */
const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function ContainedButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={props.onClick}>
        {props.title}
      </Button>
    </div>
  );
}

ContainedButtons.propTypes = {
  title: string.isRequired,
  onClick: func
};

ContainedButtons.defaultProps = {
  title: "Submit"
};
