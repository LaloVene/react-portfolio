import React from "react";
import { Group, Image, Paper, Text } from "@mantine/core";

function SkillItem({ logo, name }) {
  return (
    <Paper radius="md" p="0.5rem">
      <Group gap="0.5rem" wrap="nowrap" align="center">
        <Image src={logo} alt={name} fit="contain" w={24} radius={4} />
        <Text>{name}</Text>
      </Group>
    </Paper>
  );
}

export default SkillItem;
