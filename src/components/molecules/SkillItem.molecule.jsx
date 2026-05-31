import React from "react";

function SkillItem({ logo, name }) {
  return (
    <div className="flex flex-row items-center gap-3 p-3 rounded-xl border border-divider bg-content1 shadow-sm transition-all duration-300 hover:scale-[1.03] hover:border-brand-primary hover:shadow-md active:scale-[0.98]">
      <img
        src={logo}
        alt={name}
        className="object-contain w-7 h-7 rounded bg-white p-0.5 shadow-sm border border-neutral-100 flex-shrink-0"
      />
      <span className="font-bold text-sm text-neutral-800 dark:text-neutral-200 truncate">
        {name}
      </span>
    </div>
  );
}

export default SkillItem;
