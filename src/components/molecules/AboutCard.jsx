import { Box, Card, Text } from "@mantine/core";
import React from "react";
import Button from "../atoms/Button.atom";
import Pdf from "../../assets/Resume.pdf";

function AboutCard() {
  return (
    <Card withBorder p="md" radius="md" maw="35rem" shadow="xl">
      <Card.Section>
        <Box p="1rem">
          <Text>
            I am a Data Engineer and AI Researcher specializing in advanced data
            retrieval pipelines and autonomous AI orchestration.
          </Text>
          <Button
            href={Pdf}
            target="_blank"
            rel="noopener noreferrer"
            color="red"
            mt="1rem"
          >
            Download CV
          </Button>
        </Box>
      </Card.Section>
    </Card>
  );
}

export default AboutCard;
