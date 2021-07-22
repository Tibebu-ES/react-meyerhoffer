import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  wrapper: {
    Width: "900px",
    margin: "20px",
  },
}));

const LinkLatch = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Typography variant="h2">
        Link detail template,Link detail template
      </Typography>
    </div>
  );
};

export default LinkLatch;
