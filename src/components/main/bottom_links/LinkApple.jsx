import React from "react";
import { Grid, Chip } from "@material-ui/core";
import { home_files } from "../../data";

const LinkApple = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          spacing={3}
          justifyContent="space-evenly"
        >
          <Grid item>
            <Chip label="APPLE eMate" color="primary" />
          </Grid>
          <Grid item>
            <Chip label="PROJECT: APPLE" color="primary" />
          </Grid>
          <Grid item>
            <Chip label="YEAR: 1999" color="primary" />
          </Grid>
          <Grid item>
            <Chip label="INFORMATION: N/A" color="primary" />
          </Grid>
          <Grid item>
            <Chip label="CREDITS:" color="primary" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <img
          src={home_files[34]}
          style={{ width: "100%", height: "100%" }}
          alt="=meyerhoffer.com/"
        />
      </Grid>
    </Grid>
  );
};

export default LinkApple;
