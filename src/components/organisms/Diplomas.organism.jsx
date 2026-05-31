import React from "react";
import DiplomaData from "../../assets/data/diplomas.json";
import DiplomaSection from "../molecules/DiplomaSection.molecule";

function Diplomas() {
  return (
    <div className="px-4">
      <DiplomaSection
        title="Professional Certificates"
        diplomaData={DiplomaData.certificates}
      />
      <DiplomaSection title="Education" diplomaData={DiplomaData.education} />
    </div>
  );
}

export default Diplomas;
