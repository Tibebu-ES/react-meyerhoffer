import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import { Grid, Typography } from "@material-ui/core";
import { home_files, object_files } from "../../data";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "150px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
    },
  },
  par_font: {
    fontFamily: "Century",
    fontSize: "13px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "11px",
    },
  },
  top_content: {
    marginTop: "100px",
  },
}));

const LinkCoca = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={4} className={classes.root}>
        <Grid item xs={12} md={8}>
          <img
            src={home_files[19]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <img
            src={home_files[20]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <img
            src={home_files[21]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <img
            src={object_files[66]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
        </Grid>

        <Grid item xs={6} md={5}>
          <img
            src={home_files[22]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <img
            src={home_files[23]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
          <Typography className={classes.par_font}>
            Opening party at Colette, Paris, 2013
          </Typography>
        </Grid>

        <Grid item xs={12} md={8}>
          <img
            src={home_files[24]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
        </Grid>

        <Grid item xs={12} className={classes.top_content}>
          <Typography className={classes.par_font} paragraph>
            PROJECT: COCA-COLA <br />
            YEAR: 2013
          </Typography>

          <Typography className={classes.par_font} paragraph>
            INFORMATION: The purest form possible. The design of the Coca-Cola
            glass is guided by functionality. Exploring the external form and
            internal force. Balancing proportions and refining outline down to
            the purest form possible. The design is a clear expression of the
            function of the glass and has succeeded in becoming a contemporary
            symbol of the Coca-Cola brand identity. Launched at Colette, Paris,
            2013.
          </Typography>

          <Typography className={classes.par_font} paragraph>
            RECOGNITION:IDSA Award 2014
          </Typography>

          <Typography className={classes.par_font}>
            CREDITS: <br />
            Photography: Christoffer Dalkarls, Colette.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LinkCoca;
