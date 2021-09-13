import React from "react";
import styled from "styled-components";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle.atom";

const Container = styled.div`
  margin-bottom: 6rem;
`;

const Section = React.forwardRef(({ children, title }, ref) => {
  return (
    <Container ref={ref}>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </Container>
  );
});

export default Section;
