import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import ReactPlayer from "react-player";
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
  img_tag: {
    margin: "auto",
  },
  bio_section: {
    marginTop: "80px",
  },
}));

const LinkPorsche = () => {
  const classes = useStyle();
  return (
    <Grid container direction="column" spacing={6} className={classes.root}>
      <Grid item xs={12} md={9}>
        <img src={home_files[71]} width="100%" alt="meyerhoffer.com" />
      </Grid>
      <Grid item xs={6}>
        <img src={home_files[72]} width="100%" alt="meyerhoffer.com" />
      </Grid>
      <Grid item xs={6}>
        <img src={home_files[73]} width="100%" alt="meyerhoffer.com" />
      </Grid>
      <Grid item xs={4} md={4}>
        <img src={home_files[74]} width="100%" alt="meyerhoffer.com" />
      </Grid>
      <Grid item xs={12} md={9}>
        <ReactPlayer
          playing={true}
          loop={true}
          url={home_files[75]}
          width="100%"
          height="100%"
        />
      </Grid>

      <Grid item xs={12} className={classes.bio_section}>
        <Typography paragraph className={classes.content_font}>
          PROJECT: PORSCHE
        </Typography>
        <Typography paragraph className={classes.content_font}>
          YEAR: A long time ago and always.
        </Typography>
        <Typography paragraph className={classes.content_font}>
          INFORMATION: N/A
        </Typography>
        <Typography paragraph className={classes.content_font}>
          CREDITS:
          <br />
          Photography: Christoffer Dalkarls & Patrick Trefz
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LinkPorsche;
