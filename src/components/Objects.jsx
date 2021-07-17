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

import s1 from "../assets/1.jpg";
import s2 from "../assets/2.jpg";
import s3 from "../assets/3.jpg";
import s4 from "../assets/4.jpg";

import s5 from "../assets/5.mp4";

import s6 from "../assets/6.jpg";
import s7 from "../assets/7.jpg";
import s8 from "../assets/8.jpg";

import s9 from "../assets/9.mp4";

import s10 from "../assets/10.jpg";
import s11 from "../assets/11.jpg";
import s12 from "../assets/12.jpg";
import s13 from "../assets/13.jpg";
import s14 from "../assets/14.jpg";
import s15 from "../assets/15.jpg";
import s16 from "../assets/16.jpg";
import s17 from "../assets/17.jpg";
import s18 from "../assets/18.jpg";
import s19 from "../assets/19.jpg";
import s20 from "../assets/20.jpg";
import s21 from "../assets/21.jpg";
import s22 from "../assets/22.jpg";
import s23 from "../assets/23.jpg";
import s24 from "../assets/24.jpg";
import s25 from "../assets/25.jpg";
import s26 from "../assets/26.jpg";
import s27 from "../assets/27.mp4";
import s28 from "../assets/28.jpg";
import s29 from "../assets/29.jpg";
import s30 from "../assets/30.jpg";

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

const cards = [
  {
    asset: s1,
    price: "$ 1.65 B startup",
    caption: "Latch",
  },
  {
    asset: s2,
    price: "Not For Sale",
    caption: "Glass Sculpture",
  },
  {
    asset: s3,
    price: "$ 3.50",
    caption: "Coca-cola",
  },
  {
    asset: s4,
    price: "Priceless",
    caption: "Coca-cola",
  },
  {
    asset: s5,
    price: "adfadfasdf",
    caption: "Coca-cola",
  },
  {
    asset: s7,
    price: "Not available",
    caption: "Charge",
  },
  {
    asset: s8,
    price: "$ 1900.00",
    caption: "Slip In",
  },
  {
    asset: s9,
    price: "Prototype",
    caption: "Sound Box",
  },
  {
    asset: s10,
    price: "$ 3600.00",
    caption: "Full Circle NFT",
  },
  {
    asset: s11,
    price: "Sold Out",
    caption: "Glass Sculpture",
  },
  {
    asset: s12,
    price: "Not Available",
    caption: "Logitech",
  },
  {
    asset: s13,
    price: "Not Available",
    caption: "Charge",
  },
  {
    asset: s14,
    price: "Not Available",
    caption: "Charge",
  },
  {
    asset: s15,
    price: "$ 3600.00",
    caption: "Full Circle NFT",
  },
  {
    asset: s16,
    price: "Sold Out",
    caption: "Glass Sculpture",
  },
  {
    asset: s17,
    price: "Not Available",
    caption: "Logitech",
  },
  {
    asset: s19,
    price: "Not Available",
    caption: "Charge",
  },
  {
    asset: s20,
    price: "Not Available",
    caption: "Charge",
  },
  {
    asset: s21,
    price: "$ 3600.00",
    caption: "Full Circle NFT",
  },
  {
    asset: s22,
    price: "Sold Out",
    caption: "Glass Sculpture",
  },
  {
    asset: s23,
    price: "Not Available",
    caption: "Logitech",
  },
  {
    asset: s24,
    price: "Not Available",
    caption: "Charge",
  },
  {
    asset: s25,
    price: "Not Available",
    caption: "Charge",
  },
  {
    asset: s26,
    price: "$ 3600.00",
    caption: "Full Circle NFT",
  },
  {
    asset: s27,
    price: "Sold Out",
    caption: "Glass Sculpture",
  },
  {
    asset: s28,
    price: "Not Available",
    caption: "Logitech",
  },
  {
    asset: s29,
    price: "Not Available",
    caption: "Charge",
  },
  {
    asset: s30,
    price: "Not Available",
    caption: "Charge",
  },
];

const Objects = () => {
  const classes = useStyles();

  if (1) {
  } else {
  }
  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <Grid container spacing={10}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            {card.asset == s5 || card.asset == s27 || card.asset == s9 ? (
              <Card className={classes.card}>
                <ReactPlayer
                  playing={true}
                  loop={true}
                  url={card.asset}
                  width="100%"
                  height="100%"
                />

                <CardContent className={classes.cardContent}>
                  <Typography variant="span">
                    <Box display="flex" flexDirection="column">
                      <Box>
                        <Link to="/" className={classes.itemLink}>
                          {" "}
                          {card.caption}
                        </Link>
                      </Box>
                      <Box>
                        <Link to="/" className={classes.itemLink}>
                          {" "}
                          {card.price}
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
                  image={card.asset}
                  component="img"
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="span">
                    <Box display="flex" flexDirection="column">
                      <Box>
                        <Link to="/" className={classes.itemLink}>
                          {" "}
                          {card.caption}
                        </Link>
                      </Box>
                      <Box>
                        <Link to="/" className={classes.itemLink}>
                          {" "}
                          {card.price}
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
