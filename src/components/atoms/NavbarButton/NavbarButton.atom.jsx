import { Button as MantineButton } from "@mantine/core";
import React from "react";

function NavbarButton({ children, onClick }) {
  return (
    <MantineButton
      onClick={onClick}
      variant="light"
      color="gray"
      radius="md"
      c="black"
      fz="1rem"
      fw={700}
      m={0}
      bg="rgba(0, 0, 0, 0.08)"
      shadow="none"
    >
      {children}
    </MantineButton>
  );
}

export default NavbarButton;
