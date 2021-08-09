import React from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { home_files } from "../../data/index";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: "150px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "40px",
    },
  },
  content_font: {
    fontFamily: "Century",
    fontSize: "13px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "11px",
    },
  },
}));

const LinkSkigoggole = () => {
  const classes = useStyle();
  return (
    <Container>
      <Grid container direction="column" spacing={4} className={classes.root}>
        <Grid item xs={12}>
          <Typography className={classes.content_font}>SKI GOGGLES</Typography>
          <Typography className={classes.content_font}>1997-2008</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="column" spacing={4}>
            <Grid item xs={12} md={8}>
              <img src={home_files[68]} width="100%" alt="meyerhoffer.com" />
              <Typography className={classes.content_font}>
                Smith V3, The first wrap around goggle
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <img src={home_files[69]} width="100%" alt="meyerhoffer.com" />
              <Typography className={classes.content_font}>
                Smith Warp, The first Outrigger goggle
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <img src={home_files[70]} width="100%" alt="meyerhoffer.com" />
              <Typography className={classes.content_font}>
                Scott's first spherical lens googgle
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="column">
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
            <Grid item xs={12} md={8}>
              <Typography paragraph className={classes.content_font}>
                INFORMATION: I created over 20 goggles for Smith and Scott where
                many where best sellers and a few - game changers. It started
                with the V3 for Smith, the first wrap around goggle in the
                market. At that time all goggles where looking the same.
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography paragraph className={classes.content_font}>
                CREDITS:
              </Typography>
              <Typography paragraph className={classes.content_font}>
                Photography: Christoffer Dalkarls & Smith Sport & Scott Sports
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LinkSkigoggole;
