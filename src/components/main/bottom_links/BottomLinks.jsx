import React from "react";
import LinkLatch from "./LinkLatch";
import LinkBloomberg from "./LinkBloomberg";
import LinkCoca from "./LinkCoca";
import { makeStyles } from "@material-ui/core/styles";
import LinkHundred from "./LinkHundred";
import LinkApple from "./LinkApple";
import LinkBaldFace from "./LinkBaldFace";
import LinkSoftComputer from "./LinkSoftComputer";
import LinkPSD from "./LinkPSD";
import LinkSkigoggole from "./LinkSkigoggle";
import LinkPorsche from "./LinkPorsche";
import LinkSnowboard from "./LinkSnowboard";

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
      ) : choose === "softcomputer" ? (
        <LinkSoftComputer />
      ) : choose === "psd" ? (
        <LinkPSD />
      ) : choose === "skigoggle" ? (
        <LinkSkigoggole />
      ) : choose === "porsche" ? (
        <LinkPorsche />
      ) : choose === "snow" ? (
        <LinkSnowboard />
      ) : (
        ""
      )}
    </div>
  );
};

export default BottomLinks;
