import React from "react";
import DiplomaCard from "../molecules/DiplomaCard.molecule";

function DiplomaSection({ title, diplomaData }) {
  return (
    <div className="ml-2 mt-8">
      <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
        {title}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {diplomaData.map((diploma) => (
          <div key={diploma.title}>
            <DiplomaCard {...diploma} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiplomaSection;
