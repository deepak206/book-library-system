import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { object } from "prop-types";

/**
 * Card component
 * @details - this is a type of object which keys - name, description, publish, coount, author
 */
const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Publish: {props.details.publish}, Count: {props.details.count}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.details.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.details.author}
        </Typography>
        <Typography variant="body2" component="p">
          {props.details.description}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

SimpleCard.propTypes = {
  details: object
};
