import React from "react";
import styled from "styled-components";
import DiplomaData from "../../../assets/data/diplomas.json";
import DiplomaSection from "../../molecules/DiplomaSection/DiplomaSection.molecule";

const Container = styled.div``;

function Diplomas() {
  return (
    <Container>
      <DiplomaSection
        title="Professional Certificates"
        diplomaData={DiplomaData.certificates}
      />
      <DiplomaSection title="Education" diplomaData={DiplomaData.education} />
    </Container>
  );
}

export default Diplomas;
