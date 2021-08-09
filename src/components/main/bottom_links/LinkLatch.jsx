import React from "react";
import { Grid, Typography, Container, Link, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { object_files, home_files } from "../../data/index";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
  bio_grid: {
    marginTop: "50px",
  },
  par_content: {
    fontFamily: "Century",
    fontSize: "13px",
    color: "#000000",
    width: "62.5vw",
    [theme.breakpoints.down("sm")]: {
      fontSize: "11px",
      width: "100%",
    },
  },
  title: {
    fontFamily: "GenathDisplay",
    fontWeight: 700,
    fontSize: "56px",
    color: "#1c1c1c",
  },
  title_grid: {
    marginTop: "45px",
    marginBottom: "35px",
  },
  shop_item_vertical: {},
  shop_item_horizontal: {},
  img: {
    maxWidth: "100%",
  },
}));

const LinkLatch = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container direction="column">
        <Grid container spacing={2} direction="column">
          <Grid item xs={12} className={classes.title_grid}>
            <Typography variant="h3" className={classes.title}>
              WE DID <br />
              AN APPLE.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.par_content} paragraph>
              Thomas is Co-founder and CDO of LATCH and responsible for creating
              Latch unique and innovative hardware platform on which LATCH
              developed an operating system and services. With strategic design
              thinking LATCH has built a proprietary ecosystem of hardware,
              software, and services, enabling people to live and work in better
              ways. Latch (LTCH) went public with a $ 1.6B valuation in June of
              2021.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4} direction="column">
          <Grid item xs={6} className={classes.shop_item_vertical}>
            <img
              src={object_files[0].asset}
              className={classes.img}
              alt="Meyerhoffer design projects"
            />
          </Grid>

          <Grid item xs={12} md={8} className={classes.shop_item_horizontal}>
            <img
              src={home_files[84]}
              className={classes.img}
              alt="Meyerhoffer design projects"
            />
          </Grid>

          <Grid item xs={6} className={classes.shop_item_vertical}>
            <img
              src={home_files[81]}
              className={classes.img}
              alt="Meyerhoffer design projects"
            />
            <Typography
              className={classes.par_content}
              align="justify"
              paragraph
            >
              <Button component={Link} href={home_files[14]} target="_blank">
                <u className={classes.par_content}>Read the Medium article</u>
              </Button>
              Latch's first investor Brad Svrluga, General Partner @ Primary
              Venture Partners, wrote about how he met Luke and Thomas and what
              made him understand why this project was special.
            </Typography>
          </Grid>

          <Grid item xs={6} className={classes.shop_item_horizontal}>
            <img
              src={home_files[82]}
              className={classes.img}
              alt="Meyerhoffer design projects"
            />
          </Grid>

          <Grid item xs={12} md={8} className={classes.shop_item_horizontal}>
            <ReactPlayer
              playing={true}
              loop={true}
              url={home_files[83]}
              width="100%"
              height="100%"
            />
            <Typography className={classes.par_content}>
              Latch Lens in action. Designed technology, enabling new
              possibilities.
            </Typography>
          </Grid>

          <Grid item xs={12} md={8} className={classes.shop_item_horizontal}>
            <img
              src={home_files[10]}
              className={classes.img}
              alt="Meyerhoffer design projects"
            />
          </Grid>

          <Grid item xs={12} md={8} className={classes.shop_item_horizontal}>
            <img
              src={home_files[12]}
              className={classes.img}
              alt="Meyerhoffer design projects"
            />

            <Typography className={classes.par_content} paragraph>
              Thomas searched for the meaning of the object, aiming to create an
              iconic family of universally understood products that will last
              for a long time.
            </Typography>
          </Grid>

          <Grid item xs={12} md={8} className={classes.shop_item_horizontal}>
            <img
              src={home_files[13]}
              className={classes.img}
              alt="meyerhoffer.com"
            />
          </Grid>

          <Grid item xs={6} className={classes.shop_item_horizontal}>
            <img
              src={home_files[11]}
              className={classes.img}
              alt="meyerhoffer.com"
            />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          direction="column"
          className={classes.bio_grid}
        >
          <Grid item>
            <Typography className={classes.par_content}>
              PROJECT: LATCH <br />
              YEAR: 2015-2021
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body1"
              paragraph
              className={classes.par_content}
            >
              INFORMATION: Thomas is Co-founder & Chief Design Officer of Latch,
              responsible for Design, Experience and Brand. He started Latch
              together with Luke Schoenfelder and Brian Jones in 2015.
            </Typography>

            <Typography
              variant="body1"
              paragraph
              className={classes.par_content}
            >
              Thomas finds projects that deal with fundamental parts of our
              daily life particularly interesting. How do we keep traditional
              values when we transition into the virtual world? A digital
              experience should deliver the same sense of meaning we already
              know and understand.
            </Typography>

            <Typography
              variant="body1"
              paragraph
              className={classes.par_content}
            >
              Latch was designed with trust, longevity and mindfulness as
              guiding values. The aim was to create a system that is so simple
              to understand that anyone, anywhere in the world, is able to take
              part in the essential exchange of access and services—enabling
              seamless interaction between the many participants and services
              that is part of our modern village.
            </Typography>

            <Typography
              variant="body1"
              paragraph
              className={classes.par_content}
            >
              "When you aim to create a simple, universal and human experience,
              you need to lead with humanistic values, not digital complexity,"
              says Thomas. Latch design is mindful of technology and digital
              privacy limitations so users can connect on a personal level.
            </Typography>

            <Typography
              variant="body1"
              paragraph
              className={classes.par_content}
            >
              The Latch lens is perhaps the core invention of the Latch
              ecosystem. All Latch products share this same simple interface.
              It's inviting and easy to understand. Billed by The New York Times
              as the "the unblinking eye". Its simple design a key to Latch
              success.
            </Typography>

            <Typography
              variant="body1"
              paragraph
              className={classes.par_content}
            >
              Latch is going public at a $ 1.6B valuation on June 7th, 2021.
            </Typography>

            <Typography
              variant="body1"
              paragraph
              className={classes.par_content}
            >
              RECOGNITION: Latch has been recognized with eleven international
              design awards 2016-2019.
            </Typography>

            <Typography variant="body1" className={classes.par_content}>
              Four Good Design Australia Awards
            </Typography>

            <Typography variant="body1" className={classes.par_content}>
              Four IF Awards
            </Typography>

            <Typography variant="body1" className={classes.par_content}>
              Two IDSA award
            </Typography>

            <Typography variant="body1" className={classes.par_content}>
              One Good Design Award (USA)
            </Typography>
            <br />
            <Typography variant="body1" className={classes.par_content}>
              SELECT PRESS
            </Typography>
            <br />
            <Typography variant="body1" className={classes.par_content}>
              <a href="/newyorktimes" className={classes.par_content}>
                The New York Times(Link)
              </a>
            </Typography>
            <Typography variant="body1" className={classes.par_content}>
              <a
                className={classes.par_content}
                rel="noreferrer"
                target="_blank"
                href={home_files[14]}
              >
                Medium article
              </a>{" "}
              Brad Svrluga, General Partner @ Primary Venture Partners
            </Typography>
            <br />
            <Typography variant="body1" className={classes.par_content}>
              CREDITS: Photography: Christoffer Dalkarls
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LinkLatch;
