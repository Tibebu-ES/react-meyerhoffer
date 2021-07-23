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
    background: "#a6d4fa",
  },
  itemLink: {
    textDecoration: "none",
    fontFamily: "Century",
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
              <Link to="/" className={classes.itemLink}>
                {" "}
                {props.file.caption}
              </Link>
            </Box>
            <Box>
              <Link to="/" className={classes.itemLink}>
                {" "}
                <strong>{props.file.price}</strong>
              </Link>
            </Box>
          </Box>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SingleAlbum;
