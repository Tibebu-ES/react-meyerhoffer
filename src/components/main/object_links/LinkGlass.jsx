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

const LinkGlass = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container direction="column" spacing={4} className={classes.root}>
        <Grid item xs={12}>
          <Typography className={classes.content}>
            ORREFORS
            <br />
            Sweden, 2008.
          </Typography>
        </Grid>

        <Grid item xs={7} md={5}>
          <img
            src={object_files[49]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
          <Typography className={classes.content}>
            Eternity, Glass, 280mmX108mmX55mm, 2007
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <img
            src={object_files[50]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
          <Typography className={classes.content}>
            Swell, Glass, 473mmX182mmX158mm, 2008
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <img
            src={object_files[51]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
          <Typography className={classes.content}>
            Eternity, Glass, 280mmX108mmX55mm, 2007
          </Typography>
        </Grid>
        <Grid item xs={7} md={5}>
          <img
            src={object_files[52]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
          <Typography className={classes.content}>
            Between Scandinavia and California.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography className={classes.content} paragraph>
            PROJECT: ORREFORS
          </Typography>

          <Typography className={classes.content} paragraph>
            YEAR: 2009
          </Typography>

          <Typography className={classes.content} paragraph>
            INFORMATION: Sweden being where i came from. I was very excited
            about this projet. Unforntinately the project leader, an truly
            amazing person, passed away in the Milan airplane crash that year. I
            did not want to continue and picked up my glass prototypes and
            brought them back to California where the value has increased as the
            memories remain. I will never forget the warmth of the glass ovens
            and of the people in the deep forest of Sweden.
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

export default LinkGlass;
