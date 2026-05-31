import React from "react";
import { Box } from "@mantine/core";
import SkillSection from "../../molecules/SkillSection/SkillSection.molecule";
import SkillsData from "../../../assets/data/skills.json";

function Skills() {
  return (
    <Box>
      <SkillSection title="Languages" skills={SkillsData.languages} />
      <SkillSection title="Lib / Frameworks" skills={SkillsData.frameworks} />
      <SkillSection title="Tools" skills={SkillsData.tools} />
    </Box>
  );
}

export default Skills;
