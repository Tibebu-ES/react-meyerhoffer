import React from "react";
import LinkLatch from "./LinkLatch";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  wrapper: {
    maxWidth: "700px",
    margin: "20px",
  },
}));

const BottomLinks = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <LinkLatch />
    </div>
  );
};

export default BottomLinks;
