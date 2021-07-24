import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Grid,
  CardContent,
  Card,
  Box,
  Chip,
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
    background: "#a6d4fa",
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
}));

const Shop = () => {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <Grid container spacing={10}>
        {shop_files.map((file) => (
          <Grid item key={file} xs={12} sm={6} md={4}>
            {file.asset === shop_files[0].asset ||
            file.asset === shop_files[10].asset ? (
              <Card className={classes.card}>
                <ReactPlayer
                  playing={true}
                  loop={true}
                  url={file.asset}
                  width="100%"
                  height="100%"
                />

                <CardContent className={classes.cardContent}>
                  <Typography variant="span">
                    <Box display="flex" flexDirection="column">
                      <Box>
                        <Link to="/" className={classes.itemLink}>
                          {" "}
                          {file.caption}
                        </Link>
                      </Box>
                      <Box pt={1}>
                        <Link to="/" className={classes.itemLink}>
                          <strong>{file.price}</strong>
                        </Link>
                      </Box>
                    </Box>
                  </Typography>
                </CardContent>
              </Card>
            ) : (
              <SingleAlbum file={file} />
            )}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Shop;
