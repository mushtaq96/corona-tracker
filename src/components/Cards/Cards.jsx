import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import CountUp from "react-countup";
import styles from "./Cards.module.css";

const cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  console.log(confirmed);
  if (!confirmed) {
    return "Loading....";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={1.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">Real date</Typography>
            <Typography variant="body2">
              Number of active cases of covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <Typography color="textSecondary" gutterBottom>
            Recovered
          </Typography>
          <Typography variant="h5">REal data</Typography>
          <Typography color="textSecondary">Real date</Typography>
          <Typography variant="body2">Number of recovered cases</Typography>
        </Grid>
        <Grid item component={Card}>
          <Typography color="textSecondary" gutterBottom>
            Deaths
          </Typography>
          <Typography variant="h5">REAl Data</Typography>
          <Typography color="textSecondary">Real date</Typography>
          <Typography variant="body2">Number of Deaths caused</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default cards;
