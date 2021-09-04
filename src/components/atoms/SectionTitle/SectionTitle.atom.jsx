import React from "react";
import styled from "styled-components";

const Title = styled.p`
  font-size: 1.7rem;
  font-weight: 900;
  position: relative;
  margin-left: 1rem;

  &::before {
    content: "O";
    position: absolute;
    top: -1rem;
    left: -1rem;
    font-size: 3rem;
    font-weight: 900;
    z-index: -1;
    color: hsl(0, 0%, 80%);
  }
`;


function SectionTitle({children}) {
  return (
    <Title>
      {children}
    </Title>
  );
}

export default SectionTitle;
