import React from "react";
import styled from "styled-components";

const LogoText = styled.div`
  font-weight: 800;
  font-size: 2rem;
  cursor: pointer;
  color: white;

  &:after {
    content: ".";
    color: red;
  }
`;

function Logo() {
  return (
    <LogoText>
      Lalo Venegas
    </LogoText>
  );
}

export default Logo;
