import React from "react";
import { Box, Text } from "@mantine/core";
import Avatar from "../atoms/Avatar.atom";
import Button from "../atoms/Button.atom";
import SocialMedia from "./SocialMedia.molecule";

function HeroCard() {
  return (
    <Box
      ta="center"
      c="white"
      p="1rem"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backdropFilter: "blur(20px)",
        borderRadius: "1rem",
      }}
    >
      <Box maw="6rem">
        <Avatar />
      </Box>
      <Text fz="2rem" fw={700} m={0} mt="1rem" c="white">
        Eduardo Venegas
      </Text>
      <Text fz="1rem" m={0} mt="0.5rem" c="gray.4">
        Data Engineer
      </Text>
      <SocialMedia />
      <Button color="red" href="mailto:lalohdez77@gmail.com">
        Contact Me
      </Button>
    </Box>
  );
}

export default HeroCard;
