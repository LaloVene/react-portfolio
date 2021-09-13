import React from "react";
import styled from "styled-components";

const Title = styled.p`
  font-size: 2.5rem;
  font-weight: 900;
  position: relative;
  margin-left: 1rem;
`;
const BackText = styled.p`
  position: absolute;
  top: -6rem;
  left: -1rem;
  font-size: 4rem;
  font-weight: 900;
  z-index: -1;
  color: hsl(0, 0%, 90%);
`;

function SectionTitle({ children }) {
  return (
    <Title>
      {children}
      <BackText>{children}</BackText>
    </Title>
  );
}

export default SectionTitle;
