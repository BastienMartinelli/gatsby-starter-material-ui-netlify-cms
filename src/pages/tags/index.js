import React from "react";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import PageLayout from "../../components/PageLayout";
import { Typography } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import makeStyles from "@material-ui/styles/makeStyles";

import AdapterLink from "../../components/AdapaterLink";

const useStyles = makeStyles({
  tag: {
    marginRight: 4
  },
  title: {
    marginBottom: 16
  }
});

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title }
    }
  }
}) => {
  const classes = useStyles();

  return (
    <Layout>
      <Helmet title={`Tags | ${title}`} />
      <PageLayout title="Tags">
        <Typography className={classes.title} component="h1" variant="h4">
          All Tags
        </Typography>
        {group.map(tag => (
          <Chip
            className={classes.tag}
            onClick={() => {}}
            key={tag.fieldValue}
            label={`${tag.fieldValue} (${tag.totalCount})`}
            component={AdapterLink}
            to={`/tags/${kebabCase(tag.fieldValue)}/`}
          />
        ))}
      </PageLayout>
    </Layout>
  );
};

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
