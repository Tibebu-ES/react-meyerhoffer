import React from "react";
import LinkLatch from "./LinkLatch";
import LinkBloomberg from "./LinkBloomberg";
import LinkCoca from "./LinkCoca";
import { makeStyles } from "@material-ui/core/styles";
import LinkHundred from "./LinkHundred";
import LinkApple from "./LinkApple";
import LinkBaldFace from "./LinkBaldFace";

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
      {choose === "latch" || choose === "startup" ? (
        <LinkLatch />
      ) : choose === "bloomberg" ? (
        <LinkBloomberg />
      ) : choose === "coca" || choose === "colette" ? (
        <LinkCoca />
      ) : choose === "hundred" ? (
        <LinkHundred />
      ) : choose === "apple" ? (
        <LinkApple />
      ) : choose === "baldface" ? (
        <LinkBaldFace />
      ) : (
        ""
      )}
    </div>
  );
};

export default BottomLinks;
