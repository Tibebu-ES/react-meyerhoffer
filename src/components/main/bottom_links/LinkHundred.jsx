import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { home_files } from "../../data/index";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: "150px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
    },
  },
  para_content: {
    fontFamily: "Century",
    fontSize: "13px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "11px",
    },
  },
  images: {
    width: "100%",
  },
  bio_section: {
    marginTop: "80px",
  },
}));

const LinkHundred = () => {
  const classes = useStyle();
  return (
    <Container>
      <Grid container spacing={4} direction="column" className={classes.root}>
        <Grid item xs={12} md={9}>
          <img
            src={home_files[25]}
            className={classes.images}
            alt="=meyerhoffer.com"
          />
          <Typography className={classes.para_content}>
            Tork Paper dispenser
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <img
            src={home_files[26]}
            className={classes.images}
            alt="=meyerhoffer.com/"
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <img
            src={home_files[27]}
            className={classes.images}
            alt="=meyerhoffer.com"
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <img
            src={home_files[28]}
            className={classes.images}
            alt="=meyerhoffer.com"
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <img
            src={home_files[29]}
            className={classes.images}
            alt="=meyerhoffer.com"
          />
          <Typography className={classes.para_content}>Prototype</Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <img
            src={home_files[30]}
            className={classes.images}
            alt="=meyerhoffer.com"
          />
          <Typography className={classes.para_content}>
            Design strategy
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <img
            src={home_files[31]}
            className={classes.images}
            alt="=meyerhoffer.com"
          />
          <Typography className={classes.para_content}>
            Early form study
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <img
            src={home_files[32]}
            className={classes.images}
            alt="=meyerhoffer.com"
          />
          <Typography className={classes.para_content}>
            Sketches of simple objects
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <img
            src={home_files[33]}
            className={classes.images}
            alt="=meyerhoffer.com"
          />
          <Typography className={classes.para_content}>
            Sweden to California.
          </Typography>
        </Grid>

        <Grid item xs={12} className={classes.bio_section}>
          <Typography className={classes.para_content} paragraph>
            PROJECT: TORK
          </Typography>
          <Typography className={classes.para_content} paragraph>
            YEAR: 2009
          </Typography>

          <Typography className={classes.para_content} paragraph>
            INFORMATION: Tork is a Swedish company. So It was of special
            interest for me to apply what i learnt in California, to a brand
            that carries Scandinavian values and wants to connect with users
            around the world.
          </Typography>

          <Typography className={classes.para_content} paragraph>
            I designed a simple capsule. That is strong yet inviting. With a
            sculptural surface protecting the clean paper inside. The design
            communicate hygiene. And is satisfying the need from every user: the
            end user, cleaning personnel and building managers.
          </Typography>

          <Typography className={classes.para_content} paragraph>
            The design is used by hundreds of millions of people every day. It
            is the most widely used product i will ever design. You will find
            them in Sydney Opera house, Copenhagen Airport, Empire State
            Building, Swiss ski chalets and in temples in India.
          </Typography>

          <Typography className={classes.para_content} paragraph>
            In 2009, the Tork range of products received iF and Red Dot Design
            Awards.
          </Typography>

          <Typography className={classes.para_content}>CREDITS:</Typography>
          <Typography className={classes.para_content}>
            Photography: Christoffer Dalkarls
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LinkHundred;
