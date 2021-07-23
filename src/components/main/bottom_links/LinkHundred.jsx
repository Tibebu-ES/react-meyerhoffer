import React from "react";
import { Grid, Typography, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { home_files } from "../../data/index";

const useStyle = makeStyles(() => ({
  para_content: {
    fontFamily: "Century",
  },
}));

const LinkHundred = () => {
  const classes = useStyle();

  return (
    <Grid container spacing={2} direction="column">
      <Grid item xs={12}>
        <Grid container spacing={2} direction="row">
          <Grid item xs={12} md={4}>
            <img
              src={home_files[25]}
              style={{ width: "100%", height: "100%" }}
              alt="=meyerhoffer.com/"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              src={home_files[26]}
              style={{ width: "100%", height: "100%" }}
              alt="=meyerhoffer.com/"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              src={home_files[27]}
              style={{ width: "100%", height: "100%" }}
              alt="=meyerhoffer.com/"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              src={home_files[28]}
              style={{ width: "100%", height: "100%" }}
              alt="=meyerhoffer.com/"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              src={home_files[29]}
              style={{ width: "100%", height: "100%" }}
              alt="=meyerhoffer.com/"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              src={home_files[30]}
              style={{ width: "100%", height: "100%" }}
              alt="=meyerhoffer.com/"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              src={home_files[31]}
              style={{ width: "100%", height: "100%" }}
              alt="=meyerhoffer.com/"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              src={home_files[32]}
              style={{ width: "100%", height: "100%" }}
              alt="=meyerhoffer.com/"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              src={home_files[33]}
              style={{ width: "100%", height: "100%" }}
              alt="=meyerhoffer.com/"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.para_content} paragraph>
          PROJECT: TORK <Chip label="YEAR: 2009" />
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.para_content} paragraph>
          INFORMATION: Tork is a Swedish company. So It was of special interest
          for me to apply what i learnt in California, to a brand that carries
          Scandinavian values and wants to connect with users around the world.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.para_content} paragraph>
          I designed a simple capsule. That is strong yet inviting. With a
          sculptural surface protecting the clean paper inside. The design
          communicate hygiene. And is satisfying the need from every user: the
          end user, cleaning personnel and building managers.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.para_content} paragraph>
          The design is used by hundreds of millions of people every day. It is
          the most widely used product i will ever design. You will find them in
          Sydney Opera house, Copenhagen Airport, Empire State Building, Swiss
          ski chalets and in temples in India.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.para_content} paragraph>
          In 2009, the Tork range of products received iF and Red Dot Design
          Awards.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.para_content}>CREDITS:</Typography>
        <Typography className={classes.para_content}>
          Photography: Christoffer Dalkarls
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LinkHundred;
