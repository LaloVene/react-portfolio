import { IonButton } from "@ionic/react";
import React from "react";
import styled from "styled-components";

const Button = styled(IonButton)`
  color: white;
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  --background: none;
  --box-shadow: none;

  &:hover {
    --color: #F5C852;
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
