import React from "react";
import SkillSection from "../molecules/SkillSection.molecule";
import SkillsData from "../../assets/data/skills.json";

function Skills() {
  return (
    <div className="flex flex-col gap-6 px-4">
      <SkillSection title="AI & Data" skills={SkillsData.aiData} />
      <SkillSection title="Software & Frameworks" skills={SkillsData.softwareFrameworks} />
      <SkillSection title="Cloud & MLOps" skills={SkillsData.cloudMLOps} />
    </div>
  );
}

export default Skills;
