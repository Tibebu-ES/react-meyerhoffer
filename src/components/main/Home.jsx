import React from "react";
import { Paper, Container, Box, Button, Grid } from "@material-ui/core";
import ReactPlayer from "react-player";
import Carousel from "react-material-ui-carousel";
import { ArrowRight, ArrowLeft } from "@material-ui/icons";

import h2 from "../../assets/h2.mp4";
import h3 from "../../assets/h3.jpg";
import h4 from "../../assets/h4.mp4";

import c1 from "../../assets/c1.jpg";
import c2 from "../../assets/c2.jpg";
import c3 from "../../assets/c3.jpg";
import c4 from "../../assets/c4.jpg";
import c5 from "../../assets/c5.jpg";

const Home = () => {
  var items = [
    {
      asset: c1,
    },
    {
      asset: c2,
    },
    {
      asset: c3,
    },
    {
      asset: c4,
    },
    {
      asset: c5,
    },
  ];

  function Item(props) {
    return (
      <Paper style={{ height: "550px" }}>
        <img src={props.item.asset} style={{ height: "100%", width: "100%" }} />
      </Paper>
    );
  }

  return (
    <Container>
      <Box display="flex" flexDirection="column">
        <Box m={5}>
          <ReactPlayer
            playing={true}
            loop={true}
            url={h2}
            width="100%"
            height="100%"
          />
        </Box>
        <Box m={5}>
          <Paper variant="outlined">
            <img src={h3} style={{ width: "90%" }} />
          </Paper>
        </Box>
        <Box m={5}>
          <ReactPlayer
            playing={true}
            loop={true}
            url={h4}
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
              <img src={h3} style={{ width: "100%" }} />
            </Paper>
          </Box>
          <Box m={5}>
            <ReactPlayer
              playing={true}
              loop={true}
              url={h4}
              width="100%"
              height="100%"
            />
          </Box>
        </Box>

        <Grid
          container
          direction="row"
          spacing={2}
          style={{ marginBottom: "20px" }}
        >
          <Grid item>
            <Button variant="outlined" color="primary" href="#">
              Mike Bloomberg Presidential Stragety
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" href="#">
              Design Patents
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" href="#">
              A life as a surfer
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" href="#">
              Surfboard designer
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" href="#">
              Coca-Cola Glass
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" href="#">
              100 Million users every day
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" href="#">
              Cappellini chair
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" href="#">
              Outside Magazine cover story
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" href="#">
              Occasional race car dirver
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" href="#">
              Thomas talks with Tom Sachs
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" href="#">
              Multiple International design awards
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" href="#">
              Apple design group
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" href="#">
              Colette Paris
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" href="#">
              Slip In single fin
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" href="#">
              Start Up design and brand strategy
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" href="#">
              Bald Face home made snowboard
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" href="#">
              Soft Computer
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" href="#">
              First modern ski goggle
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" href="#">
              Porsche Design Intern
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" href="#">
              Up-cycled Snowboard
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" href="#">
              Medical design
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" href="#">
              Surfer surfing the boards all over the world
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
