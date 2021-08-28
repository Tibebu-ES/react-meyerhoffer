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
    marginTop: "10rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
    },
  },
  toolbar: {
    justifyContent: "flex-end",
    [theme.breakpoints.up("md")]: {
      minHeight: 128,
    },
  },
  toolbarItem: {
    marginRight: "1rem",
    fontSize: "18px",
    color: "#ffffff",
    fontWeight: "normal",
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "10px",
      fontSize: "10px",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.app_bar}>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.toolbarItem}>
          <Link
            className={classes.toolbarItem}
            href="http://instagram.com/meyerhoffer"
            target="_blank"
          >
            Follow
          </Link>
        </Typography>
        <Typography className={classes.toolbarItem}>
          <Link
            className={classes.toolbarItem}
            href="mailto:info@meyerhoffer.com"
            color="inherit"
          >
            Contact
          </Link>
        </Typography>
        <Typography className={classes.toolbarItem}>
          © Meyerhoffer Inc.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
