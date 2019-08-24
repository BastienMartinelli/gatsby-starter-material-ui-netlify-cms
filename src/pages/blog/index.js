import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/styles/makeStyles";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

const useStyles = makeStyles({
  title: {
    marginTop: 120,
    marginBottom: 40
  }
});

export default function BlogIndexPage() {
  const classes = useStyles();

  return (
    <Layout>
      <Container>
        <Typography className={classes.title} component="h1" variant="h3">
          Latest Stories
        </Typography>
        <BlogRoll />
      </Container>
    </Layout>
  );
}
