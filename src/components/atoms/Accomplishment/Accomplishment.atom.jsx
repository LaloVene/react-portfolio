import React from "react";
import styled from "styled-components";
import { IonIcon } from "@ionic/react";

const Container = styled.div`
  display: flex;
`;
const Icon = styled(IonIcon)`
  font-size: 2rem;
  color: var(--ion-color-primary);
  margin-right: 1rem;
`;
const TextContainer = styled.div`
  & * {
    margin: 0;
  }
  & h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }
  & p {
    font-size: 1rem;
    color: var(--ion-color-medium);
  }
`;

function Accomplishment({ icon, number, text }) {
  return (
    <Container>
      <Icon icon={icon} />
      <TextContainer>
        <h3>{number}</h3>
        <p>{text}</p>
      </TextContainer>
    </Container>
  );
}

export default Accomplishment;
