import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AboutMagazine from "./AboutMagazine";
import AboutJournal from "./AboutJournal";

const useStyles = makeStyles(() => ({
  wrapper: {
    maxWidth: "1000px",
  },
}));

const LinkDetails = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {props.chooser === "magazine" ? <AboutMagazine /> : <AboutJournal />}
    </div>
  );
};

export default LinkDetails;
