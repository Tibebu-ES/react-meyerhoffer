import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { home_files } from "../data/index";
import { makeStyles } from "@material-ui/core/styles";
import CarouselView from "./CarouselViewer";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "50px",
    [theme.breakpoints.up("md")]: {
      marginTop: "150px",
    },
  },
  drawerHeader: {
    background: "#1768AC",
  },
  navIcon: {
    color: "#fff",
  },
  bottomLinkButText: {
    fontSize: "12px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
  images: {
    width: "100%",
    height: "100%",
  },
  img_title: {
    fontFamily: "Century",
    fontSize: "13px",
    color: "#000000",
  },
  grid_item: {
    marginBottom: "15px",
    marginRight: "10px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "8px",
    },
  },
  btn_link: {
    fontFamily: "Century",
    fontSize: "12px",
    textDecoration: "none",
    padding: "8px",
    border: "1px solid #0645ad",
    color: "#0645ad",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      padding: "5px",
    },
  },
  item_spacing: {
    marginTop: "50px",
    [theme.breakpoints.up("md")]: {
      marginTop: "150px",
    },
  },
  image_title_grid: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      padding: "20px",
      display: "block",
    },
  },
}));

const Home = () => {
  let items = home_files.slice(5, 10);

  const classes = useStyles();

  function Item(props) {
    return (
      <Paper style={{ height: "550px" }}>
        <img
          src={props.item.asset}
          style={{ height: "100%", width: "100%" }}
          alt="Product"
        />
        <Typography variant="h6">{props.item.caption}</Typography>
      </Paper>
    );
  }

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <img
          src={home_files[0]}
          className={classes.images}
          alt="meyerhoffer.com"
        />
      </Grid>

      <Grid item xs={12} className={classes.image_title_grid}>
        <a className={classes.img_title} href="/archive-latch">
          LATCH
        </a>
      </Grid>

      <Grid item xs={12} className={classes.item_spacing}>
        <Grid container direction="column">
          <Grid item>
            <img
              src={home_files[1]}
              className={classes.images}
              alt="meyerhoffer.com"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} className={classes.image_title_grid}>
        <a className={classes.img_title} href="/archive-surf">
          SURFBOARDS
        </a>
      </Grid>

      <Grid item xs={12} className={classes.item_spacing}>
        <img
          src={home_files[2]}
          className={classes.images}
          alt="meyerhoffer.com"
        />
      </Grid>

      <Grid item xs={12} className={classes.item_spacing}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={10} md={10} className={classes.item_spacing}>
            <Carousel autoPlay="true" animation="slide">
              {items.map((item, i) => (
                <CarouselView key={i} item={item} />
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} className={classes.item_spacing}>
        <img
          src={home_files[3]}
          className={classes.images}
          alt="meyerhoffer.com"
        />
      </Grid>

      <Grid item xs={12} className={classes.image_title_grid}>
        <a className={classes.img_title} href="/archive-latch">
          LATCH
        </a>
      </Grid>

      <Grid item xs={12} className={classes.item_spacing}>
        <img
          src={home_files[4]}
          className={classes.images}
          alt="meyerhoffer.com"
        />
      </Grid>

      {/*bootom links */}
      <Grid item xs={12} className={classes.item_spacing}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={11} md={10}>
            <Grid container direction="row">
              <Grid item className={classes.grid_item}>
                <a className={classes.btn_link} href="/archive-latch">
                  Latch start up going public @ 1.6B
                </a>
              </Grid>
              <Grid item className={classes.grid_item}>
                <a className={classes.btn_link} href="/archive-bloomberg">
                  Mike Bloomberg Presidential Stragety
                </a>
              </Grid>
              <Grid item className={classes.grid_item}>
                <a className={classes.btn_link} href="/archive-surf">
                  Design Patents
                </a>
              </Grid>
              <Grid item className={classes.grid_item}>
                <a className={classes.btn_link} href="/archive-surf">
                  A life as a surfer
                </a>
              </Grid>
              <Grid item className={classes.grid_item}>
                <a className={classes.btn_link} href="/archive-surf">
                  Surfboard designer
                </a>
              </Grid>
              <Grid item className={classes.grid_item}>
                <a className={classes.btn_link} href="/archive-coke">
                  Coca-Cola Glass
                </a>
              </Grid>
              <Grid item className={classes.grid_item}>
                <a className={classes.btn_link} href="/archive-tork">
                  100 Million users every day
                </a>
              </Grid>
              <Grid item className={classes.grid_item}>
                <a className={classes.btn_link} href="/archive-cappellini">
                  Cappellini chair
                </a>
              </Grid>
              <Grid item className={classes.grid_item}>
                <a className={classes.btn_link} href="/outsidemagazine">
                  Outside Magazine cover story
                </a>
              </Grid>
              <Grid item className={classes.grid_item}>
                <a className={classes.btn_link} href="/about">
                  Occasional race car dirver
                </a>
              </Grid>
              <Grid item className={classes.grid_item}>
                <a className={classes.btn_link} href="/about">
                  Thomas talks with Tom Sachs
                </a>
              </Grid>
              <Grid item className={classes.grid_item}>
                <a className={classes.btn_link} href="/about">
                  Multiple International design awards
                </a>
              </Grid>
              <Grid item className={classes.grid_item}>
                <a className={classes.btn_link} href="/archive-apple">
                  Apple design group
                </a>
              </Grid>
              <Grid item className={classes.grid_item}>
                <a className={classes.btn_link} href="/archive-coke">
                  Colette Paris
                </a>
              </Grid>
              <Grid item className={classes.grid_item}>
                <a className={classes.btn_link} href="/archive-surf">
                  Slip In single fin
                </a>
              </Grid>
              <Grid item className={classes.grid_item}>
                <a className={classes.btn_link} href="/archive-latch">
                  Start Up design and brand strategy
                </a>
              </Grid>
              <Grid item className={classes.grid_item}>
                <a className={classes.btn_link} href="/archive-snowboard">
                  Bald Face home made snowboard
                </a>
              </Grid>
              <Grid item className={classes.grid_item}>
                <a className={classes.btn_link} href="/archive-chumby">
                  Soft Computer
                </a>
              </Grid>
              <Grid item className={classes.grid_item}>
                <a className={classes.btn_link} href="/archive-skigoggles">
                  First modern ski goggle
                </a>
              </Grid>
              <Grid item className={classes.grid_item}>
                <a className={classes.btn_link} href="/archive-porsche">
                  Porsche Design Intern
                </a>
              </Grid>
              <Grid item className={classes.grid_item}>
                <a className={classes.btn_link} href="/archive-snowboard">
                  Up-cycled Snowboard
                </a>
              </Grid>
              <Grid item className={classes.grid_item}>
                <a className={classes.btn_link} href="/about">
                  Medical design
                </a>
              </Grid>
              <Grid item className={classes.grid_item}>
                <a className={classes.btn_link} href="/archive-surf">
                  Surfer surfing the boards all over the world
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
