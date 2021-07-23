import React, { useState } from "react";
import {
  Paper,
  Container,
  Box,
  Button,
  Grid,
  Badge,
  Typography,
  Drawer,
  IconButton,
  Divider,
} from "@material-ui/core";
import ReactPlayer from "react-player";
import Carousel from "react-material-ui-carousel";
import { ArrowRight, ArrowLeft, NavigateBefore } from "@material-ui/icons";
import { home_files } from "../data/index";
import { makeStyles } from "@material-ui/core/styles";
import BottomLinks from "./bottom_links/BottomLinks";

const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    background: "#1768AC",
  },
  navIcon: {
    color: "#fff",
  },
}));

const Home = () => {
  var items = [
    home_files[5],
    home_files[6],
    home_files[7],
    home_files[8],
    home_files[9],
  ];

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
    <Container>
      <Box display="flex" flexDirection="column">
        <Box m={5}>
          <ReactPlayer
            playing={true}
            loop={true}
            url={home_files[0]}
            width="100%"
            height="100%"
          />
        </Box>
        <Box m={5}>
          <Paper variant="outlined">
            <img
              src={home_files[1]}
              style={{ width: "90%" }}
              alt="meyerhoffer.com"
            />
          </Paper>
        </Box>
        <Box m={5}>
          <ReactPlayer
            playing={true}
            loop={true}
            url={home_files[2]}
            width="100%"
            height="100%"
          />
        </Box>

        <Box m={5}>
          <Carousel
            navButtonsAlwaysVisible="true"
            autoPlay="true"
            animation="slide"
            NextIcon={<ArrowRight />}
            PrevIcon={<ArrowLeft />}
          >
            {items.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </Box>

        <Box display="flex" flexDirection="row">
          <Box m={5}>
            <Paper variant="outlined">
              <img
                src={home_files[1]}
                style={{ width: "100%" }}
                alt="meyerhoffer.com"
              />
            </Paper>
          </Box>
          <Box m={5}>
            <ReactPlayer
              playing={true}
              loop={true}
              url={home_files[2]}
              width="100%"
              height="100%"
            />
          </Box>
        </Box>

        {/*bootom links */}
        <Grid
          container
          direction="row"
          spacing={2}
          style={{ marginBottom: "20px" }}
        >
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleDrawerOpen("latch")}
            >
              Latch start up going public @ 1.6B
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleDrawerOpen("bloomberg")}
            >
              Mike Bloomberg Presidential Stragety
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleDrawerOpen()}
            >
              Design Patents
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleDrawerOpen()}
            >
              A life as a surfer
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleDrawerOpen()}
            >
              Surfboard designer
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleDrawerOpen("coca")}
            >
              Coca-Cola Glass
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleDrawerOpen()}
            >
              100 Million users every day
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleDrawerOpen()}
            >
              Cappellini chair
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleDrawerOpen()}
            >
              Outside Magazine cover story
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleDrawerOpen()}
            >
              Occasional race car dirver
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleDrawerOpen()}
            >
              Thomas talks with Tom Sachs
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleDrawerOpen()}
            >
              Multiple International design awards
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleDrawerOpen()}
            >
              Apple design group
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleDrawerOpen()}
            >
              Colette Paris
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleDrawerOpen()}
            >
              Slip In single fin
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleDrawerOpen()}
            >
              Start Up design and brand strategy
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleDrawerOpen()}
            >
              Bald Face home made snowboard
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleDrawerOpen()}
            >
              Soft Computer
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleDrawerOpen()}
            >
              First modern ski goggle
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleDrawerOpen()}
            >
              Porsche Design Intern
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleDrawerOpen()}
            >
              Up-cycled Snowboard
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleDrawerOpen()}
            >
              Medical design
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleDrawerOpen()}
            >
              Surfer surfing the boards all over the world
            </Button>
          </Grid>
        </Grid>
      </Box>
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
