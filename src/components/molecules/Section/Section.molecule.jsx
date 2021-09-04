import React from "react";
import styled from "styled-components";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle.atom";

const Container = styled.div`
`;


function Section({children, title}) {
  return (
    <Container>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </Container>
  );
}

export default Section;
