import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import AdapterLink from "../components/AdapaterLink";

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

function BlogItem({ title, description, to, date }) {
  const classes = useStyles();

  return (
    <CardActionArea component={AdapterLink} to={to} href="#">
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            {/**<Hidden xsDown>
                      {post.frontmatter.featuredimage && (
                        <CardMedia
                          image={
                            post.frontmatter.featuredimage.childImageSharp.fluid
                              .src
                          }
                          title={`featured image thumbnail for post ${post.title}`}
                        />
                      )}
                    </Hidden>*/}
            <Typography component="h2" variant="h5" noWrap>
              {title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
        </div>
      </Card>
    </CardActionArea>
  );
}

export default BlogItem;
