import React from "react";
import { Grid } from "@mantine/core";
import BackgroundCard from "../molecules/BackgroundCard.molecule";
import Data from "../../assets/data/background.json";

function Background() {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, lg: 6 }}>
        <BackgroundCard type="Work" data={Data.work} />
      </Grid.Col>
      <Grid.Col span={{ base: 12, lg: 6 }}>
        <BackgroundCard type="Education" data={Data.education} />
      </Grid.Col>
    </Grid>
  );
}

export default Background;
