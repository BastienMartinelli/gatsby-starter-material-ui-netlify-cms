import React from "react";
import Layout from "../../components/Layout";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/styles/makeStyles";

import CardLayout from "../../components/CardLayout";

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: 24
  }
}));

function ThanksPage() {
  const classes = useStyles();

  return (
    <Layout>
      <Container maxWidth="md">
        <CardLayout>
          <Typography
            component="h1"
            variant="h3"
            align="center"
            className={classes.title}
          >
            Thank you!
          </Typography>
          <Typography color="textSecondary" variant="h5" align="center">
            Your message has been sent successfully :)
          </Typography>
        </CardLayout>
      </Container>
    </Layout>
  );
}

export default ThanksPage;
