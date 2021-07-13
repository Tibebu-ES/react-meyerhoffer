import React, { useState } from "react";
import { AppBar, Toolbar, makeStyles, Button } from "@material-ui/core";
import { useHistory } from "react-router";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  alignItemsAndJustifyContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  toolbarItem: {
    marginRight: "2rem",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  selectedToolbarItem: {
    background: "#FFFFFF",
    color: "#3f51b5",
    "&:hover": {
      background: "#FFFFFF",
      color: "#3f51b5",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  const [selectedPage, setSelectedPage] = useState("home");
  const toolbarItemClicked = (event, page) => {
    event.preventDefault();
    if (page !== selectedPage) {
      const item = document.querySelector("#" + page);
      const previousItem = document.querySelector("#" + selectedPage);
      item.classList.add(classes.selectedToolbarItem);
      previousItem.classList.remove(classes.selectedToolbarItem);
      //set current page
      setSelectedPage(page);
    }
    history.push("/" + page);
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <AppBar position="sticky">
        <Toolbar className={classes.alignItemsAndJustifyContent}>
          <Button
            className={classes.selectedToolbarItem + " " + classes.toolbarItem}
            color="inherit"
            href="/"
            onClick={(e) => toolbarItemClicked(e, "home")}
            id="home"
          >
            Home
          </Button>
          <Button
            className={classes.toolbarItem}
            href="/about"
            color="inherit"
            onClick={(e) => toolbarItemClicked(e, "about")}
            id="about"
          >
            About
          </Button>
          <Button
            className={classes.toolbarItem}
            href="/archive"
            color="inherit"
            onClick={(e) => toolbarItemClicked(e, "archive")}
            id="archive"
          >
            OBJECTS
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
