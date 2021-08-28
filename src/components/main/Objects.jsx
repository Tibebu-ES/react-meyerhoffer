import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Chip, Typography } from "@material-ui/core";
import { object_files } from "../data/index";
import SingleAlbum from "./SingleAlbum";
import { ArrowBack } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    marginTop: "50px",
    [theme.breakpoints.up("md")]: {
      marginTop: "200px",
    },
  },

  content_font: {
    fontFamily: "Century",
    fontSize: "11px",
    [theme.breakpoints.up("md")]: {
      fontSize: "13px",
    },
  },
}));

const Objects = () => {
  const classes = useStyles();
  const items = object_files.slice(0, 39);
  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <Grid item>
        <Typography paragraph className={classes.content_font}>
          SHOP <br />
          Everything has a price
        </Typography>
      </Grid>

      <Grid container spacing={4}>
        {items.map((file) => (
          <Grid item key={file} xs={6} md={4}>
            {file.asset === items[4].asset ||
            file.asset === items[8].asset ||
            file.asset === items[26].asset ? (
              <SingleAlbum file={file} fileType="video" />
            ) : (
              <SingleAlbum file={file} fileType="image" />
            )}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Objects;
