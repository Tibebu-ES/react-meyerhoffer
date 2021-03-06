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
    [theme.breakpoints.down("sm")]: {
      fontSize: "11px",
    },
  },
}));

const LinkDanger = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={4} className={classes.root}>
        <Grid item xs={12}>
          <Typography className={classes.content}>DANGER</Typography>
        </Grid>

        <Grid item xs={7} md={5}>
          <img
            src={object_files[58]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <img
            src={object_files[59]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
        </Grid>

        <Grid item xs={12}>
          <Typography className={classes.content} paragraph>
            PROJECT: DANGER
          </Typography>

          <Typography className={classes.content} paragraph>
            YEAR: 2002
          </Typography>

          <Typography className={classes.content} paragraph>
            INFORMATION: N/A
          </Typography>

          <Typography className={classes.content}>
            CREDITS: <br />
            Photography: Christoffer Dalkarls
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LinkDanger;
