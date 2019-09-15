import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/styles/makeStyles";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import CardLayout from "../../components/CardLayout";

const useStyles = makeStyles({
  title: {
    color: "#fff",
    marginBottom: 24
  }
});

export default function BlogIndexPage() {
  const classes = useStyles();

  return (
    <Layout>
      <CardLayout title="Latest Stories" noCard>
        <BlogRoll />
      </CardLayout>
    </Layout>
  );
}
