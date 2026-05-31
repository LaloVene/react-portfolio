import React, { useContext } from "react";
import { Box, Group } from "@mantine/core";
import GlobalContext from "../../../utils/state/GlobalContext";
import Logo from "../../atoms/Logo/Logo.atom";
import Navbar from "../../molecules/Navbar/Navbar.organism";

function Header() {
  const { state } = useContext(GlobalContext);

  return (
    <Box pos="sticky" top={0} style={{ zIndex: 10 }}>
      <Box>
        <Box ref={state.homeRef} pt="1rem" px="2rem" bg="white">
          <Group justify="space-between" align="center" maw={1770} mx="auto">
            <Logo />
            <Navbar />
          </Group>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
