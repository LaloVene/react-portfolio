import React from "react";
import { Box, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import HeroCard from "../molecules/HeroCard.molecule";
import BackgroundImage from "../../assets/hero-background3.jpeg";

function Hero() {
  return (
    <Box
      w="100%"
      h="70vh"
      pos="relative"
      style={{
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${BackgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <HeroCard />
      <Box
        pos="absolute"
        bottom={0}
        c="hsl(0, 0%, 70%)"
        pb="2rem"
        style={{
          fontSize: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text fz="1rem">Scroll Down</Text>
        <IconChevronDown size={32} style={{ marginTop: "1rem" }} />
      </Box>
    </Box>
  );
}

export default Hero;
