import React from "react";
import { Box, Grid } from "@mantine/core";
import ProjectCard from "../molecules/ProjectCard";
import ProjectData from "../../assets/data/projects.json";

function Projects() {
  return (
    <Box>
      <Grid>
        {ProjectData.map((project) => (
          <Grid.Col span={{ base: 12, lg: 6, xl: 4 }} key={project.name}>
            <ProjectCard {...project} />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
