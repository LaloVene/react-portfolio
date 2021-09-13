import { IonCard, IonCardContent } from "@ionic/react";
import React from "react";
import styled from "styled-components";

const CardDiv = styled(IonCard)`
  border-radius: 1rem;
  box-shadow: 0 0.3px 2.2px rgba(0, 0, 0, 0.02),
    0 0.8px 5.3px rgba(0, 0, 0, 0.028), 0 1.5px 10px rgba(0, 0, 0, 0.035),
    0 2.7px 17.9px rgba(0, 0, 0, 0.042), 0 5px 33.4px rgba(0, 0, 0, 0.05),
    0 12px 80px rgba(0, 0, 0, 0.07);
`;

function Card({children}) {
  return (
    <CardDiv>
      <IonCardContent>
        {children}
      </IonCardContent>
    </CardDiv>
  );
}

export default Card;
