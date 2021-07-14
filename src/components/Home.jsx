import React from "react";
import { Grid, Paper, Container, Box } from "@material-ui/core";
import ReactPlayer from "react-player";
import Carousel from "react-material-ui-carousel";
import { ArrowRight, ArrowLeft } from "@material-ui/icons";

import h2 from "../assets/h2.mp4";
import h3 from "../assets/h3.jpg";
import h4 from "../assets/h4.mp4";

import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.jpg";
import c5 from "../assets/c5.jpg";

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
      <Paper style={{ height: "500px" }}>
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
            <img src={h3} style={{ width: "100%", height: "10px" }} />
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
      </Box>
    </Container>
  );
};

export default Home;
