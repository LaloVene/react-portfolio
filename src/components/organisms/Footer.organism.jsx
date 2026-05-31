import React from "react";
import { Box, Flex } from "@mantine/core";
import Logo from "../atoms/Logo.atom";

function Footer() {
  return (
    <Box pb="2rem" bg="white">
      <Flex justify="center" align="center">
        <Logo />
      </Flex>
    </Box>
  );
}

export default Footer;
