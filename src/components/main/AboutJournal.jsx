import React from "react";
import { Typography, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ab1 from "../../assets/images/ab1.jpg";
import ab2 from "../../assets/images/ab2.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "200px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "100px",
    },
  },
  content: {
    fontFamily: "Century",
    fontSize: "13px",
    marginTop: "25px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "11px",
    },
  },
  title: {
    fontFamily: "GenathDisplay",
    fontSize: "50px",
    fontWeight: "700px",
    lineHeight: "70px",
    marginBottom: "30px",
  },
}));

const AboutJournal = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid className={classes.root}>
        <Grid item xs={4} md={3}>
          <img
            src={ab1}
            width="100%"
            height="100%"
            alt="thomasmeyerhoffer.com"
          />
        </Grid>

        <Grid
          style={{ marginTop: "50px", marginBottom: "50px" }}
          item
          xs={6}
          md={3}
        >
          <Typography className={classes.title}>The Surfers Journal</Typography>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item xs={6} md={5}>
            <img
              src={ab2}
              width="100%"
              height="100%"
              alt="thomasmeyerhoffer.com"
            />
          </Grid>

          <Grid item xs={11} md={10}>
            <Typography align="justify" className={classes.content}>
              We’re used to approaching surfboard design from a performance
              matrix: Faster. Lighter. Looser. Higher. New materials, sharper
              edges,inhalations and exhalations of volume, more fins, more
              concaves, nth-degree refinements immeasurable by the human eye.
              Yet surfing’s greatest rewards tend toward matters of feel, our
              purest memories passion flashes: Hunger. Elation. Frustration.
              Calm.
            </Typography>

            <Typography align="justify" className={classes.content}>
              What if we designed boards from that emotional angle? What if we
              sought out designs that amplified the surfing story unfolding with
              every ride? What if there were elements in the board itself that
              augmented the feeling we had during a run down the line? If, when
              you were in a bowled cup on the face of the wave, your feet were
              nested in bowls on the deck? Or when the rail was locked in,
              trimmed to the teats, the stern of the board was a penetrating
              probe of foam and glass, literally stinging back into the tube
              like the tail of a kite? These are the sorts of questions swimming
              through the fertile mind of Thomas Meyerhoffer. The industrial
              designer immigrated to California from Sweden in the ’90s—just in
              time to lay his personal curves on the Apple eMate, the precursor
              to that company’s colorful, curvy product rollout of the last
              decade. Acclaim followed, with his designs lauded from the binary
              wonks at Wired magazine to hand- gesturing furniture critics in
              Italy. As a surfer, it was simply a matter of time before he
              applied his rigorous—yet thoroughly organic— approach to the foam
              and cloth beneath his feet.
            </Typography>

            <Typography className={classes.title}>
              “I was really curious about how far you could take the meaning of
              the performance act on a surfboard into a design that tells that
              story and (still) be able to ride the board”
            </Typography>

            <Typography align="justify" className={classes.content}>
              His interests lie in the classical longboard experience, flowing
              down the line on a small point wave. Or, in narrative terms, an
              angle-in take off, a quick acquisition of trim for max hull speed,
              an artfully-timed stroll to the tip, an eventual back-pedal, then
              a kickout. A beginning, a middle, an end. Rising action, climax,
              falling action. A story. It’s nice if a board can weave a tale,
              but it damn well better trim and turn too. Never a shaper,
              Meyerhoffer’s first explorations came via existing boards with
              known performance charac- teristics. “I knew intuitively that the
              boards with the highest standards would be handmade,” he says. “I
              didn’t mind paying extra to get that.” Soon enough, he was
              diddling with the computer- aided tooling of his profession as
              well as with the more prosaic planer, rasps, and screens. His
              boards began as sketches, were then refined out on the computer,
              milled on a CDC machine, finish shaped by Meyerhoffer, then
              glassed by master laminator Leslie Anderson. Descriptions of the
              outcome are perhaps best left to the photos. Our usual
              materials—luminous by nature—take on strange new throbbings.
              Visual reference points abound: Jules Verne, Dr. Seuss, Gaudi,
              Kandinsky, Henry Moore. Again, though, practicality rears its
              head. “Actually,” Thomas admits, “I was surprised that they rode
              as well as they did. I considered them experimental sculptures,
              and if they rode well,then fine. ” Despite their visual
              quirkiness, the various elements of the boards speak more to
              Thomas’ wish list than to novelty. The hourglass shape, for
              example. “I looked at a longboard, and the surfer in me wanted it
              to turn better. The designer in me asked, ‘What can I remove?’”
              The answer was the width in the middle. This negated the parallel
              and put more curve in the outline. Curves turn better than
              straights. Also, the center of the board is the closest thing to
              dead space on a noserider. You’re on the tail or on the tip.
              “Next, I looked for things that enhanced the narrative act as well
              as affected the performance. Like the tail of the board I call the
              Legozoo: it works like a fin in the third dimension—it holds the
              tail in, and you really feel it when you stall.” And the
              translucent panels near the nose? Those are just to evoke the
              weightlessness of a long noseride. That, and to inspire dialogue
              between surfers. ‘You know,’ Thomas says in his sonorous
              Scandinavian brogue, ‘most surfers are too cool to ask me about
              them at the beach, but they do stare quite a lot. Sometimes I feel
              like I’m wearing a pink wetsuit.’ “It’s kind of funny how
              conservative we surfers can be. I was at Pacifica, and this group
              of artist surfers from the city paddled out. They letter big words
              on their boards and have stickers all over their wetsuits. You’d
              think they would be accepting of different approaches, but they
              were talking about how my boards were ridiculous and looking at me
              like I was a kook. Oh, well. I got some long waves that day.”
              Considering that Thomas is rather new to surfing (he began in
              earnest back in 2000), finding feedback from highly skilled
              surfers is important. “I’ve had shortboard friends ride them, and
              they remarked on how well the boards turn from the tail. The best
              response I’ve had was down in southern Baja. A really good local
              surfer and fisherman rode one of them, and he was surfing really
              well on it. All of the better surfers asked to try it. It created
              a scene. But it will take time to see if any of these ideas are
              adopted.” But any adoption of Meyerhoffer’s design details might
              be beside the point. Perhaps his real contribution is in directing
              at least some of our process toward less applied, more spatial
              planes, thereby speaking to the story of our ride.
            </Typography>

            <Typography className={classes.content}>
              MEDIA: Surfers Journal
            </Typography>

            <Typography className={classes.content}>
              YEAR: February 1998
            </Typography>

            <Typography className={classes.content}>
              {" "}
              TITLE: And how does that make you feel?
            </Typography>

            <Typography className={classes.content}>
              CREDITS: By Scott Hulet
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutJournal;
