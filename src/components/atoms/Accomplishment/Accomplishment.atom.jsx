import React from "react";
import { Group, Text, ThemeIcon } from "@mantine/core";

function Accomplishment({ icon: Icon, number, text }) {
  return (
    <Group align="center" gap="sm" wrap="nowrap">
      <ThemeIcon color="blue" variant="light" radius="xl" size="xl" mr="sm">
        <Icon size={20} />
      </ThemeIcon>
      <div>
        <Text m={0} fw={700} fz="1.5rem">
          {number}
        </Text>
        <Text m={0} fz="1rem" c="dimmed">
          {text}
        </Text>
      </div>
    </Group>
  );
}

export default Accomplishment;
