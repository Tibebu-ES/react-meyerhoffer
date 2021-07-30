import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import { home_files } from "../../data";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10vw 6.25vw  0 6.25vw;",
  },
  par_font: {
    fontFamily: "Century",
    fontSize: "13px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "11px",
    },
  },
}));

const LinkSoftComputer = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={6} className={classes.root}>
      <Grid item xs={12} md={9}>
        <img src={home_files[43]} width="100%" alt="=meyerhoffer.com" />
      </Grid>
      <Grid item xs={12} md={9}>
        <img src={home_files[42]} width="100%" alt="=meyerhoffer.com" />
      </Grid>
      <Grid item xs={12} md={9}>
        <img src={home_files[40]} width="100%" alt="=meyerhoffer.com" />
      </Grid>
      <Grid item xs={6} md={4}>
        <img src={home_files[39]} width="100%" alt="=meyerhoffer.com" />
      </Grid>
      <Grid item xs={12} md={9}>
        <img src={home_files[41]} width="100%" alt="=meyerhoffer.com" />
      </Grid>
      <Grid item xs={5}>
        <img src={home_files[44]} width="100%" alt="meyerhoffer.com/" />
      </Grid>

      <Grid item xs={12}>
        <Typography paragraph className={classes.par_font}>
          PROJECT: CHUMBY SOFT COMPUTER <br />
          YEAR: 2006
        </Typography>

        <Typography paragraph align="justify" className={classes.par_font}>
          INFORMATION: Partnering with start up Chumby, we created the worlds
          first soft computer. Designed to be customized and coded by the user,
          Chumby was a small device that ran open scource software. Actually it
          was running apps several years before Apple did. Clearly the projects
          was ahead of it's time. In many respects, Chumby was a pioneering
          technology device by challenging every convention with it's app based
          technology and disruptive mix of soft and hard materials often used i
          wearable technology today.
        </Typography>
        <Typography className={classes.par_font}>
          CREDITS: <br />
          Photography: Christoffer Dalkarls
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LinkSoftComputer;
