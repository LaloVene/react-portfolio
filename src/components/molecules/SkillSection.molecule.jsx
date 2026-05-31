import React from "react";
import { Box, SimpleGrid, Text } from "@mantine/core";
import SkillItem from "./SkillItem.molecule";

function SkillSection({ title, skills = [] }) {
  return (
    <Box ml={{ base: "0.5rem", md: "1rem" }}>
      <Text fw={600} fz="1.2rem" mb={4}>
        {title}
      </Text>
      <SimpleGrid cols={{ base: 2, sm: 3, md: 5, lg: 6, xl: 8 }} spacing="sm">
        {skills.map((skill) => (
          <div key={skill.name}>
            <SkillItem {...skill} />
          </div>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default SkillSection;
