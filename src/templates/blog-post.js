import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Container, Typography, Divider, Paper } from "@material-ui/core";
import makeStyles from "@material-ui/styles/makeStyles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 20,
    marginBottom: 40,
    backgroundColor: theme.palette.background
  },
  title: {
    marginBottom: 24
  },
  subTitle: {
    marginBottom: 48
  },
  chip: {
    margin: theme.spacing(1)
  }
}));

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet
}) => {
  const classes = useStyles();
  const PostContent = contentComponent || Content;

  return (
    <Container>
      {helmet || ""}
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h3" className={classes.title}>
          {title}
        </Typography>
        <Typography
          variant="h5"
          color="textSecondary"
          className={classes.subTitle}
        >
          {description}
        </Typography>
        <Typography>
          <PostContent content={content} />
        </Typography>
        {tags && tags.length ? (
          <div style={{ marginTop: `4rem` }}>
            <Divider />
            <h4>Tags</h4>
            {tags.map(tag => (
              <Chip
                key={tag}
                onClick={() => {}}
                label={<Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>}
                className={classes.chip}
              />
            ))}
          </div>
        ) : null}
      </Paper>
    </Container>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
