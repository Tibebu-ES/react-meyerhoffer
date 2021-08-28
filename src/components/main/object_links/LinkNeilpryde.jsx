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
}));

const LinkNeilpryde = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={4} className={classes.root}>
        <Grid item xs={12}>
          <Typography className={classes.content}>
            NEIL PRYDE WINDSURFING SAILS <br />
            2008
          </Typography>
        </Grid>

        <Grid item xs={12} md={9}>
          <img
            src={object_files[56]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
        </Grid>
        <Grid item xs={7} md={5}>
          <img
            src={object_files[57]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
        </Grid>

        <Grid item xs={12}>
          <Typography className={classes.content} paragraph>
            PROJECT: NEIL PRYDE WINDSURFING SAILS
          </Typography>

          <Typography className={classes.content} paragraph>
            YEAR: 2008
          </Typography>

          <Typography className={classes.content} paragraph>
            INFORMATION: N/A
          </Typography>

          <Typography className={classes.content}>
            CREDITS: <br />
            Photography: Christoffer Dalkarls & Neil Pryde
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LinkNeilpryde;
