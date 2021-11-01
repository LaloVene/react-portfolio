import { IonCard, IonCardContent } from "@ionic/react";
import React from "react";
import styled from "styled-components";

const CardDiv = styled(IonCard)`
  border-radius: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

function Card({ children, ...props }) {
  return (
    <CardDiv {...props}>
      <IonCardContent>{children}</IonCardContent>
    </CardDiv>
  );
}

export default Card;
