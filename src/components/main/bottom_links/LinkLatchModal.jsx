import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { home_files } from "../../data";

const useStyles = makeStyles((theme) => ({
  font_content: {
    fontFamily: "Century",
    marginBottom: "25px",
  },
}));

const LinkLatchModal = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container direction="column">
        <Grid item xs={12}>
          <img
            src={home_files[15]}
            style={{
              height: "90%",
              width: "60%",
              marginLeft: "120px",
              marginBottom: "20px",
            }}
            alt="Product"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.font_content}>
            MEDIA: The New York Times
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.font_content}>
            YEAR: January 2016
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.font_content}>
            TITLE: New York Discovers Keyless Entry Systems.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.font_content}>
            CREDITS: By Michelle Higgins
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.font_content}>
            In the next few months, residents at a handful of buildings in the
            city will be able to walk up to their apartment doors and go inside
            without fumbling for keys. And if the dog walker or cleaning service
            comes by while they are out, residents can use an app to let them in
            remotely. Ditto for deliveries.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.font_content}>
            Keyless entry systems are starting to make their way to your
            apartment door. While smart locks have been available to individual
            homeowners for a few years, developers and property management
            companies have been hesitant to lose the key, citing the cost of
            upgrading hundreds of locks and the risk of losing money if the
            technology goes the way of Betamax.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.font_content}>
            Now that’s starting to change.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.font_content}>
            Latch, a new keyless entry system from a two-year-old start-up with
            the same name, is being introduced at a range of properties, from a
            four-unit East Village walk-up to a 431-unit luxury doorman rental
            in Chelsea, managed by real estate firms that have invested in the
            technology, like Corigin and Pan Am Equities. KISI, another keyless
            entry provider that has made strides in offices, is also turning its
            attention toward residences, with plans to roll out the system at a
            new 570-unit development on Staten Island in March.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.font_content}>
            For residents, especially those who make heavy use of on-demand
            deliveries, the pitch is control and convenience. Instead of doling
            out keys to your pet-sitter, contractor or houseguests, you can
            issue a virtual key. Instead of worrying about extra keys floating
            around that you lent out but never got back, you can simply disable
            access.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.font_content}>
            Landlords and property management companies can track the comings
            and goings of workers, guests and deliveries. If a tenant moves out,
            or doesn’t pay his rent, “keys” can be turned off. Access to health
            clubs, children’s lounges, pools and bike rooms can also be easily
            added or subtracted.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.font_content}>
            Designed by Thomas Meyerhoffer, a Swedish-born designer whose early
            career includes tenure at Apple, Latch is a contemporary take on the
            classic mortise lock. Perched above the traditional keyhole, a
            discreet camera sits behind a circular touch screen. Like an
            unblinking eye, it records who is at the door, so residents can
            determine whom to let in. Bluetooth technology allows Latch to
            communicate with your phone.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.font_content}>
            Once you register and download the app, there are a number of ways
            to open a door. You can use the app on your smartphone, input a key
            code on the circular touch pad on the door, or use an old-fashioned
            key. “We realize that not everyone will want to use it digitally,”
            said Luke Schoenfelder, the chief executive of Latch. The app can
            also be configured so that the door unlocks automatically upon
            sensing the phone in your pocket.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.font_content}>
            Access via key codes can be issued permanently, temporarily for
            deliveries or on a set schedule, as for a dog-walker. The system
            creates a record of every entry so you — and your landlord — can see
            who has been there and for how long.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.font_content}>
            Because your custom passcode always lets you in, you won’t get
            locked out if you leave your phone in a cab. You can also deactivate
            the code by logging into your account, if your phone is lost or
            stolen.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default LinkLatchModal;
