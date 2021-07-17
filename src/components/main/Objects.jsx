import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Grid,
  CardMedia,
  CardContent,
  Card,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import object_files from "../data/index";

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

const Objects = () => {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <Grid container spacing={10}>
        {object_files.map((file) => (
          <Grid item key={file} xs={12} sm={6} md={4}>
            {file.asset == object_files[4].asset ||
            file.asset == object_files[8].asset ||
            file.asset == object_files[26].asset ? (
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
                      <Box>
                        <Link to="/" className={classes.itemLink}>
                          {" "}
                          {file.price}
                        </Link>
                      </Box>
                    </Box>
                  </Typography>
                </CardContent>
              </Card>
            ) : (
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={file.asset}
                  component="img"
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
                      <Box>
                        <Link to="/" className={classes.itemLink}>
                          {" "}
                          {file.price}
                        </Link>
                      </Box>
                    </Box>
                  </Typography>
                </CardContent>
              </Card>
            )}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Objects;
