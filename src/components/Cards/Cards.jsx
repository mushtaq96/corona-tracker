import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import cx from "classnames";
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
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
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
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              Number of active cases of covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <Typography color="textSecondary" gutterBottom>
            Recovered
          </Typography>
          <Typography variant="h5">
            {recovered.value}
            <br></br>
            <CountUp start={0} end={recovered.value} duration={2} separator="," />
          </Typography>
          <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant="body2">Number of recovered cases</Typography>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <Typography color="textSecondary" gutterBottom>
            Deaths
          </Typography>
          <Typography variant="h5">
            <CountUp start={0} end={deaths.value} duration={3} separator="," />
          </Typography>
          <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant="body2">Number of Deaths caused</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default cards;