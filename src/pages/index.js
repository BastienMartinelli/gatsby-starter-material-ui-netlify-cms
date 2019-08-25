import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

import Layout from "../components/Layout";
import { Paper } from "@material-ui/core";
import webDev from "../img/webDev.svg";

const useStyles = makeStyles(theme => ({
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
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
            <img className={classes.img} src={webDev} />
          </Grid>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                Blog Posts
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Contact Me
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Layout>
  );
}
