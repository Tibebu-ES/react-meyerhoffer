import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { home_files } from "../../data/index";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: "150px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
    },
  },
  par_content: {
    fontFamily: "Century",
    fontSize: "13px",
    color: "#000000",
    width: "62.5vw",
    [theme.breakpoints.down("sm")]: {
      fontSize: "11px",
      width: "100%",
    },
  },
}));

const LinkBloomberg = () => {
  const classes = useStyle();

  return (
    <Container>
      <Grid container direction="column" spacing={6} className={classes.root}>
        <Grid item xs={12}>
          <Typography variant="body1" className={classes.par_content}>
            MIKE BLOOMBERG PRESIDENTAL CAMPAIGN <br />
            2015
          </Typography>
        </Grid>

        <Grid item xs={7} md={4}>
          <img
            src={home_files[16]}
            style={{ width: "100%", height: "90%" }}
            alt="meyerhoffer.com"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <img
            src={home_files[17]}
            style={{ width: "100%", height: "90%" }}
            alt="meyerhoffer.com"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <img
            src={home_files[18]}
            style={{ width: "100%", height: "90%" }}
            alt="meyerhoffer.com"
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1" className={classes.par_content}>
            PROJECT: MIKE BLOOMBERG PRESIDENTAL CAMPAIGN <br />
            <br />
            YEAR: 2015 <br />
            <br />
            INFORMATION: N/A <br />
            <br />
            CREDITS: N/A
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LinkBloomberg;
