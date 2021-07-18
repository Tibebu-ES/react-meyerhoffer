import React from "react";
import { NavLink } from "react-router-dom";
import {
  Grid,
  Typography,
  AppBar,
  Toolbar,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  nav_link: {
    fontFamily: "Century",
    color: "#fffefe",
    textDecoration: "none",
    color: "#fffefe",
    textDecoration: "none",
  },
}));

const Navbar = (props) => {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar variant="dense">
        <Grid container spacing={3} alignItems="center" justify="center">
          <Grid item>
            <Typography variant="h6">
              <NavLink
                exact
                to="/"
                className={classes.nav_link}
                activeStyle={{ color: "aqua" }}
              >
                HOME
              </NavLink>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">
              <NavLink
                exact
                to="/about"
                className={classes.nav_link}
                activeStyle={{ color: "aqua" }}
              >
                ABOUT
              </NavLink>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">
              <NavLink
                exact
                to="/archive"
                className={classes.nav_link}
                activeStyle={{ color: "aqua" }}
              >
                OBJECTS
              </NavLink>
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
