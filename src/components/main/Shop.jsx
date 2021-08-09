import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Grid,
  CardContent,
  Card,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { shop_files } from "../data/index";
import SingleAlbum from "./SingleAlbum";

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
    fontFamily: "Century",
    textDecoration: "none",
  },
  topTitle: {
    marginBottom: "30px",
    marginTop: "-60px",
  },
  mini_title: {
    fontFamily: "century",
  },
  title_font: {
    fontFamily: "GenathDisplay",
    fontWeight: "bold",
    fontSize: "56px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
}));

const Shop = () => {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <Grid container xs={12}>
        <Typography variant="h4" className={classes.title_font}>
          Surf Shop
        </Typography>
      </Grid>

      <Grid container spacing={4}>
        {shop_files.map((file) => (
          <Grid item key={file} xs={12} sm={6} md={4}>
            {file.asset === shop_files[0].asset ||
            file.asset === shop_files[10].asset ? (
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

export default Shop;
