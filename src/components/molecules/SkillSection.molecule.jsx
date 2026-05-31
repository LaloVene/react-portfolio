import React from "react";
import SkillItem from "./SkillItem.molecule";

function SkillSection({ title, skills = [] }) {
  return (
    <div className="ml-2 sm:ml-4 mt-8">
      <p className="text-xl font-extrabold text-neutral-800 dark:text-neutral-200 mb-4 tracking-tight">
        {title}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <SkillItem {...skill} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillSection;
