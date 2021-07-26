import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import sign_video from "../../assets/videos/SIGNATURE.gif";

const useStyles = makeStyles((theme) => ({
  header_root: {},
  header_child_player: {
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      order: 2,
    },
  },
  header_child_typo: {
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      order: 1,
    },
  },
  header_child_typo_parag: {
    fontSize: "14px",
    fontFamily: "Century",
    textAlign: "justify",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.header_root}>
      <Grid item xs={12} md={4} className={classes.header_child_player}>
        <img src={sign_video} width="100%" alt="Logo"></img>
      </Grid>
      <Grid item xs={12} md={8} className={classes.header_child_typo}>
        <Typography className={classes.header_child_typo_parag}>
          Born in Sweden in 1965, Thomas Meyerhoffer is a creator and visionary.
          After earning a degree in Industrial Design from Art Center, he
          started his journey with an internship at Porsche, only to Go West to
          California for IDEO. It was there Meyerhoffer was introduced to the
          idea of giving objects meaning through its form, working with Naoto
          Fukasawa. He further formed these notions at Apple working alongside
          Sir Jony Ive on projects like the eMate and iMac. That taught him to
          combine the fields of art, craft and technology. These theories,
          merged with contemporary culture, make up Meyerhoffer’s design
          practice today.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
