import React from "react";
import { Grid, Typography, Chip } from "@material-ui/core";
import { home_files } from "../../data/index";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  par_font: {
    fontFamily: "Century",
  },
}));

const LinkBloomberg = () => {
  const classes = useStyle();

  return (
    <Grid container direction="column" spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h6" className={classes.par_font}>
          MIKE BLOOMBERG PRESIDENTAL CAMPAIGN{" "}
          <Chip label="2015" className={classes.par_font} />
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={12} md={4}>
            <img
              src={home_files[16]}
              style={{ width: "100%", height: "90%" }}
              alt="meyerhoffer.com"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              src={home_files[17]}
              style={{ width: "100%", height: "90%" }}
              alt="meyerhoffer.com"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              src={home_files[18]}
              style={{ width: "100%", height: "90%" }}
              alt="meyerhoffer.com"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" className={classes.par_font}>
          PROJECT: MIKE BLOOMBERG PRESIDENTAL CAMPAIGN
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" className={classes.par_font}>
          YEAR: 2015
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" className={classes.par_font}>
          INFORMATION: N/A
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" className={classes.par_font}>
          CREDITS:N/A
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LinkBloomberg;
