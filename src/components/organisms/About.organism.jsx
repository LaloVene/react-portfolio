import React from "react";
import { Box, Flex, Grid } from "@mantine/core";
import {
  IconCheck,
  IconEyeglass,
  IconMedal,
  IconTrophy,
} from "@tabler/icons-react";
import Avatar from "../atoms/Avatar.atom";
import AboutCard from "../molecules/AboutCard";
import Accomplishment from "../atoms/Accomplishment.atom";

const accomplishmentList = [
  {
    icon: IconCheck,
    number: "94.60",
    text: "GPA",
  },
  {
    icon: IconMedal,
    number: "4",
    text: "Awarded best GPA",
  },
  {
    icon: IconEyeglass,
    number: "100%",
    text: "Awesome",
  },
  {
    icon: IconTrophy,
    number: "3",
    text: "Hackathon winner",
  },
];

function About() {
  return (
    <Flex direction="column" align="center" justify="center">
      <Flex justify="center" gap="1rem">
        <Box maw="7rem">
          <Avatar />
        </Box>
        <AboutCard />
      </Flex>
      <Box mt="2rem" w="100%" maw="50rem">
        <Grid>
          {accomplishmentList.map((item) => (
            <Grid.Col span={{ base: 6, md: 3 }} key={item.text}>
              <Accomplishment
                icon={item.icon}
                number={item.number}
                text={item.text}
              />
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </Flex>
  );
}

export default About;
