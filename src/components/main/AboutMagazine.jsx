import React from "react";
import { Typography, Grid, Paper, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ab3 from "../../assets/ab3.jpg";

const useStyles = makeStyles((theme) => ({
  para_big: {
    marginLeft: "40px",
    marginRight: "40px",
    marginBottom: "20px",
    fontSize: "8em",
  },
  para_bottom: {
    marginLeft: "40px",
    marginBottom: "10px",
    fontSize: "8em",
  },
  para_qoute: {
    marginBottom: "50px",
    marginTop: "10px",
    marginLeft: "40px",
    marginRight: "40px",
  },
  para_title: {
    marginTop: "25px",
    marginBottom: "10px",
  },
}));

const AboutMagazine = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" style={{ background: "#B6C9F0" }}>
      <Grid item md={12} className={classes.para_title}>
        <Typography variant="h4" align="center">
          The Surfers Journal
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ margin: "20px" }}>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <Paper style={{ padding: "10px" }}>
              <img
                src={ab3}
                style={{ width: "100%", height: "370px" }}
                alt="thomasmeyerhoffer.com"
              />
            </Paper>
          </Grid>
          <Grid item md={8}>
            <Paper style={{ padding: "10px" }}>
              <Grid container spacing={2} style={{ marginTop: "10px" }}>
                <Grid item>
                  <Chip
                    size="small"
                    color="primary"
                    label="MEDIA: Outside Magazine"
                  />
                </Grid>
                <Grid item>
                  <Chip
                    size="small"
                    color="primary"
                    label="YEAR: September 2017 Genius Issue"
                  />
                </Grid>
                <Grid item>
                  <Chip
                    size="small"
                    color="primary"
                    label="TITLE: How Thomas Meyerhoffer designs our favorite things"
                  />
                </Grid>
                <Grid item>
                  <Chip
                    size="small"
                    color="primary"
                    label="CREDITS: By Michael Roberts"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="boady1">
                    One morning this spring, Thomas Meyerhoffer had a
                    break-through on the race track-which made him furious. In
                    recent years, the acclaimed 52-year-old industrial designer
                    has thrown himself into motorsports, training at the Porsche
                    Sport Driving School and beginning in 2016, competing in the
                    Pirelli GT3 Cup, a series for the elite amateurs. At the
                    Thunderhill Raceway in Northern California, he dropped his
                    lap time by three and a half seconds-an eternity. “I came
                    out of the car and was so angry,” he says. “I was just
                    thinking, Why didn’t I do that before? It was so simple.”
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="h3"
                    align="center"
                    style={{ marginTop: "20px" }}
                  >
                    Meyerhoffer is obsessed with simplicity.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.para_big}>
        <Typography variant="body1" paragraph align="justify">
          The remarkable diverse range of mold-demolishing sports products he
          has created-the first wraparound ski goggles, the Smith V3; no-fuss
          rear-entry snowboard binding the Flow that offered the control of a
          strap in; award-winning Neil Pryde windsurf sails-have been celebrated
          for their elegant austerity.
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.para_big}>
        <Typography variant="body1" paragraph align="justify">
          Even his show-stopping designs like the translucent Apple eMate (an
          iMac precursor that the company’s chief, Johnathan Ive, tapped
          Meyerhoffer to develop) and his hourglass-shaped longboards, which he
          introduced nine years ago to great confusion in the surf industry,
          adhere to his Scandinavian aesthetic. He was born and raised in
          Sweden.
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.para_qoute}>
        <Typography variant="h4" align="center">
          He has an uncanny ability to find the cleanest line connecting form
          and function.
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.para_big}>
        <Typography variant="body1" paragraph align="justify">
          Early on Meyerhoffer took positions at places designers dream of
          spending their careers: Apple, IDEO, Porsche. But he prefers and
          environment that’s “more free,” so for almost 20 years he has run his
          own in-home studio in Montara, California, overlooking a surf break
          south of San Francisco. Today, he works with a broad client base that
          includes brands in technology, medicine, and even politics. (He was
          one of the three designers selected to craft the look and message of
          Michael Bloomberg’s presidential bid, before the billionaire decided
          not to run.) His latest sports product is the one he’s holding on the
          cover of this magazine- a break-apart travel surfboard that can
          outfitted with several tail configurations and fits into a faux golf
          bag, which can be checked for free on most airlines. He’ll be
          releasing it on October.
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.para_big}>
        <Typography variant="body1" paragraph align="justify">
          Not long after his dramatic improvement on the track, I met
          Meyerhoffer at his studio to talk about his creative process and what
          fuels innovation. Surfing and racing top the list. As he explained it,
          cutting his time was the result of the kind of decidedly simple design
          solution that he seeks for everything. “I didn't need to be faster
          where is as fast” He said, his blue eyes flashing. “I needed to be
          faster where I was slow.” Instead of gunning it on the straight aways,
          he focused on precise breaking and turning going into corners. “I’d
          forgotten what really matters,” he concluded, smiling.
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.para_big}>
        <Typography variant="body1" paragraph align="justify">
          Thomas Meyerhoffer is obsessed with simplicity, whether it's in his
          industrial designs or the surfboards he rides in California. We talked
          to him about the importance of always exploring.
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.para_qoute}>
        <Typography variant="h4" align="center">
          Q&A
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.para_big}>
        <Typography variant="body1" paragraph align="justify">
          I’ve always asked myself that question: What do I do? It’s why I’ve
          put myself in so many different situations. When I was younger, my
          answers were mostly gut feelings: Hey, I don’t want to work here
          anymore; I’m going to do my own thing. But in the past two or three
          years, the question has taken on a broader meaning and scope. Now
          it’s: What can I do?
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.para_big}>
        <Typography variant="body1" paragraph align="justify">
          People wonder why I left Apple. But once you start exploring, why
          would you stop? I was at Apple only because I’d left Porsche. And I
          was at Porsche because I’d left Sweden to go to a school somewhere
          else. You have to leave to take the next step.
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.para_qoute}>
        <Typography variant="h4" align="center">
          "The design process always starts with asking the right questions."
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.para_big}>
        <Typography variant="body1" paragraph align="justify">
          What kind of experience do you want to create? What’s the cultural
          context? Put yourself in the shoes of the user. Understand where the
          product will live.
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.para_big}>
        <Typography variant="body1" paragraph align="justify">
          In race car driving, there’s no time to think about a mistake, because
          the next turn is in your face. You get reminded very quickly that you
          lost focus. It’s the same with design: you have to understand what
          really matters and not be discouraged by all the things that don’t.
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.para_qoute}>
        <Typography variant="h4" align="center">
          "It is so hard to get to simplicity."
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.para_big}>
        <Typography variant="body1" paragraph align="justify">
          When you get there and it’s like, Why didn’t we do that earlier? We
          had such a great idea—why did we spend two years with all this shit we
          tacked on?
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.para_big}>
        <Typography variant="body1" paragraph align="justify">
          Surfing is a bit like dancing naked in front of everyone at a bar. You
          fall and everyone else goes, “Ha ha!” That’s what I went through with
          my first surfboard project. I had to paddle my boards out and stand up
          on them in front of these opinionated gentlemen in the water. It
          wasn’t a painless experience. People would laugh and say, “What the
          fuck is that? What are you trying to do?” I had to learn not to care.
          To be innovative, you can’t give a shit.
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.para_qoute}>
        <Typography variant="h4" align="center">
          "The last straw we cling to is our expertise."
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.para_big}>
        <Typography variant="body1" paragraph align="justify">
          But if you continue to do that, at a certain point, you can no longer
          go anywhere new. If there isn’t a constant flow of energy and
          curiosity, you stagnate. If I had chosen to be a specialist, it would
          have been much easier to become very good at something and be
          perceived as a success. Instead, now I’m starting to be able to bring
          all my experiences together on a higher plane. That’s my challenge.
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.para_big}>
        <Typography variant="body1" paragraph align="justify">
          I just went running for 45 minutes and I really had to push to get
          through it. I do the same thing at work. The pleasure comes when you
          go all the way.
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.para_big}>
        <Typography variant="body1" paragraph align="justify">
          I ask everybody what they think. I ask my son a lot—he’s 17, which
          makes him perfect for so many things. But I also need to understand
          where he’s coming from. When someone shares their opinion, your job is
          to decipher what they are actually saying.
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.para_big}>
        <Typography variant="body1" paragraph align="justify">
          Great design doesn’t need to be explained. People will get it just by
          looking, touching, and experiencing it.
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.para_big}>
        <Typography variant="body1" paragraph align="justify">
          In a lot of sports, the dream used to be all about going faster. Now
          sports culture is driven by fashion and social media.I think that is
          very positive. People aren’t searching for ultimate performance so
          much as the ultimate experience. There’s a functionality side but also
          an emotional side. My job is to bring those together.
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.para_qoute}>
        <Typography variant="h4" align="center">
          "I still use my pen and pencil."
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.para_big}>
        <Typography variant="body1" paragraph align="justify">
          That moment when you come out of the cave to show what you’ve made,
          that’s when you have to be fearless.
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.para_big}>
        <Typography variant="body1" paragraph align="justify">
          There are no shortcuts.
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.para_big}>
        <Typography variant="body1" paragraph align="justify">
          End.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AboutMagazine;
