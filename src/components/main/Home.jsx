import React, { useState } from "react";
import {
  Paper,
  Container,
  Button,
  Grid,
  Typography,
  Drawer,
  IconButton,
  Divider,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { NavigateBefore } from "@material-ui/icons";
import { home_files } from "../data/index";
import { makeStyles } from "@material-ui/core/styles";
import BottomLinks from "./bottom_links/BottomLinks";
import CarouselView from "./CarouselViewer";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "50px",
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
  },
}));

const Home = () => {
  let items = home_files.slice(5, 10);

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [choose, setChoose] = useState(false);

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

  const handleDrawerOpen = (choose) => {
    setChoose(choose);
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setChoose("");
  };

  return (
    <Container className={classes.root}>
      <Grid container direction="column" spacing={10} alignItems="center">
        <Grid item xs={12}>
          <img
            src={home_files[0]}
            className={classes.images}
            alt="meyerhoffer.com"
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="column">
            <Grid item>
              <a className={classes.img_title} href="/archive-latch">
                LATCH
              </a>
            </Grid>
            <Grid item>
              <img
                src={home_files[1]}
                className={classes.images}
                alt="meyerhoffer.com"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="column">
            <Grid item>
              <a className={classes.img_title} href="/archive-surf">
                SURFBOARDS
              </a>
            </Grid>
            <Grid item>
              <img
                src={home_files[2]}
                className={classes.images}
                alt="meyerhoffer.com"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={8}>
          <Carousel
            navButtonsAlwaysVisible="true"
            autoPlay="true"
            animation="slide"
          >
            {items.map((item, i) => (
              <CarouselView key={i} item={item} />
            ))}
          </Carousel>
        </Grid>
        <Grid item xs={12}>
          <img
            src={home_files[3]}
            className={classes.images}
            alt="meyerhoffer.com"
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="column">
            <Grid item>
              <a className={classes.img_title} href="/archive-latch">
                LATCH
              </a>
            </Grid>
            <Grid item>
              <img
                src={home_files[4]}
                className={classes.images}
                alt="meyerhoffer.com"
              />
            </Grid>
          </Grid>
        </Grid>

        {/*bootom links */}
        <Grid item xs={12}>
          <Grid container spacing={1} direction="row">
            <Grid item>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => handleDrawerOpen("latch")}
              >
                <span className={classes.bottomLinkButText}>
                  {" "}
                  Latch start up going public @ 1.6B
                </span>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => handleDrawerOpen("bloomberg")}
              >
                <span className={classes.bottomLinkButText}>
                  Mike Bloomberg Presidential Stragety
                </span>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => handleDrawerOpen("psd")}
              >
                <span className={classes.bottomLinkButText}>
                  Design Patents
                </span>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={() => handleDrawerOpen("psd")}
              >
                <span className={classes.bottomLinkButText}>
                  A life as a surfer
                </span>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={() => handleDrawerOpen("psd")}
              >
                <span className={classes.bottomLinkButText}>
                  Surfboard designer
                </span>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={() => handleDrawerOpen("coca")}
              >
                <span className={classes.bottomLinkButText}>
                  Coca-Cola Glass
                </span>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => handleDrawerOpen("hundred")}
              >
                <span className={classes.bottomLinkButText}>
                  100 Million users every day
                </span>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => handleDrawerOpen()}
              >
                <span className={classes.bottomLinkButText}>
                  Cappellini chair
                </span>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => handleDrawerOpen()}
              >
                <span className={classes.bottomLinkButText}>
                  Outside Magazine cover story
                </span>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => handleDrawerOpen()}
              >
                <span className={classes.bottomLinkButText}>
                  Occasional race car dirver
                </span>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => handleDrawerOpen()}
              >
                <span className={classes.bottomLinkButText}>
                  Thomas talks with Tom Sachs
                </span>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => handleDrawerOpen()}
              >
                <span className={classes.bottomLinkButText}>
                  Multiple International design awards
                </span>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={() => handleDrawerOpen("apple")}
              >
                <span className={classes.bottomLinkButText}>
                  Apple design group
                </span>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => handleDrawerOpen("colette")}
              >
                <span className={classes.bottomLinkButText}>Colette Paris</span>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => handleDrawerOpen("psd")}
              >
                <span className={classes.bottomLinkButText}>
                  Slip In single fin
                </span>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => handleDrawerOpen("startup")}
              >
                <span className={classes.bottomLinkButText}>
                  Start Up design and brand strategy
                </span>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => handleDrawerOpen("baldface")}
              >
                <span className={classes.bottomLinkButText}>
                  Bald Face home made snowboard
                </span>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => handleDrawerOpen("softcomputer")}
              >
                <span className={classes.bottomLinkButText}>Soft Computer</span>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => handleDrawerOpen("skigoggle")}
              >
                <span className={classes.bottomLinkButText}>
                  First modern ski goggle
                </span>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => handleDrawerOpen("porsche")}
              >
                <span className={classes.bottomLinkButText}>
                  Porsche Design Intern
                </span>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => handleDrawerOpen("snow")}
              >
                <span className={classes.bottomLinkButText}>
                  Up-cycled Snowboard
                </span>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => handleDrawerOpen()}
              >
                <span className={classes.bottomLinkButText}>
                  Medical design
                </span>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => handleDrawerOpen()}
              >
                <span className={classes.bottomLinkButText}>
                  Surfer surfing the boards all over the world
                </span>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Drawer variant="persistent" anchor="left" open={open}>
        <div className={classes.drawerHeader}>
          <IconButton
            onClick={handleDrawerClose}
            className={classes.navIcon}
            edge="end"
          >
            <NavigateBefore />
          </IconButton>
        </div>
        <Divider />
        <BottomLinks choose={choose} />
      </Drawer>
    </Container>
  );
};

export default Home;
