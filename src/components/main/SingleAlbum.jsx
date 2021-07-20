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
  },
}));

const SingleAlbum = (props) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={props.file.asset}
          component="img"
          alt="No Image"
        />
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
                  {props.file.price}
                </Link>
              </Box>
            </Box>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default SingleAlbum;
