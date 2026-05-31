import React from "react";
import { Text, Title } from "@mantine/core";

function SectionTitle({ children }) {
  return (
    <Title order={2} ml="1rem" mt="3rem" fz="2.5rem" fw={900} pos="relative">
      {children}
      <Text
        component="span"
        aria-hidden="true"
        pos="absolute"
        top="-2rem"
        left="-1rem"
        fz="4rem"
        fw={900}
        c="hsl(0, 0%, 90%)"
        style={{ zIndex: -1 }}
      >
        {children}
      </Text>
    </Title>
  );
}

export default SectionTitle;
