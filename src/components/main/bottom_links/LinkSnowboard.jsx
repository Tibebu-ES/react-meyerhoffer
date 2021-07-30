import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { home_files } from "../../data/index";

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
  content_root: {
    marginTop: "50px",
  },
  images: {
    width: "100%",
    height: "100%",
  },
}));

const LinkSnowboard = () => {
  const classes = useStyle();
  return (
    <Grid container spacing={6} className={classes.root}>
      <Grid item xs={12} md={9}>
        <img
          src={home_files[76]}
          className={classes.images}
          alt="meyerhoffer.com"
        />
      </Grid>

      <Grid item xs={12} md={9}>
        <img
          src={home_files[77]}
          className={classes.images}
          alt="meyerhoffer.com"
        />
      </Grid>

      <Grid item xs={6}>
        <img
          src={home_files[78]}
          className={classes.images}
          alt="meyerhoffer.com"
        />
      </Grid>

      <Grid item xs={12} md={9}>
        <img
          src={home_files[79]}
          className={classes.images}
          alt="meyerhoffer.com"
        />
      </Grid>

      <Grid item xs={12} className={classes.content_root}>
        <Typography paragraph className={classes.content_font}>
          PROJECT: UP CYCLED SNOWBOARD
        </Typography>

        <Typography paragraph className={classes.content_font}>
          YEAR: 2001
        </Typography>

        <Typography paragraph className={classes.content_font}>
          INFORMATION: Ongoing experiemnt with re use of old snowboard to make
          new sort of surfy snowboard.
        </Typography>

        <Typography paragraph className={classes.content_font}>
          CREDITS:
          <br />
          Photography: Baldface Lodge & Meyerhoffer
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LinkSnowboard;
