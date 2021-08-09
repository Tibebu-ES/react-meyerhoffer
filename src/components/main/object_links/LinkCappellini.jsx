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

const LinkCappellini = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container direction="column" spacing={4} className={classes.root}>
        <Grid item xs={12} md={6}>
          <img
            src={object_files[60]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
          <Typography className={classes.content}>
            M2 chair. Fiberglass, Leather, 130cm x 90cm x 100cm
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <img
            src={object_files[61]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
          <Typography className={classes.content}>
            Milano furniture fair 2001. Photo: Cappellini.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={object_files[62]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
        </Grid>
        <Grid item xs={7} md={4}>
          <img
            src={object_files[63]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
        </Grid>
        <Grid item xs={7} md={4}>
          <img
            src={object_files[64]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
          <Typography className={classes.content}>
            Outdoor version in Stracciatella fiberglass by Son of Cobra
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <img
            src={object_files[65]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
          <Typography className={classes.content}>
            Prototypes at the studio
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography className={classes.content} paragraph>
            PROJECT: CAPPELINI CHAIR
          </Typography>

          <Typography className={classes.content} paragraph>
            YEAR: 2001
          </Typography>

          <Typography className={classes.content} paragraph align="justify">
            INFORMATION: Commissioned by Giulio Cappellini for the 2001 Milano
            Furniture fair, Thomas was asked to propose a new form of the object
            we all know. The design of this chair is based on the principle that
            there is no perfect way to sit for too long. In fact, the best way
            for us to relax is to change position now and then. With this
            notion, Thomas set out to design a chair that invites you to sit
            "any what you like". The design allows the user to either sit in a
            conventional way or straddle the chair, much like sitting in a
            saddle. Swinging your legs over the rounded sides, perhaps even use
            the hole on top of the chair as a handle, similar to the bars on a
            gymnastic pommel horse. Dressed in soft-sculpted Italian leather,
            the seating material is modeled on the classic Ferrari's of the
            '80s, and the structure of the chair is in fiberglass. The chair was
            introduced at the Milano Furniture Fair in 2001 and was much liked
            by the audience; however, the orders were never fulfilled as the
            legendary Italian furniture manufacturer went into bankruptcy that
            same year. The experience of working together with Giulio and his
            team of dedicated and generous craftsmen was a fantastic experience
            for Thomas and will never be forgotten!
          </Typography>

          <Typography className={classes.content}>
            CREDITS:
            <br />
            Photography: Christoffer Dalkarls, Cappellini & Meyerhoffer.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LinkCappellini;
