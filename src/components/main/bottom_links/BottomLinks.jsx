import React from "react";
import LinkLatch from "./LinkLatch";
import LinkBloomberg from "./LinkBloomberg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  wrapper: {
    maxWidth: "700px",
    margin: "20px",
  },
}));

const BottomLinks = ({ choose }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      {choose === "latch" ? (
        <LinkLatch />
      ) : choose === "bloomberg" ? (
        <LinkBloomberg />
      ) : (
        ""
      )}
    </div>
  );
};

export default BottomLinks;
