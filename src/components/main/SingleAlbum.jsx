import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    boxShadow: "none",
  },
  cardContent: {
    flexGrow: 1,
  },
  itemLink: {
    textDecoration: "none",
    fontFamily: "Century",
    fontSize: "11px",
    color: "#000000",
  },
}));

const SingleAlbum = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      {props.fileType === "video" ? (
        <img
          src={props.file.asset}
          className={classes.images}
          alt="meyerhoffer.com"
        />
      ) : (
        <CardMedia
          className={classes.cardMedia}
          image={props.file.asset}
          component="img"
          alt="No Image"
        />
      )}

      <CardContent className={classes.cardContent}>
        <Typography variant="span">
          <Box display="flex" flexDirection="column">
            <Box>
              <a className={classes.itemLink} href={props.file.type}>
                {props.file.caption}
                <br />
                {props.file.price}
              </a>
            </Box>
          </Box>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SingleAlbum;
