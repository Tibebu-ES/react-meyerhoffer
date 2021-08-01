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
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
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
        <ReactPlayer
          playing={true}
          loop={true}
          url={props.file.asset}
          width="100%"
          height="100%"
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
