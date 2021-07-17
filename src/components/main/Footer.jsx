import React from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Link,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  alignItemsAndJustifyContent: {
    justifyContent: "flex-end",
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
    <AppBar position="static" color="primary">
      <Toolbar className={classes.alignItemsAndJustifyContent}>
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
