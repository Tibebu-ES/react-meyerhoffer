import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { object_files } from "../../data";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "150px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
    },
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

const LinkCharge = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container direction="column" spacing={4} className={classes.root}>
        <Grid item xs={12}>
          <Typography className={classes.content}>CHARGE</Typography>
        </Grid>

        <Grid item xs={10} md={5}>
          <img
            src={object_files[41]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
        </Grid>
        <Grid item xs={10} md={5}>
          <img
            src={object_files[42]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
        </Grid>
        <Grid item xs={10} md={5}>
          <img
            src={object_files[43]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
        </Grid>
        <Grid item xs={10} md={5}>
          <img
            src={object_files[44]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
        </Grid>

        <Grid item xs={12}>
          <Typography className={classes.content} paragraph>
            PROJECT: SOUND POD
          </Typography>

          <Typography className={classes.content} paragraph>
            YEAR: 2018
          </Typography>

          <Typography className={classes.content} paragraph>
            INFORMATION: N/A
          </Typography>

          <Typography className={classes.content}>
            CREDITS: <br />
            Photography: Christoffer Dalkarls.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LinkCharge;
