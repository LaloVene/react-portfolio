import { IonButton } from "@ionic/react";
import React from "react";
import styled from "styled-components";

const Button = styled(IonButton)`
  --color: black;
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  --background: rgba(0, 0, 0, 0.08);
   --box-shadow: none;
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  --border-radius: 0.5rem;

  &:hover {
    --color: hsl(239, 82%, 72%);
  }
`;

function NavbarButton({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>;
}

export default NavbarButton;
