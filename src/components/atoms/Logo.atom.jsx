import React from "react";
import { Text } from "@mantine/core";

function Logo() {
  return (
    <Text fw={800} fz="2rem" c="black">
      Eduardo Venegas
      <Text component="span" c="red" fz="3rem" fw={800}>
        .
      </Text>
    </Text>
  );
}

export default Logo;
