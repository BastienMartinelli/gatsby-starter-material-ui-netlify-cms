import React from "react";
import { Link } from "gatsby";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import useSiteMetadata from "./SiteMetadata";
import transitions from "@material-ui/core/styles/transitions";

const AdapterLink = React.forwardRef((props, ref) => (
  <Link ref={ref} {...props} />
));

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  transparent: {
    backgroundColor: "transparent",
    transition: "all 0.2s"
  },
  opaque: {
    backgroundColor: theme.palette.primary.main,
    transition: "all 0.5s"
  },
  rounded: {
    borderRadius: 25
  }
}));

function Navbar() {
  const classes = useStyles();
  const { title } = useSiteMetadata();
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true
  });

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={classes.bar}
        className={scrollTrigger ? classes.opaque : classes.transparent}
        elevation={scrollTrigger ? 4 : 0}
      >
        <Toolbar>
          <Typography
            className={classes.title}
            variant="h6"
            color="inherit"
            noWrap
          >
            {title}
          </Typography>
          <Button size="large" color="inherit" component={AdapterLink} to="/">
            Home
          </Button>
          <Button
            size="large"
            color="inherit"
            component={AdapterLink}
            to="/contact"
          >
            Contact
          </Button>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            className={classes.rounded}
            component={AdapterLink}
            to="/blog"
          >
            Blog
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
