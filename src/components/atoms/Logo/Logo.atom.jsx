import React from "react";
import styled, { css } from "styled-components";

const LogoText = styled.div`
  font-weight: 800;
  font-size: 2rem;
  cursor: pointer;
  color: white;
  ${(props) =>
    props.black &&
    css`
      color: black;
    `}

  span {
    color: red;
  }
`;

function Logo({ black }) {
  return (
    <LogoText black={black}>
      Lalo Venegas<span>.</span>
    </LogoText>
  );
}

export default Logo;
