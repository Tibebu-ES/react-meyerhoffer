import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Grid, Link } from "@material-ui/core";
import { CloudDownload } from "@material-ui/icons";
import ReactPlayer from "react-player";
import { about_files } from "../data/index";
import ReactAudioPlayer from "react-audio-player";
import audio from "../../assets/audio/intro.mp3";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "100px",
  },
  heading: {
    fontSize: "18px",
    fontFamily: "Century",
    marginBottom: "20px",
  },
  info: {
    marginBottom: "15px",
    background: "#90caf9",
  },
  surfer_info: {
    marginTop: "20px",
  },
  surfer_movie: {
    [theme.breakpoints.up("md")]: {
      fontSize: 26,
    },
    fontFamily: "Century",
    fontSize: "16px",
    marginBottom: "10px",
  },
  qoute_p: {
    fontSize: "11px",
    fontFamily: "Century",
    [theme.breakpoints.up("md")]: {
      padding: "30px",
      fontSize: "13px",
    },
    marginTop: "30px",
    marginBottom: "50px",
  },
  content_font: {
    fontFamily: "Century",
    fontSize: "11px",
    [theme.breakpoints.up("md")]: {
      fontSize: "13px",
    },
  },
  interview: {
    background: "#B2B1B9",
    marginTop: "50px",
  },

  hr_line: {
    color: "#000",
    backgroundColor: "#000",
    height: 1,
    marginBottom: "50px",
    marginTop: "50px",
  },
  press_link: {
    color: "#000",
    fontFamily: "Century",
    fontSize: "11px",
    [theme.breakpoints.up("md")]: {
      fontSize: "13px",
    },
  },
  grid_item: {
    margin: "auto",
  },

  player_wrapper: {
    position: "relative",
    paddingTop: "56.25% ",
  },

  react_player: {
    position: "absolute",
    top: 0,
    left: 0,
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={4} direction="column">
        <Grid item xs={6} md={4}>
          <img
            src={about_files[0]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
        </Grid>

        <Grid item container justifyContent="center" alignItems="center">
          <Grid item xs={8}>
            <img
              src={about_files[1]}
              width="100%"
              height="100%"
              alt="meyerhoffer.com"
            />
          </Grid>
        </Grid>

        <Grid item xs={12} md={12}>
          <Typography
            variant="body1"
            align="justify"
            className={classes.qoute_p}
          >
            "One time when I was in LA, I drove out to my old art school. It was
            a Saturday, so there was almost nobody around. I stopped in the art
            supplies store and bought some of my favorite items: some tape rolls
            that we used draw with, some notebooks, and my favorite pens. I
            began wondering how it was that I came to do this work, and how I
            got through it the early phase of my career. I had these tools, I’d
            learned a lot, and I had some vision about products. But I didn’t
            yet have the experience needed to fully realize that vision. When
            you have tools and vision, the central question becomes “Where do
            you want to go?” Right now, I’m in a pretty silent space, still
            trying to contemplate this. I strive to be more intuitive, focusing
            on the present moment – that’s what’s important. When opportunities
            arrive, I either say no, or I jump in and focus on it."
          </Typography>
        </Grid>

        <Grid
          container
          item
          xs={12}
          className={classes.surfer_info}
          alignItems="center"
        >
          <Grid container spacing={4} item>
            <Grid item xs={12} md={6}>
              <Typography paragraph className={classes.content_font}>
                SURFERS BLOOD MOVIE
              </Typography>
              <div className={classes.player_wrapper}>
                <ReactPlayer
                  className={classes.react_player}
                  controls={true}
                  url={"https://player.vimeo.com/video/341459769"}
                  width="100%"
                  height="100%"
                />
              </div>
            </Grid>

            <Grid item xs={12} md={4} className={classes.grid_item}>
              <Typography className={classes.surfer_movie}>
                Watch Surfers Blood movie
              </Typography>
              <Typography
                variant="body1"
                paragraph
                className={classes.content_font}
              >
                By renowned filmmaker Patrick Trefz explores the essence of the
                sport he loves by profiling those who inspire him, from Basque
                Country, Spain to Silicon Valley, USA (2016)
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid container item xs={12}>
          <Grid container item className={classes.qoute_p}>
            <Grid item xs={12} md={6}>
              <Typography paragraph className={classes.content_font}>
                Listen
              </Typography>
              <img src={about_files[3]} width="100%" alt="meyerhoffer.com" />
            </Grid>
            <Grid item xs={12} md={5} className={classes.grid_item}>
              <Grid
                container
                direction="column"
                spacing={2}
                alignItems="center"
              >
                <Grid item xs={12}>
                  <Typography variant="body1" className={classes.content_font}>
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
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <hr className={classes.hr_line} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography className={classes.heading}>BIOGRAPHY</Typography>
          <Typography
            align="justify"
            paragraph
            className={classes.content_font}
          >
            Thomas Meyerhoffer is the acclaimed creator of an extraordinarily
            diverse range of successful products with universal appeal. His
            simple and intuitive designs are experienced every day by many
            millions of users around the world.
          </Typography>
          <Typography
            align="justify"
            paragraph
            className={classes.content_font}
          >
            Thomas Meyerhoffer is the acclaimed creator of an extraordinarily
            diverse range of successful products with universal appeal. His
            simple and intuitive designs are experienced every day by many
            millions of users around the world.
          </Typography>
          <Typography
            align="justify"
            paragraph
            className={classes.content_font}
          >
            Meyerhoffer is the recipient of multiple international design awards
            and patents. His work has been featured in The New York Times,
            Outside Magazine and in Museums such as The Cooper Hewitt, New York,
            SFMOMA, San Francisco and Design Museum, London.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <hr className={classes.hr_line} />
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.heading}>SELECT PRESS</Typography>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12} md={4}>
              <img
                src={about_files[2]}
                width="100%"
                height="100%"
                alt="meyerhoffer.com"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography>
                <a
                  component={Link}
                  className={classes.press_link}
                  href="/outsidemagazine"
                >
                  Outside Magazine (Link)
                </a>
              </Typography>
              <Typography>
                <a
                  startIcon={<CloudDownload />}
                  className={classes.press_link}
                  component={Link}
                  href={about_files[5]}
                >
                  Domus Magazine (PDF)
                </a>
              </Typography>
              <Typography>
                <a
                  startIcon={<CloudDownload />}
                  className={classes.press_link}
                  component={Link}
                  href={about_files[6]}
                >
                  The New York Times (PDF)
                </a>
              </Typography>
              <Typography>
                <a
                  component={Link}
                  className={classes.press_link}
                  href="/surfersjournal"
                >
                  The Surfers Journal (Link)
                </a>
              </Typography>
              <Typography>
                <a
                  startIcon={<CloudDownload />}
                  className={classes.press_link}
                  component={Link}
                  href={about_files[7]}
                >
                  Case de Abitare(PDF)
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <hr className={classes.hr_line} />
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.heading}>RECOGNITION</Typography>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <Grid container direction="column">
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>2018</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>
                    Good Design Australia (Latch)
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>
                    IDEA Award (Latch)
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>
                    IF Award Germany (Latch)
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>
                    Good Design USA (Latch) (Latch)
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>2017</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>
                    IDEA Award (Latch)
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>
                    IDEA Award (Invuity)
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>
                    Good Design Australia (Latch)
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>
                    Good Design Australia (Invuity)
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>2016</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>
                    Good design Australia (Latch)
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>
                    IF Award Germany (Latch)
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>
                    IDEA Award (Latch)
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>2014</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>
                    IDEA Awards (Slip In)
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>2013</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>
                    Sacred Craft Best In Show (Slip In)
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>2012</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>
                    Design Museum London (Surfboard)
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>2010</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>
                    D&Ad Yellow Pencil (Surfboard)
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>
                    Good Design Australia (Surfboard)
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>
                    IDEA Awards (Surfboard)
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>
                    I.D. Magazine Awards (Surfboard)
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>2009</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>
                    IDEA Awards (Tork)
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>
                    IF Awards (Tork)
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>
                    Red Dot Awards (Tork)
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>2003</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>
                    IF Awards (Neil Pryde)
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>
                    IF Awards (Flow)
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>
                    &Red Dot Awards (Neil Pryde)
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>
                    Red Dot Awards (Flow)
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>
                    Wired (Danger Hip Top)
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>1997</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>
                    D&Ad Yellow Pencil (NEC)
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>
                    IF Awards Germany (Apple)
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>
                    Good Design USA (Apple)
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.content_font}>
                    I.D. Magazine Awards (Apple)
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <hr className={classes.hr_line} />
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.heading}>
            SELECT EXHIBITIONS
          </Typography>
          <Grid container direction="column" spacing={1}>
            <Grid item className={classes.content_font}>
              Cooper Hewitt Triennial 2006
            </Grid>
            <Grid item className={classes.content_font}>
              Blobjects & Beyond 2005
            </Grid>
            <Grid item className={classes.content_font}>
              Future Design Days 2005
            </Grid>
            <Grid item className={classes.content_font}>
              Die Neue Sammlung 2000
            </Grid>
            <Grid item className={classes.content_font}>
              SfMOMA, permanent collection 2000
            </Grid>
            <Grid item className={classes.content_font}>
              Beyond the Hype, Scandinavian Design 2000
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <hr className={classes.hr_line} />
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.heading}>SELECT PROJECTS</Typography>
          <Grid container direction="column" spacing={1}>
            <Grid item className={classes.content_font}>
              Apple
            </Grid>
            <Grid item className={classes.content_font}>
              Black Diamond
            </Grid>
            <Grid item className={classes.content_font}>
              Cappellini
            </Grid>
            <Grid item className={classes.content_font}>
              Danger Device
            </Grid>
            <Grid item className={classes.content_font}>
              Flow Snowboarding
            </Grid>
            <Grid item className={classes.content_font}>
              Latch
            </Grid>
            <Grid item className={classes.content_font}>
              Neil Pryde Windsurfing
            </Grid>
            <Grid item className={classes.content_font}>
              Nike
            </Grid>
            <Grid item className={classes.content_font}>
              Progio
            </Grid>
            <Grid item className={classes.content_font}>
              Scott
            </Grid>
            <Grid item className={classes.content_font}>
              Smith
            </Grid>
            <Grid item className={classes.content_font}>
              Sony Ericsson
            </Grid>
            <Grid item className={classes.content_font}>
              Vodafone
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
