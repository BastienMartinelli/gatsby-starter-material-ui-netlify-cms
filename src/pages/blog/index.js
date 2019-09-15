import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/styles/makeStyles";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import PageLayout from "../../components/PageLayout";

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
      <PageLayout title="Latest Stories" noCard>
        <BlogRoll />
      </PageLayout>
    </Layout>
  );
}
