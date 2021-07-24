import React from "react";
import { Grid, makeStyles, Typography, Chip } from "@material-ui/core";
import { home_files } from "../../data/index";

const useStyle = makeStyles(() => ({
  content_font: {
    fontFamily: "Century",
  },
}));

const LinkSkigoggole = () => {
  const classes = useStyle();
  return (
    <Grid container direction="column" spacing={2} alignItems="center">
      <Grid item xs={12}>
        <Chip label="SKI GOGGLES 1997-2008" color="secondary" />
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.content_font}>
          Smith V3, The first wrap around goggle
        </Typography>
        <img src={home_files[68]} width="100%" alt="meyerhoffer.com" />
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.content_font}>
          Smith Warp, The first Outrigger goggle
        </Typography>
        <img src={home_files[69]} width="100%" alt="meyerhoffer.com" />
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.content_font}>
          Scott's first spherical lens googgle
        </Typography>
        <img src={home_files[70]} width="100%" alt="meyerhoffer.com" />
      </Grid>
      <Grid item xs={12}>
        <Typography paragraph className={classes.content_font}>
          PROJECT: SKI GOGGLES
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography paragraph className={classes.content_font}>
          YEAR: 1997-2008
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography paragraph className={classes.content_font}>
          INFORMATION: I created over 20 goggles for Smith and Scott where many
          where best sellers and a few - game changers. It started with the V3
          for Smith, the first wrap around goggle in the market. At that time
          all goggles where looking the same.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography paragraph className={classes.content_font}>
          CREDITS:
        </Typography>
        <Typography paragraph className={classes.content_font}>
          Photography: Christoffer Dalkarls & Smith Sport & Scott Sports
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LinkSkigoggole;
