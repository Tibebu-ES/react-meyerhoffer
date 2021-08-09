import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "11px",
    },
  },
  images: {
    marginTop: "50px",
    marginBottom: "50px",
  },
}));

const LinkPowering = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={4} className={classes.root}>
        <Grid item xs={12}>
          <Typography className={classes.content}>
            POWER RING <br />
            For Logitech
          </Typography>
        </Grid>

        <Grid item xs={12} md={9}>
          <img
            src={object_files[53]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
          <Typography className={classes.content}>
            Magnetic charging ring
          </Typography>
        </Grid>

        <Grid item xs={7} md={5}>
          <img
            src={object_files[54]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
          <Typography className={classes.content}>Packaging</Typography>
        </Grid>

        <Grid item xs={12} md={9}>
          <img
            src={object_files[55]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
          <Typography className={classes.content}>
            Prototype of magentic stand
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography className={classes.content} paragraph>
            PROJECT: POWER RING
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

export default LinkPowering;
