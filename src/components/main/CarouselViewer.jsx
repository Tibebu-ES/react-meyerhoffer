import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  img_size: {
    height: "100%",
    width: "100%",
  },
  content_font: {
    [theme.breakpoints.up("md")]: {
      fontSize: 17,
    },
    fontFamily: "Century",
    fontSize: "11px",
  },
}));

const CarouselView = (props) => {
  const classes = useStyles();
  return (
    <div>
      <img
        src={props.item.asset}
        className={classes.img_size}
        alt="meyerhoffer.com"
      />
      <Typography align="center" variant="h6" className={classes.content_font}>
        <strong>{props.item.caption}</strong>
      </Typography>
    </div>
  );
};

export default CarouselView;
