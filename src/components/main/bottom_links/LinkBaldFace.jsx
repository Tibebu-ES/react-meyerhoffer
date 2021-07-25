import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid, Typography, Chip } from "@material-ui/core";
import { home_files } from "../../data";

const useStyles = makeStyles(() => ({
  par_font: {
    fontFamily: "Century",
  },
}));

const LinkBaldFace = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item xs={12} style={{ marginBottom: "20px" }}>
        <Grid container direction="row" spacing={2}>
          <Grid xs={12} md={6}>
            <img
              src={home_files[35]}
              style={{ width: "100%", height: "100%", margin: "10px" }}
              alt="=meyerhoffer.com/"
            />
          </Grid>
          <Grid xs={12} md={6}>
            <img
              src={home_files[36]}
              style={{ width: "100%", height: "100%", margin: "10px" }}
              alt="=meyerhoffer.com/"
            />
          </Grid>
          <Grid xs={12} md={6}>
            <img
              src={home_files[37]}
              style={{ width: "100%", height: "100%", margin: "10px" }}
              alt="=meyerhoffer.com/"
            />
          </Grid>
          <Grid xs={12} md={6}>
            <img
              src={home_files[38]}
              style={{ width: "100%", height: "100%", margin: "10px" }}
              alt="=meyerhoffer.com/"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.par_font}>
          PROJECT: UP CYCLED SNOWBOARD <Chip label="YEAR: 2001" />
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography paragraph className={classes.par_font}>
          INFORMATION: Ongoing experiemnt with re use of old snowboard to make
          new sort of surfy snowboard.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.par_font}>CREDITS:</Typography>
        <Typography className={classes.par_font}>
          Photography: Baldface Lodge & Meyerhoffer
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LinkBaldFace;
