import React from "react";
import SkillSection from "../molecules/SkillSection.molecule";
import SkillsData from "../../assets/data/skills.json";

function Skills() {
  return (
    <div className="flex flex-col gap-6 px-4">
      <SkillSection title="Lib / Frameworks" skills={SkillsData.frameworks} />
      <SkillSection title="Tools" skills={SkillsData.tools} />
      <SkillSection title="Languages" skills={SkillsData.languages} />
    </div>
  );
}

export default Skills;
