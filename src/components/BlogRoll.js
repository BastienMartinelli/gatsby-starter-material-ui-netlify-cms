import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Hidden from "@material-ui/core/Hidden";
import CardMedia from "@material-ui/core/CardMedia";

import AdapterLink from "../components/AdapaterLink";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    backgroundColor: theme.palette.background
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
}));

function getImage(imageInfo) {
  const { childImageSharp, image } = imageInfo;
  console.log(childImageSharp);
  if (!!image && !!image.childImageSharp) {
    return image.childImageSharp.fluid.src;
  }

  if (!!childImageSharp) {
    return childImageSharp.fluid.src;
  }

  return null;
}

function BlogRoll(props) {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;
  const classes = useStyles();
  console.log(
    posts[1].node.frontmatter.featuredimage.childImageSharp.fluid.src
  );

  return (
    <Grid container spacing={4} className={classes.cardGrid}>
      {posts &&
        posts.map(({ node: post }) => (
          <Grid item key={post.id} xs={12} md={6}>
            <CardActionArea
              component={AdapterLink}
              to={post.fields.slug}
              href="#"
            >
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Hidden xsDown>
                      {post.frontmatter.featuredimage && (
                        <CardMedia
                          image={
                            post.frontmatter.featuredimage.childImageSharp.fluid
                              .src
                          }
                          title={`featured image thumbnail for post ${post.title}`}
                        />
                      )}
                    </Hidden>
                    <Typography component="h2" variant="h5" noWrap>
                      {post.frontmatter.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {post.frontmatter.date}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      {post.description}
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      Continue reading...
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </CardActionArea>
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
