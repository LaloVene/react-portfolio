import { Box, Card, Text } from "@mantine/core";
import React from "react";
import Button from "../atoms/Button.atom";
import Pdf from "../../assets/Resume.pdf";

function AboutCard() {
  return (
    <Card
      withBorder
      p="md"
      radius="md"
      maw="35rem"
      style={{
        boxShadow: `
    0 0.3px 2.2px rgba(0, 0, 0, 0.02),
    0 0.8px 5.3px rgba(0, 0, 0, 0.028),
    0 1.5px 10px rgba(0, 0, 0, 0.035),
    0 2.7px 17.9px rgba(0, 0, 0, 0.042),
    0 5px 33.4px rgba(0, 0, 0, 0.05),
    0 12px 80px rgba(0, 0, 0, 0.07);`,
      }}
    >
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
