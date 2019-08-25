import React from "react";
import Layout from "../components/Layout";
import { Container, Grid, Typography, Paper } from "@material-ui/core";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 20
  },
  title: {
    marginBottom: 24
  }
}));

const NotFoundPage = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Container maxWidth="sm">
        <Grid container justify="center">
          <Paper className={classes.paper}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              className={classes.title}
            >
              404
            </Typography>
            <Typography color="textSecondary" variant="h5" align="center">
              You just hit a route that doesn&#39;t exist... the sadness.
            </Typography>
          </Paper>
        </Grid>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
