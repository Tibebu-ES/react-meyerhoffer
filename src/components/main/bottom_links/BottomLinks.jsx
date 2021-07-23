import React from "react";
import LinkLatch from "./LinkLatch";
import LinkBloomberg from "./LinkBloomberg";
import LinkCoca from "./LinkCoca";
import { makeStyles } from "@material-ui/core/styles";
import LinkHundred from "./LinkHundred";
import LinkApple from "./LinkApple";

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
      ) : choose === "coca" ? (
        <LinkCoca />
      ) : choose === "hundred" ? (
        <LinkHundred />
      ) : choose === "apple" ? (
        <LinkApple />
      ) : (
        ""
      )}
    </div>
  );
};

export default BottomLinks;
