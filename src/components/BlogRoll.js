import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import BlogItem from "./BlogItem";

const useStyles = makeStyles(theme => ({}));

function BlogRoll(props) {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      {posts &&
        posts.map(({ node: post }) => (
          <Grid item key={post.id} xs={12} md={12}>
            <BlogItem
              title={post.frontmatter.title}
              to={post.fields.slug}
              description={post.description}
              date={post.frontmatter.date}
            />
          </Grid>
        ))}
    </Grid>
  );
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
