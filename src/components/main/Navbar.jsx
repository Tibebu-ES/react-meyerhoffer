import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Grid,
  Typography,
  AppBar,
  Toolbar,
  makeStyles,
  IconButton,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import Shop from "./Shop";

const useStyles = makeStyles((theme) => ({
  app_bar: {
    position: "sticky",
    boxShadow: "none",
    backgroundColor: "#fcfcff",
  },

  nav_link: {
    fontFamily: "Century",
    color: "#000000",
    textDecoration: "none",
  },
  modal: {
    display: "block",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "85%",
    maxHeight: "100%",
    overflow: "scroll",
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <AppBar className={classes.app_bar}>
        <Toolbar variant="dense">
          <Grid container spacing={3} alignItems="center" justify="center">
            <Grid item>
              <Typography variant="h6">
                <NavLink
                  exact
                  to="/"
                  className={classes.nav_link}
                  activeStyle={{ fontWeight: "bold" }}
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
                  activeStyle={{ fontWeight: "bold" }}
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
                  activeStyle={{ fontWeight: "bold" }}
                >
                  OBJECTS
                </NavLink>
              </Typography>
            </Grid>
          </Grid>
          <IconButton aria-label="surfer shop" onClick={handleOpenModal}>
            <ShoppingCart />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Shop />
        </Fade>
      </Modal>
    </>
  );
};

export default Navbar;
