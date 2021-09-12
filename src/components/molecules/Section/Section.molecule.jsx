import React from "react";
import styled from "styled-components";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle.atom";

const Container = styled.div`
  margin-bottom: 6rem;
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
