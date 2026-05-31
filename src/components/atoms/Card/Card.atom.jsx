import { Card as MantineCard } from "@mantine/core";
import React from "react";

function Card({ children, ...props }) {
  return (
    <MantineCard withBorder p="md" radius="md" shadow="md" {...props}>
      {children}
    </MantineCard>
  );
}

export default Card;
