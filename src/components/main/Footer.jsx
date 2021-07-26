import React from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Link,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  app_bar: {
    position: "static",
    backgroundColor: "#000000",
    color: "#FFFFFF",
  },
  toolbar: {
    justifyContent: "flex-end",
    minHeight: 128,
  },
  toolbarItem: {
    marginRight: "1rem",
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.app_bar}>
      <Toolbar className={classes.toolbar}>
        <Typography
          className={classes.toolbarItem}
          variant="body2"
          color="inherit"
        >
          <Link
            className={classes.toolbarItem}
            href="http://instagram.com/meyerhoffer"
            target="_blank"
            color="inherit"
          >
            Follow
          </Link>
        </Typography>
        <Typography
          className={classes.toolbarItem}
          variant="body2"
          color="inherit"
        >
          <Link
            className={classes.toolbarItem}
            href="mailto:info@meyerhoffer.com"
            color="inherit"
          >
            Contact
          </Link>
        </Typography>
        <Typography variant="body2" color="inherit">
          © Meyerhoffer Inc.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
