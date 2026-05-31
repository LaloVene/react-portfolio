import React from "react";
import { Box, Grid, Text } from "@mantine/core";
import DiplomaCard from "../molecules/DiplomaCard.molecule";

function DiplomaSection({ title, diplomaData }) {
  return (
    <Box ml="0.5rem" mt="2rem">
      <Text fz="1.5rem" fw={700}>
        {title}
      </Text>
      <Grid>
        {diplomaData.map((diploma) => (
          <Grid.Col span={{ base: 12, lg: 6, xl: 4 }} key={diploma.title}>
            <DiplomaCard {...diploma} />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}

export default DiplomaSection;
