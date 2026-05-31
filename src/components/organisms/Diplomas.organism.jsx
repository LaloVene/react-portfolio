import React from "react";
import { Box } from "@mantine/core";
import DiplomaData from "../../assets/data/diplomas.json";
import DiplomaSection from "../molecules/DiplomaSection.molecule";

function Diplomas() {
  return (
    <Box>
      <DiplomaSection
        title="Professional Certificates"
        diplomaData={DiplomaData.certificates}
      />
      <DiplomaSection title="Education" diplomaData={DiplomaData.education} />
    </Box>
  );
}

export default Diplomas;
