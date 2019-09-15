import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

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

export default function CardLayout({ title, children, noCard }) {
  const classes = useStyles();

  return (
    <section className="section">
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={5}>
          {title && (
            <Typography className={classes.title} component="h1" variant="h2">
              {title}
            </Typography>
          )}
          {noCard ? (
            children
          ) : (
            <Paper className={classes.paper}>{children}</Paper>
          )}
        </Grid>
      </Grid>
    </section>
  );
}
