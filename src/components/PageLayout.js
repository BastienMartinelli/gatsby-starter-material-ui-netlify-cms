import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 20,
    backgroundColor: theme.palette.background,
    margin: 8
  },
  title: {
    marginBottom: 48,
    color: "#fff"
  }
}));

export default function PageLayout({ title, children, noCard }) {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      {title && (
        <Typography className={classes.title} component="h1" variant="h2">
          {title}
        </Typography>
      )}
      {noCard ? children : <Paper className={classes.paper}>{children}</Paper>}
    </Container>
  );
}
