import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { home_files } from "../../data";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: "10vw 6.25vw  0 6.25vw;",
  },
  content_font: {
    fontFamily: "Century",
    fontSize: "13px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "11px",
    },
  },
  image: {
    marginBottom: "80px",
    marginTop: "80px",
  },
}));

const LinkApple = () => {
  const classes = useStyle();
  return (
    <Grid container className={classes.root}>
      <Grid item direction="row">
        <Typography className={classes.content_font}>APPLE</Typography>
        <Typography className={classes.content_font}>eMate</Typography>
      </Grid>
      <Grid item xs={12} md={8} className={classes.image}>
        <img
          src={home_files[34]}
          width="100%"
          height="100%"
          alt="=meyerhoffer.com/"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.content_font} paragraph>
          PROJECT: APPLE
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.content_font} paragraph>
          YEAR: 1999
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.content_font} paragraph>
          INFORMATION: N/A
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.content_font}>CREDITS:</Typography>
      </Grid>
    </Grid>
  );
};

export default LinkApple;
