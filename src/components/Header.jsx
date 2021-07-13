import React from "react";
import { Grid, Typography } from "@material-ui/core";
import ReactPlayer from "react-player";
import sign_video from "../assets/SIGNATURE.mp4";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header_root: {
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  header_child_player: {
    padding: "5px",
  },
  header_child_typo: {
    paddingTop: "20px",
    marginLeft: "20px",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.header_root}>
      <Grid item xs={12} md={3} className={classes.header_child_player}>
        <ReactPlayer
          playing={true}
          loop={true}
          url={sign_video}
          width="100%"
          height="100%"
        />
      </Grid>
      <Grid xs={12} item md={8} className={classes.header_child_typo}>
        <Typography variant="body1" align="justify">
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
