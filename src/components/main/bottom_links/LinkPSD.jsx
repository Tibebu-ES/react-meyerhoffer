import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid, Typography } from "@material-ui/core";
import ReactPlayer from "react-player";
import { home_files } from "../../data/index";
import Shop from "../Shop";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: "10vw 6.25vw  0 6.25vw;",
  },
  content_font: {
    fontFamily: "Century",
    fontSize: "13px",
    color: "#000000",
    [theme.breakpoints.down("sm")]: {
      fontSize: "11px",
    },
  },
  title_font: {
    fontFamily: "GenathDisplay",
    fontWeight: "bold",
    fontSize: "56px",
  },
  content_font_sboard: {
    fontFamily: "Centruy",
    fontStyle: "italic",
  },
  hr_line: {
    color: "#000",
    backgroundColor: "#000",
    height: "1px",
    marginTop: "50px",
    marginBottom: "50px",
  },
  img: { width: "100%", height: "auto" },
}));

const LinkPSD = () => {
  const classes = useStyle();

  return (
    <Grid container direction="column" spacing={1} className={classes.root}>
      {/* section 1 */}
      <Grid container direction="column" spacing={6}>
        <Grid item xs={12} md={9}>
          <Typography
            paragraph
            align="justify"
            className={classes.content_font}
          >
            "My latest model is Full Circle. It took me a long time to get to
            this point. That is how it got its name. I could consider myself
            done after this. Most likely not. Ha! This model is already morphing
            into a twin fin. Which i like a lot. Full Circle is based on the
            original design that was introduced 15 years ago now. The original
            concept remains. A narrow waist, with its iconic side cut. The tail
            has the widest point way back and a deep double spiral vee for
            speed. The concept work across a wide range. I like the mid lengths
            the most."
          </Typography>
        </Grid>

        <Grid xs={12} container item style={{ marginBottom: "80px" }}>
          <Grid item xs={12} md={9}>
            <img src={home_files[45]} width="100%" alt="meyerhoffer.com" />
          </Grid>
        </Grid>

        <Grid
          container
          item
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={9}
        >
          <Grid item xs={8} md={8}>
            <img src={home_files[46]} width="100%" alt="meyerhoffer.com" />
          </Grid>
        </Grid>

        <Grid item>
          <Typography className={classes.content_font}>
            FULL CIRCLE 2021
          </Typography>
        </Grid>

        <Grid item xs={6} md={6}>
          <img src={home_files[47]} width="100%" alt="meyerhoffer.com" />
        </Grid>

        <Grid item xs={12} md={9}>
          <ReactPlayer
            controls={true}
            url={home_files[80]}
            width="100%"
            height="100%"
          />
          <Typography className={classes.content_font} paragraph>
            Thomas surfing his home made board at a home made wave. The Surf
            Ranch & Full Circle.
          </Typography>
        </Grid>

        <Grid item xs={12} md={8}>
          <ReactPlayer
            playing={true}
            loop={true}
            url={home_files[85]}
            width="100%"
            height="100%"
          />
        </Grid>

        <Grid
          container
          item
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={9}
        >
          <Grid item xs={8} md={8}>
            <ReactPlayer
              controls={true}
              url={home_files[48]}
              width="100%"
              height="100%"
            />
          </Grid>
        </Grid>

        <Grid item>
          <Typography className={classes.content_font}>
            A CONVERSATION WITH MARC ANDREINI AND THOMAS MEYERHOFFER
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <hr className={classes.hr_line} />
        </Grid>
      </Grid>

      {/* Section 2 - SLIP IN */}
      <Grid container direction="column" spacing={6}>
        <Grid item xs={12}>
          <Typography className={classes.title_font} paragraph>
            SLIP IN
          </Typography>
        </Grid>

        <Grid item xs={12} md={8}>
          <img
            src={home_files[63]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
          <Typography paragraph className={classes.content_font}>
            Early Slip In protoype, this board won Best In Show at The Boardroom
            Show
          </Typography>
        </Grid>

        <Grid item xs={12} md={8}>
          <ReactPlayer
            controls={true}
            width="100%"
            url="https://youtu.be/9fHlE8H6HPQ"
          />
          <Typography paragraph className={classes.content_font}>
            Josh Mulcoy on the Slip In somehwere in Mexcio.
          </Typography>
        </Grid>

        <Grid item xs={6} md={4}>
          <img
            src={home_files[64]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
        </Grid>

        <Grid item xs={6} md={4}>
          <img src={home_files[65]} width="100%" alt="meyerhoffer.com" />
        </Grid>

        <Grid item xs={6} md={4}>
          <img src={home_files[66]} width="100%" alt="meyerhoffer.com" />
          <Typography className={classes.content_font_sboard} paragraph>
            Surf In Surfboard. 2010
          </Typography>
        </Grid>

        <Grid item xs={12} md={8}>
          <img src={home_files[67]} width="100%" alt="meyerhoffer.com" />
          <Typography className={classes.content_font}>
            Josh Mulcoy in mex
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <hr className={classes.hr_line} />
        </Grid>
      </Grid>

      {/*SECTION 3 -  SURFERS BLOOD*/}
      <Grid container direction="column" spacing={6}>
        <Grid item xs={12}>
          <Typography className={classes.title_font}>
            SURFERS<span className={classes.content_font_sboard}>BLOOD.</span>
          </Typography>
        </Grid>

        <Grid item xs={12} md={9}>
          <ReactPlayer
            controls={true}
            url={home_files[62]}
            width="100%"
            height="100%"
          />
          <Typography className={classes.content_font} paragraph>
            Watch SURFERS BLOOD. The award winning surf movie by Patrick Trefz.
            Watch Thomas together with Basque surfers Kepa Acero, Natxo Gonzalez
            and Californian's Flea Vitrostko, Josh Mulcoy, Richard Kenvin and
            Shawn Barron. 2016.
          </Typography>
        </Grid>
        <Grid item xs={6} md={5}>
          <img src={home_files[61]} width="100%" alt="meyerhoffer.com" />
          <Typography className={classes.content_font} paragraph>
            Patrick Trefz & Thomas at the world premier during San Sebastian's
            film festival
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <hr className={classes.hr_line} />
        </Grid>
      </Grid>

      {/* SECTION 4 : Flex fin by Futures.*/}
      <Grid container direction="column" spacing={6}>
        <Grid item xs={12}>
          <Typography variant="h4" className={classes.title_font}>
            Flex fin by Futures.
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <img
            src={home_files[60]}
            width="100%"
            height="100%"
            alt="meyerhoffer.com"
          />
          <Typography className={classes.content_font} paragraph>
            Flex Fin by Futures
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <hr className={classes.hr_line} />
        </Grid>
      </Grid>

      {/* SECTION 5 : Surf shop.*/}
      <Shop />

      <Grid item xs={12}>
        <hr className={classes.hr_line} />
      </Grid>

       {/* SECTION 6 : THE JOURNEY  AND THE PEOPLE.*/}
      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" paragraph className={classes.title_font}>
              THE JOURNEY <br/>
              AND THE PEOPLE.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              directio="row"
              spacing={1}
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Grid item xs={12} md={6}>
                <img src={home_files[49]} width="100%" alt="meyerhoffer.com" />
                <Typography className={classes.content_font} paragraph>
                  Original Board
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <img src={home_files[50]} width="100%" alt="meyerhoffer.com" />
                <Typography className={classes.content_font} paragraph>
                  Thomas first boards, featured in The New York Times and at The
                  Cooper Hewitt Triennial in 1996
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              directio="row"
              spacing={1}
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Grid item xs={12} md={6}>
                <img src={home_files[56]} width="100%" alt="meyerhoffer.com" />
                <Typography className={classes.content_font} paragraph>
                  Quiver from 2016
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <img src={home_files[52]} width="100%" alt="meyerhoffer.com" />
                <Typography className={classes.content_font} paragraph>
                  Shapings
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              directio="row"
              spacing={1}
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Grid item xs={12} md={6}>
                <img src={home_files[51]} width="100%" alt="meyerhoffer.com" />
                <Typography className={classes.content_font} paragraph>
                  LegoZoo one of Thomas first boards, featured in The Surfers
                  Journal
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <img src={home_files[54]} width="100%" alt="meyerhoffer.com" />
                <Typography className={classes.content_font} paragraph>
                  Mike with Original 9.1
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              directio="row"
              spacing={1}
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Grid item xs={12} md={8}>
                <img src={home_files[53]} width="100%" alt="meyerhoffer.com" />
                <Typography className={classes.content_font} paragraph>
                  Thomas outside his old studio
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <img src={home_files[55]} width="100%" alt="meyerhoffer.com" />
                <Typography className={classes.content_font} paragraph>
                  Cad developments
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <img src={home_files[58]} width="100%" alt="meyerhoffer.com" />
                <Typography className={classes.content_font} paragraph>
                  Pukas Family with Bob, Cedric and Steve.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <img src={home_files[57]} width="100%" alt="meyerhoffer.com" />
                <Typography className={classes.content_font} paragraph>
                  Bob Mc Tavish and Thomas surfing Geuthary
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <img src={home_files[59]} width="100%" alt="meyerhoffer.com" />
                <Typography className={classes.content_font} paragraph>
                  Baja, San Somewhere. On our way to one of the favorite testing
                  grounds. Stack of board in the back.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* SECTION 7 : Bio.*/}
      <Grid item xs={12}>
        <Grid container direction="column">
          <Grid item xs={12}>
            <Typography paragraph className={classes.content_font}>
              PROJECT: THE SURFBOARD PROJECT
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography paragraph className={classes.content_font}>
              YEAR: 2000-CURRENT
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography paragraph className={classes.content_font}>
              PROJECT: THE SURFBOARD PROJECT
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              align="justify"
              paragraph
              className={classes.content_font}
            >
              INFORMATION: Many years ago I began by wondering if you could
              create a different experience by altering the form of probably the
              most recognized shape in the world. The surfboard. It became a
              journey where i explored the shape of the design icon. And along
              the way got to meet some truly inspiering individuals and got to
              travel acorss the globe. It's funny though, a very well regarded
              and distiguished surfer - that will remain unknown, once told me
              "The worst thing with surfing is surfers!" At the time i did nto
              want to beleive. However after shapinng and surfing for the last
              20 years i now know he was right. Today i shape for the
              expereicne, I very fortunate i do not have to make a living
              shaping boards for "surfers". I am very greatful to have met a few
              of the people thhat has seen it all in the surf industry. And i am
              doing my best to learn form them. Therfeore i am not in the
              business of making surfboards, i am only making a few for myself
              and dear friends across teh globe. For me, Its all about the
              experience. When i started, the intention was to see if you can
              alter the known surfboard shape to create an altered experience.
              The feeling. In the motion. On a wave. A short moment where the
              slightest tweak can alter your total experience. By utalized my
              experience in shaping foam from design school with my work tool,
              computer modeling It was the same method that we designed the iMac
              and many other objects with. So it was not that difficult ot
              change the surfboard shape. Its quite simple you know. What was
              hard was the painstaking process of building and testing them.
              Surfing them. One by one. Trying ot understand. Listening.
              Learnign. Failing. Sometimes they where surfed by very good
              surfers. But most of the times by myself across the street. In
              mexico. Europe. Barbados. On foggy drizzly days. On world class
              days. Always with the aim to understand. And to find new ways of
              exploring refining and evolving. It became a long journey. Where I
              was fortunate to meet some amazing shares and surfers all over the
              world. So valuable. And a lifetime memory. I decided to celebrate
              this journey. Of this projects longevity and incredibly valuable
              journey. Research, craft and design. Onwards.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.content_font}>
              RECOGNITION: Best in Show, Board Room Show, California
            </Typography>
            <Typography className={classes.content_font}>
              A few international design awards
            </Typography>
            <Typography paragraph className={classes.content_font}>
              Exhibited at the Design Museum, London
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.content_font}>
              PROJECT: THE SURFBOARD PROJECT
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.content_font}>
              PRESS: The New York Times. The Ninth Annual Year in Ideas.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.content_font}>
              CREDITS: Photography: Christoffer Dalkars
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LinkPSD;
