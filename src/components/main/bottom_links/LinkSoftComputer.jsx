import React from "react";
import { Grid, Chip, Typography, makeStyles } from "@material-ui/core";
import { home_files } from "../../data";

const useStyles = makeStyles(() => ({
  par_font: {
    fontFamily: "Century",
  },
}));

const LinkSoftComputer = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <Grid container direction="row">
          <Grid xs={6} md={4}>
            <img
              src={home_files[39]}
              style={{ width: "95%", height: "60%" }}
              alt="=meyerhoffer.com/"
            />
          </Grid>
          <Grid xs={6} md={4}>
            <img
              src={home_files[40]}
              style={{ width: "95%", height: "60%" }}
              alt="=meyerhoffer.com/"
            />
          </Grid>
          <Grid xs={6} md={4}>
            <img
              src={home_files[41]}
              style={{ width: "95%", height: "60%" }}
              alt="=meyerhoffer.com/"
            />
          </Grid>
          <Grid xs={6} md={4}>
            <img
              src={home_files[42]}
              style={{ width: "95%", height: "60%" }}
              alt="=meyerhoffer.com/"
            />
          </Grid>
          <Grid xs={6} md={4}>
            <img
              src={home_files[43]}
              style={{ width: "95%", height: "60%" }}
              alt="=meyerhoffer.com/"
            />
          </Grid>
          <Grid xs={6} md={4}>
            <img
              src={home_files[44]}
              style={{ width: "95%", height: "60%" }}
              alt="=meyerhoffer.com/"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container direction="column" spacing={3}>
          <Grid item xs={12}>
            <Typography className={classes.par_font}>
              PROJECT: CHUMBY SOFT COMPUTER <Chip label="YEAR: 2006" />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.par_font}>YEAR: 2013</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography paragraph className={classes.par_font}>
              INFORMATION: Partnering with start up Chumby, we created the
              worlds first soft computer. Designed to be customized and coded by
              the user, Chumby was a small device that ran open scource
              software. Actually it was running apps several years before Apple
              did. Clearly the projects was ahead of it's time. In many
              respects, Chumby was a pioneering technology device by challenging
              every convention with it's app based technology and disruptive mix
              of soft and hard materials often used i wearable technology today.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.par_font}>CREDITS:</Typography>
            <Typography className={classes.par_font}>
              Photography: Christoffer Dalkarls
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LinkSoftComputer;
