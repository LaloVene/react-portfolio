import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: white;
  background: none;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    color: #F5C852;
  }
`;

function NavbarButton({children, onClick}) {
  return (
    <Button onClick={onClick}>
        {children}
    </Button>
  );
}

export default NavbarButton;
