import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Fab from "@material-ui/core/Fab";
import {
  Container,
  Typography,
  Divider,
  Paper,
  Slide,
  SvgIcon,
  useScrollTrigger,
  Zoom
} from "@material-ui/core";
import makeStyles from "@material-ui/styles/makeStyles";
import Chip from "@material-ui/core/Chip";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import AdapaterLink from "../components/AdapaterLink";

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
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  back: {
    marginTop: -60,
    marginLeft: -50
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
  const scrollTrigger = useScrollTrigger();

  const toTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Container maxWidth="md">
        {helmet || ""}
        <Slide in direction="up">
          <Paper className={classes.paper}>
            <Fab
              component={AdapaterLink}
              to="/blog"
              className={classes.back}
              color="secondary"
            >
              <SvgIcon fontSize="large">
                <path
                  fill="#fff"
                  d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
                />
              </SvgIcon>
            </Fab>
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
            {tags && tags.length && (
              <div style={{ marginTop: `4rem` }}>
                <Divider />
                <h4>Tags</h4>
                {tags.map(tag => (
                  <Chip
                    key={tag}
                    component={AdapaterLink}
                    onClick={() => {}}
                    to={`/tags/${kebabCase(tag)}/`}
                    label={tag}
                    className={classes.chip}
                  />
                ))}
              </div>
            )}
          </Paper>
        </Slide>
      </Container>
      <Zoom in={scrollTrigger}>
        <Fab
          color="primary"
          aria-label="to-top"
          className={classes.fab}
          onClick={toTop}
        >
          <SvgIcon>
            <path
              fill="#fff"
              d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"
            />
          </SvgIcon>
        </Fab>
      </Zoom>
    </>
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
