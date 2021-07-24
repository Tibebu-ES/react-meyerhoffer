import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { home_files } from "../../data/index";

const useStyle = makeStyles(() => ({
  content_font: {
    fontFamily: "Century",
  },
}));

const LinkSnowboard = () => {
  const classes = useStyle();
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12}>
        <img
          src={home_files[76]}
          width="100%"
          height="100%"
          alt="meyerhoffer.com"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <img src={home_files[77]} width="100%" alt="meyerhoffer.com" />
      </Grid>
      <Grid item xs={12} md={4}>
        <img src={home_files[78]} width="100%" alt="meyerhoffer.com" />
      </Grid>
      <Grid item xs={12} md={4}>
        <img src={home_files[79]} width="100%" alt="meyerhoffer.com" />
      </Grid>
      <Grid item xs={12}>
        <Typography paragraph className={classes.content_font}>
          PROJECT: UP CYCLED SNOWBOARD
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography paragraph className={classes.content_font}>
          YEAR: 2001
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography paragraph className={classes.content_font}>
          INFORMATION: Ongoing experiemnt with re use of old snowboard to make
          new sort of surfy snowboard.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography paragraph className={classes.content_font}>
          CREDITS:
        </Typography>
        <Typography paragraph className={classes.content_font}>
          Photography: Baldface Lodge & Meyerhoffer
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LinkSnowboard;
