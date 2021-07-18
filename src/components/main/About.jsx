import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Container,
  Box,
  Grid,
  Badge,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import ReactPlayer from "react-player";
import { about_files } from "../data/index";
import ReactAudioPlayer from "react-audio-player";
import audio from "../../assets/dialog.ogg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "50px",
    marginBottom: "50px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    flexBasis: "33.33%",
    flexShrink: 0,
    fontFamily: "bold",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  info: {
    marginBottom: "15px",
    background: "#90caf9",
  },
  surfer_info: {
    margin: "50px",
  },
  qoute: {
    margin: "50px",
    background: "#2E8BC0",
  },
  qoute_p: {
    padding: "45px",
    fontFamily: "Open Sans",
    color: "#fff",
  },
}));

const About = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={6} md={5}>
              <Paper style={{ height: "90%", width: "90%" }}>
                <img
                  src={about_files[0]}
                  style={{ height: "100%", width: "100%" }}
                  alt="meyerhoffer.com"
                />
              </Paper>
            </Grid>
            <Grid item xs={8} md={6}>
              <ReactPlayer
                playing={true}
                loop={true}
                url={about_files[1]}
                style={{ height: "100%", width: "100%" }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={12} align="center">
          <Paper className={classes.qoute}>
            <Typography
              variant="body1"
              align="center"
              className={classes.qoute_p}
            >
              "One time when I was in LA, I drove out to my old art school. It
              was a Saturday, so there was almost nobody around. I stopped in
              the art supplies store and bought some of my favorite items: some
              tape rolls that we used draw with, some notebooks, and my favorite
              pens. I began wondering how it was that I came to do this work,
              and how I got through it the early phase of my career. I had these
              tools, I’d learned a lot, and I had some vision about products.
              But I didn’t yet have the experience needed to fully realize that
              vision. When you have tools and vision, the central question
              becomes “Where do you want to go?” Right now, I’m in a pretty
              silent space, still trying to contemplate this. I strive to be
              more intuitive, focusing on the present moment – that’s what’s
              important. When opportunities arrive, I either say no, or I jump
              in and focus on it."
            </Typography>
          </Paper>
        </Grid>

        <Grid item md={12} className={classes.surfer_info}>
          <Typography variant="h6">SURFERS BLOOD</Typography>
          <Box display="flex" flexDirection="row">
            <Box md={6}>
              <ReactPlayer controls={true} url={about_files[4]} />
            </Box>
            <Box md={6} style={{ marginLeft: "35px", marginTop: "80px" }}>
              <Typography variant="h6">Watch Surfers Blood movie</Typography>
              <Typography
                variant="body1"
                paragraph
                style={{ marginTop: "10px" }}
              >
                By renowned filmmaker Patrick Trefz explores the essence of the
                sport he loves by profiling those who inspire him, from Basque
                Country, Spain to Silicon Valley, USA (2016)
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item md={12}>
          <Paper style={{ height: "500px" }}>
            <img
              src={about_files[3]}
              style={{ height: "100%", width: "100%" }}
              alt="meyerhoffer.com"
            />
          </Paper>
        </Grid>
      </Grid>

      <div className={classes.root}>
        <Accordion
          className={classes.info}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>BIOGRAPHY</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Thomas Meyerhoffer is the acclaimed creator of an extraordinarily
              diverse range of successful products with universal appeal. His
              simple and intuitive designs are experienced every day by many
              millions of users around the world.
            </Typography>
            <Typography>
              After taking positions at Apple, IDEO and Porsche, Meyerhoffer
              founded his integrated design studio in Montara, California, in
              1999.
            </Typography>
            <Typography>
              Meyerhoffer is the recipient of multiple international design
              awards and patents. His work has been featured in The New York
              Times, Outside Magazine and in Museums such as The Cooper Hewitt,
              New York, SFMOMA, San Francisco and Design Museum, London.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={classes.info}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>SELECT PRESS</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <img
                  src={about_files[2]}
                  style={{ height: "90%", width: "100%" }}
                  alt="meyerhoffer.com"
                />
              </Grid>
              <Grid item xs={12} md={4} style={{ marginLeft: "30px" }}>
                <Typography>
                  Outside Magazine (Link) Domus Magazine (PDF) The New York
                  Times (PDF) The Surfers Journal (Link) Case de Abitare(PDF)
                </Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={classes.info}
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>RECOGNITION</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Good Design Australia (Latch) IDEA Award (Latch) IF Award Germany
              (Latch) Good Design USA (Latch) 2017 IDEA Award (Latch) IDEA Award
              (Invuity) Good Design Australia (Latch) Good Design Australia
              (Invuity) 2016 Good design Australia (Latch) IF Award Germany
              (Latch) IDEA Award (Latch) 2014 IDEA Awards (Slip In) 2013 Sacred
              Craft Best In Show (Slip In) 2012 Design Museum London (Surfboard)
              2010 D&Ad Yellow Pencil (Surfboard) Good Design Australia
              (Surfboard) IDEA Awards (Surfboard) I.D. Magazine Awards
              (Surfboard) 2009 IDEA Awards (Tork) IF Awards (Tork) Red Dot
              Awards (Tork) 2003 IF Awards (Neil Pryde) IF Awards (Flow) &Red
              Dot Awards (Neil Pryde) Red Dot Awards (Flow) Wired (Danger Hip
              Top) 1997 D&Ad Yellow Pencil (NEC) IF Awards Germany (Apple) Good
              Design USA (Apple) I.D. Magazine Awards (Apple)
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={classes.info}
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className={classes.heading}>SELECT PRESS</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat
              lectus, varius pulvinar diam eros in elit. Pellentesque convallis
              laoreet laoreet.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={classes.info}
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography className={classes.heading}>
              SELECT EXHIBITIONS
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Cooper Hewitt Triennial 2006 Blobjects & Beyond 2005 Future Design
              Days 2005 Die Neue Sammlung 2000 SfMOMA, permanent collection 2000
              Beyond the Hype, Scandinavian Design 2000
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={classes.info}
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel6bh-content"
            id="panel5bh-header"
          >
            <Typography className={classes.heading}>SELECT PROJECTS</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Apple Black Diamond Cappellini Danger Device Flow Snowboarding
              Latch Neil Pryde Windsurfing Nike Progio Scott Smith Sony Ericsson
              Vodafone
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Container>
  );
};

export default About;
