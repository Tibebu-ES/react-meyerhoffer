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
  Chip,
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
  biography_paper: {
    padding: "10px",
    background: "#3C5186",
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
          <Paper style={{ background: "#B2B1B9" }}>
            <Grid
              container
              display="flex"
              justifyContent="space-around"
              spacing={2}
              className={classes.qoute_p}
            >
              <Grid item md={6}>
                <Badge
                  badgeContent="Listen"
                  color="primary"
                  anchorOrigin={{ vertical: "top", horizontal: "left" }}
                >
                  <Paper style={{ height: "50%", width: "90%" }}>
                    <img
                      src={about_files[3]}
                      style={{ height: "100%", width: "100%" }}
                      alt="meyerhoffer.com"
                    />
                  </Paper>
                </Badge>
              </Grid>
              <Grid item md={5} style={{ alignSelf: "center" }}>
                <Grid
                  container
                  direction="column"
                  spacing={2}
                  alignItems="center"
                >
                  <Grid item xs={12}>
                    <Typography variant="span" marginBottom="10px">
                      Play and listen to Thomas interviewing Tom Sachs for the
                      Outside Genius Issue
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <ReactAudioPlayer src={audio} controls />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
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
            <Grid container display="flex" direction="row" spacing={6}>
              <Grid md={4} item>
                <Paper className={classes.biography_paper}>
                  <Typography align="justify">
                    Thomas Meyerhoffer is the acclaimed creator of an
                    extraordinarily diverse range of successful products with
                    universal appeal. His simple and intuitive designs are
                    experienced every day by many millions of users around the
                    world.
                  </Typography>
                </Paper>
              </Grid>
              <Grid md={4} item>
                <Paper className={classes.biography_paper}>
                  <Typography align="justify">
                    After taking positions at Apple, IDEO and Porsche,
                    Meyerhoffer founded his integrated design studio in Montara,
                    California, in 1999.
                  </Typography>
                </Paper>
              </Grid>
              <Grid md={4} item>
                <Paper className={classes.biography_paper}>
                  <Typography align="justify">
                    Meyerhoffer is the recipient of multiple international
                    design awards and patents. His work has been featured in The
                    New York Times, Outside Magazine and in Museums such as The
                    Cooper Hewitt, New York, SFMOMA, San Francisco and Design
                    Museum, London.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
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
                  <a href="#">Outside Magazine (Link)</a>
                </Typography>
                <Typography>
                  <a href="#">Domus Magazine (PDF)</a>
                </Typography>
                <Typography>
                  <a href="#"> The New York Times (PDF)</a>
                </Typography>
                <Typography>
                  <a href="#">The Surfers Journal (Link)</a>
                </Typography>
                <Typography>
                  <a href="#">Case de Abitare(PDF)</a>
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
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="space-evenly"
            >
              <Grid item md={3}>
                <Badge
                  badgeContent={2018}
                  max={3000}
                  color="primary"
                  style={{
                    background: "#A2DBFA",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                  anchorOrigin={{ vertical: "top", horizontal: "left" }}
                >
                  <Grid container display="flex" direction="column" spacing={2}>
                    <Grid item xs={12}>
                      <Chip
                        label="Good Design Australia (Latch)"
                        color="secondary"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Chip label="IDEA Award (Latch)" color="secondary" />
                    </Grid>
                    <Grid item xs={12}>
                      <Chip
                        label="IF Award Germany (Latch)"
                        color="secondary"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Chip
                        label="Good Design USA (Latch) (Latch)"
                        color="secondary"
                      />
                    </Grid>
                  </Grid>
                </Badge>
              </Grid>

              <Grid item md={3}>
                <Badge
                  badgeContent={2017}
                  max={3000}
                  color="primary"
                  style={{
                    background: "#A2DBFA",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                  anchorOrigin={{ vertical: "top", horizontal: "left" }}
                >
                  <Grid container display="flex" direction="column" spacing={2}>
                    <Grid item xs={12}>
                      <Chip label="IDEA Award (Latch)" color="secondary" />
                    </Grid>
                    <Grid item xs={12}>
                      <Chip label="IDEA Award (Invuity)" color="secondary" />
                    </Grid>
                    <Grid item xs={12}>
                      <Chip
                        label="Good Design Australia (Latch)"
                        color="secondary"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Chip
                        label="Good Design Australia (Invuity)"
                        color="secondary"
                      />
                    </Grid>
                  </Grid>
                </Badge>
              </Grid>

              <Grid item md={3}>
                <Badge
                  badgeContent={2016}
                  max={3000}
                  color="primary"
                  style={{
                    background: "#A2DBFA",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                  anchorOrigin={{ vertical: "top", horizontal: "left" }}
                >
                  <Grid container display="flex" direction="column" spacing={2}>
                    <Grid item xs={12}>
                      <Chip
                        label="Good design Australia (Latch)"
                        color="secondary"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Chip
                        label="IF Award Germany (Latch)"
                        color="secondary"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Chip label="IDEA Award (Latch)" color="secondary" />
                    </Grid>
                  </Grid>
                </Badge>
              </Grid>

              <Grid item md={3}>
                <Badge
                  badgeContent={2010}
                  max={3000}
                  color="primary"
                  style={{
                    background: "#A2DBFA",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                  anchorOrigin={{ vertical: "top", horizontal: "left" }}
                >
                  <Grid container display="flex" direction="column" spacing={2}>
                    <Grid item xs={12}>
                      <Chip
                        label="D&Ad Yellow Pencil (Surfboard)"
                        color="secondary"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Chip
                        label="Good Design Australia (Surfboard)"
                        color="secondary"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Chip label="IDEA Awards (Surfboard)" color="secondary" />
                    </Grid>
                    <Grid item xs={12}>
                      <Chip
                        label="I.D. Magazine Awards (Surfboard)"
                        color="secondary"
                      />
                    </Grid>
                  </Grid>
                </Badge>
              </Grid>

              <Grid item md={3}>
                <Badge
                  badgeContent={2009}
                  max={3000}
                  color="primary"
                  style={{
                    background: "#A2DBFA",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                  anchorOrigin={{ vertical: "top", horizontal: "left" }}
                >
                  <Grid container display="flex" direction="column" spacing={2}>
                    <Grid item xs={12}>
                      <Chip label="IDEA Awards (Tork)" color="secondary" />
                    </Grid>
                    <Grid item xs={12}>
                      <Chip label="IF Awards (Tork)" color="secondary" />
                    </Grid>
                    <Grid item xs={12}>
                      <Chip label="Red Dot Awards (Tork)" color="secondary" />
                    </Grid>
                  </Grid>
                </Badge>
              </Grid>

              <Grid item md={3}>
                <Badge
                  badgeContent={2003}
                  max={3000}
                  color="primary"
                  style={{
                    background: "#A2DBFA",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                  anchorOrigin={{ vertical: "top", horizontal: "left" }}
                >
                  <Grid container display="flex" direction="column" spacing={2}>
                    <Grid item xs={12}>
                      <Chip label="IF Awards (Neil Pryde)" color="secondary" />
                    </Grid>
                    <Grid item xs={12}>
                      <Chip label="IF Awards (Flow)" color="secondary" />
                    </Grid>
                    <Grid item xs={12}>
                      <Chip
                        label="&Red Dot Awards (Neil Pryde)"
                        color="secondary"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Chip label="Red Dot Awards (Flow)" color="secondary" />
                    </Grid>
                    <Grid item xs={12}>
                      <Chip label="Wired (Danger Hip Top)" color="secondary" />
                    </Grid>
                  </Grid>
                </Badge>
              </Grid>

              <Grid item md={3}>
                <Badge
                  badgeContent={1997}
                  max={3000}
                  color="primary"
                  style={{
                    background: "#A2DBFA",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                  anchorOrigin={{ vertical: "top", horizontal: "left" }}
                >
                  <Grid container display="flex" direction="column" spacing={2}>
                    <Grid item xs={12}>
                      <Chip
                        label="D&Ad Yellow Pencil (NEC)"
                        color="secondary"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Chip
                        label="IF Awards Germany (Apple)"
                        color="secondary"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Chip label="Good Design USA (Apple)" color="secondary" />
                    </Grid>
                    <Grid item xs={12}>
                      <Chip
                        label="I.D. Magazine Awards (Apple)"
                        color="secondary"
                      />
                    </Grid>
                  </Grid>
                </Badge>
              </Grid>

              <Grid item md={3}>
                <Grid container direction="column" spacing={2}>
                  <Grid item md={3}>
                    <Badge
                      badgeContent={2014}
                      max={3000}
                      color="primary"
                      style={{
                        background: "#A2DBFA",
                        padding: "10px",
                        borderRadius: "10px",
                      }}
                      anchorOrigin={{ vertical: "top", horizontal: "left" }}
                    >
                      <Grid
                        container
                        display="flex"
                        direction="column"
                        spacing={2}
                      >
                        <Grid item xs={12}>
                          <Chip
                            label="IDEA Awards (Slip In)"
                            color="secondary"
                          />
                        </Grid>
                      </Grid>
                    </Badge>
                  </Grid>

                  <Grid item md={3}>
                    <Badge
                      badgeContent={2013}
                      max={3000}
                      color="primary"
                      style={{
                        background: "#A2DBFA",
                        padding: "10px",
                        borderRadius: "10px",
                      }}
                      anchorOrigin={{ vertical: "top", horizontal: "left" }}
                    >
                      <Grid
                        container
                        display="flex"
                        direction="column"
                        spacing={2}
                      >
                        <Grid item xs={12}>
                          <Chip
                            label="Sacred Craft Best In Show (Slip In)"
                            color="secondary"
                          />
                        </Grid>
                      </Grid>
                    </Badge>
                  </Grid>

                  <Grid item md={3}>
                    <Badge
                      badgeContent={2012}
                      max={3000}
                      color="primary"
                      style={{
                        background: "#A2DBFA",
                        padding: "10px",
                        borderRadius: "10px",
                      }}
                      anchorOrigin={{ vertical: "top", horizontal: "left" }}
                    >
                      <Grid
                        container
                        display="flex"
                        direction="column"
                        spacing={2}
                      >
                        <Grid item xs={12}>
                          <Chip
                            label="Design Museum London (Surfboard)"
                            color="secondary"
                          />
                        </Grid>
                      </Grid>
                    </Badge>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
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
