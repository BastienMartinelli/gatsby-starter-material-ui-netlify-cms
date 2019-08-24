import React from "react";
import { Link } from "gatsby";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import useSiteMetadata from "./SiteMetadata";

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
  }
}));

function Navbar() {
  const classes = useStyles();
  const { title } = useSiteMetadata();
  const scrollTrigger = useScrollTrigger();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography
            className={classes.title}
            variant="h6"
            color="inherit"
            noWrap
          >
            {title}
          </Typography>
          <Button color="inherit" component={AdapterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={AdapterLink} to="/contact">
            Contact
          </Button>
          <Button color="inherit" component={AdapterLink} to="/blog">
            Blog
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
