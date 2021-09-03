import React from "react";
import styled from "styled-components";

const LogoText = styled.div`
  font-weight: 800;
  font-size: 2rem;
  cursor: pointer;
  color: white;

  span {
    color: red;
  }
`;

function Logo() {
  return (
    <LogoText>
      Lalo Venegas<span>.</span>
    </LogoText>
  );
}

export default Logo;
