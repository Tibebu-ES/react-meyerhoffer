import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import ReactPlayer from "react-player";
import { home_files } from "../../data/index";

const useStyle = makeStyles(() => ({
  content_font: {
    fontFamily: "Century",
  },
  img_tag: {
    margin: "auto",
  },
}));

const LinkPorsche = () => {
  const classes = useStyle();
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item xs={12}>
        <img src={home_files[71]} width="100%" alt="meyerhoffer.com" />
      </Grid>
      <Grid item xs={12}>
        <Grid container direction="row" spacing={2} justifyContent="center">
          <Grid item xs={12} md={4}>
            <img src={home_files[72]} width="100%" alt="meyerhoffer.com" />
          </Grid>
          <Grid item xs={12} md={4} className={classes.img_tag}>
            <img src={home_files[73]} width="100%" alt="meyerhoffer.com" />
          </Grid>
          <Grid item xs={12} md={4} className={classes.img_tag}>
            <img src={home_files[74]} width="100%" alt="meyerhoffer.com" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ReactPlayer
          playing={true}
          loop={true}
          url={home_files[75]}
          width="100%"
          height="100%"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography paragraph className={classes.content_font}>
          PROJECT: PORSCHE
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography paragraph className={classes.content_font}>
          YEAR: A long time ago and always.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography paragraph className={classes.content_font}>
          INFORMATION: N/A
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography paragraph className={classes.content_font}>
          CREDITS:
        </Typography>
        <Typography paragraph className={classes.content_font}>
          Photography: Christoffer Dalkarls & Patrick Trefz
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LinkPorsche;
