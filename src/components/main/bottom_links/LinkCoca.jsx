import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid, Typography, ImageListItem, ImageList } from "@material-ui/core";
import { home_files } from "../../data/index";

const useStyles = makeStyles(() => ({
  par_font: {
    fontFamily: "Century",
  },
}));

const LinkCoca = () => {
  const itemData = home_files.slice(19, 25);
  const classes = useStyles();

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item xs={12}>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item}>
              <img
                srcSet={`${item}?w=161&fit=crop&auto=format 1x, ${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                loading="lazy"
                alt=" "
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.par_font}>PROJECT: COCA-COLA</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.par_font}>YEAR: 2013</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography paragraph className={classes.par_font}>
          INFORMATION: The purest form possible. The design of the Coca-Cola
          glass is guided by functionality. Exploring the external form and
          internal force. Balancing proportions and refining outline down to the
          purest form possible. The design is a clear expression of the function
          of the glass and has succeeded in becoming a contemporary symbol of
          the Coca-Cola brand identity. Launched at Colette, Paris, 2013.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.par_font}>
          RECOGNITION:IDSA Award 2014
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.par_font}></Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.par_font}></Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.par_font}>CREDITS:</Typography>
        <Typography className={classes.par_font}>
          Photography: Christoffer Dalkarls, Colette.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LinkCoca;
