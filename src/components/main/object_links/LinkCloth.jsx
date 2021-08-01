import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { object_files } from "../../data";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10vw 6.25vw  0 6.25vw",
  },
  content: {
    fontFamily: "Century",
    fontSize: "13px",
    marginTop: "25px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "11px",
    },
  },
  images: {
    marginTop: "50px",
    marginBottom: "50px",
  },
}));

const LinkCloth = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" spacing={6} className={classes.root}>
      <Grid item xs={7} md={5}>
        <img
          src={object_files[45]}
          width="100%"
          height="100%"
          alt="meyerhoffer.com"
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <img
          src={object_files[46]}
          width="100%"
          height="100%"
          alt="meyerhoffer.com"
        />
      </Grid>
      <Grid item xs={7} md={5}>
        <img
          src={object_files[47]}
          width="100%"
          height="100%"
          alt="meyerhoffer.com"
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <img
          src={object_files[48]}
          width="100%"
          height="100%"
          alt="meyerhoffer.com"
        />
      </Grid>

      <Grid item xs={12}>
        <Typography className={classes.content} paragraph>
          PROJECT: MEYERHOFFER X ISAORA COLLABORATION OF CLOTHING
        </Typography>

        <Typography className={classes.content} paragraph>
          YEAR: 2016
        </Typography>

        <Typography className={classes.content} paragraph>
          INFORMATION: N/A
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LinkCloth;
