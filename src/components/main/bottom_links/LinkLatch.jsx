import React, { useState } from "react";
import {
  Typography,
  ImageListItemBar,
  ImageList,
  ImageListItem,
  IconButton,
  Grid,
  Modal,
  Fade,
  Backdrop,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { home_files, object_files } from "../../data/index";
import { CloudDownload, StarBorder } from "@material-ui/icons";
import LinkLatchModal from "./LinkLatchModal";

const useStyles = makeStyles((theme) => ({
  bg_ground: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  top_grid: {
    marginTop: "15px",
    marginBottom: "20px",
  },
  par_content: {
    fontFamily: "Century",
  },
  modal: {
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "60%",
    maxHeight: "100%",
    overflow: "scroll",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const LinkLatch = () => {
  const classes = useStyles();

  const itemData = home_files.slice(10, 14);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function srcset(image, width, height, rows = 1, cols = 1) {
    return `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format 1x,
  ${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format 1x`;
  }
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ marginTop: "15px" }}>
          <Typography
            variant="h3"
            align="center"
            style={{ fontFamily: "GenathDisplay" }}
          >
            YES, WE DID AN APPLE.
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} style={{ marginTop: "20px" }}>
          <Typography className={classes.par_content} align="justify" paragraph>
            As Co-founder and CDO of LATCH, Thomas was instrumental in designing
            the unique and innovative hardware in which LATCH runs its operating
            system, LATCH OS. LATCH has built a proprietary ecosystem of
            hardware, software, and services, enabling people to live and work
            in new ways. Latch (LTCH) is going public with a $ 1.6B valuation in
            June 2021.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} style={{ marginTop: "20px" }}>
          <img
            src={object_files[0].asset}
            style={{ height: "90%", width: "60%", marginLeft: "50px" }}
            alt="Product"
          />
        </Grid>
      </Grid>
      <ImageList
        sx={{ width: 400, height: 350, transform: "translateZ(0)" }}
        rowHeight={250}
        gap={2}
      >
        {itemData.map((item) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 1;

          return (
            <ImageListItem key={item.img} cols={cols} rows={rows}>
              <img
                srcSet={srcset(item.img, 250, 200, rows, cols)}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                sx={classes.bg_ground}
                title={item.title}
                position="bottom"
                actionIcon={
                  <IconButton
                    sx={{ color: "white" }}
                    aria-label={`star ${item.title}`}
                  >
                    <StarBorder />
                  </IconButton>
                }
                actionPosition="right"
              />
            </ImageListItem>
          );
        })}
      </ImageList>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Typography variant="body1">PROJECT: LATCH</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">YEAR: 2015-2021</Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.par_content} variant="body1">
            INFORMATION: Thomas is Co-founder & Chief Design Officer of Latch,
            responsible for Design, Experience and Brand. He started Latch
            together with Luke Schoenfelder and Brian Jones in 2015.
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.par_content} variant="body1">
            Thomas finds projects that deal with fundamental parts of our daily
            life particularly interesting. How do we keep traditional values
            when we transition into the virtual world? A digital experience
            should deliver the same sense of meaning we already know and
            understand.
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.par_content} variant="body1">
            Latch was designed with trust, longevity and mindfulness as guiding
            values. The aim was to create a system that is so simple to
            understand that anyone, anywhere in the world, is able to take part
            in the essential exchange of access and services—enabling seamless
            interaction between the many participants and services that is part
            of our modern village.
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.par_content} variant="body1">
            "When you aim to create a simple, universal and human experience,
            you need to lead with humanistic values, not digital complexity,"
            says Thomas. Latch design is mindful of technology and digital
            privacy limitations so users can connect on a personal level.
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.par_content} variant="body1">
            The Latch lens is perhaps the core invention of the Latch ecosystem.
            All Latch products share this same simple interface. It's inviting
            and easy to understand. Billed by The New York Times as the "the
            unblinking eye". Its simple design a key to Latch success.
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.par_content} variant="body1">
            Latch is going public at a $ 1.6B valuation on June 7th, 2021.
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.par_content} variant="body1">
            RECOGNITION: Latch has been recognized with eleven international
            design awards 2016-2019.
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.par_content} variant="body1">
            4x Good Design Australia Awards
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.par_content} variant="body1">
            4x IF Awards
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.par_content} variant="body1">
            2x IDSA award
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.par_content} variant="body1">
            Good Design Award (USA)
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.par_content} variant="body1">
            SELECT PRESS
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.par_content} variant="body1">
            The New York Times(Link)
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.par_content} variant="body1">
            Medium article Brad Svrluga, General Partner @ Primary Venture
            Partners
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.par_content} variant="body1">
            CREDITS: Photography: Christoffer Dalkarls
          </Typography>
        </Grid>
      </Grid>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <LinkLatchModal />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default LinkLatch;
