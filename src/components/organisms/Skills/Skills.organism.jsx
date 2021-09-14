import React from "react";
import styled from "styled-components";
import SkillSection from "../../molecules/SkillSection/SkillSection.molecule";
import SkillsData from "../../../assets/data/skills.json";

const Container = styled.div``;

function Skills() {
  return (
    <Container>
      <SkillSection title="Languages" skills={SkillsData.languages} />
      <SkillSection title="Lib / Frameworks" skills={SkillsData.frameworks} />
      <SkillSection title="Tools" skills={SkillsData.tools} />
      <SkillSection title="Other" skills={SkillsData.other} />
    </Container>
  );
}

export default Skills;
