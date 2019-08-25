import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

import Layout from "../components/Layout";
import webDev from "../img/webDev.svg";
import AdapterLink from "../components/AdapaterLink";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 40,
    marginBottom: 20,
    backgroundColor: theme.palette.background
  },
  img: {
    maxWidth: 400,
    marginBottom: 40
  }
}));

export default function() {
  const classes = useStyles();

  return (
    <Layout>
      <Container maxWidth="md">
        <Paper className={classes.paper}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Hi, I'm a Starter App
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don&apos;t simply skip over it entirely.
          </Typography>
          <Grid container justify="center">
            <img className={classes.img} src={webDev} alt="web-dev" />
          </Grid>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                component={AdapterLink}
                to="/blog"
              >
                Blog Posts
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                component={AdapterLink}
                to="/contact"
              >
                Contact Me
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Layout>
  );
}
