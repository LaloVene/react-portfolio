import React from "react";

function SectionTitle({ children }) {
  return (
    <h2 className="relative ml-4 mt-12 text-4xl sm:text-5xl font-black text-neutral-900 dark:text-neutral-100 tracking-tight z-10">
      {children}
      <span
        aria-hidden="true"
        className="absolute -top-8 -left-4 text-6xl sm:text-7xl font-black text-neutral-200/50 dark:text-neutral-800/40 select-none z-[-1] pointer-events-none"
      >
        {children}
      </span>
    </h2>
  );
}

export default SectionTitle;
