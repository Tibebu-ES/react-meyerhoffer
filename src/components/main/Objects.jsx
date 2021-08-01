import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Chip } from "@material-ui/core";
import { object_files } from "../data/index";
import SingleAlbum from "./SingleAlbum";
import { ArrowBack } from "@material-ui/icons";

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
  topTitle: {
    marginBottom: "30px",
    marginTop: "-60px",
  },
}));

const Objects = () => {
  const classes = useStyles();
  const items = object_files.slice(0, 39);
  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <Grid
        container
        direction="row"
        justifyContent="center"
        spacing={3}
        className={classes.topTitle}
      >
        <Grid item xs={1}>
          <Chip label="Shop" color="secondary" />
        </Grid>
        <Grid item xs={1}>
          <Chip
            icon={<ArrowBack />}
            label="Everything has a price"
            color="secondary"
          />
        </Grid>
      </Grid>
      <Grid container spacing={10}>
        {items.map((file) => (
          <Grid item key={file} xs={12} sm={6} md={4}>
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
