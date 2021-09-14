import React from "react";
import styled from "styled-components";
import { IonRow, IonCol } from "@ionic/react";
import DiplomaCard from "../../molecules/DiplomaCard/DiplomaCard.molecule";

const Container = styled.div`
  margin-left: 0.5rem;
  margin-top: 2rem;
`;
const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

function DiplomaSection({ title, diplomaData }) {
  return (
    <Container>
      <Title>{title}</Title>
      <IonRow>
        {diplomaData.map((diploma) => (
          <IonCol size="12" sizeLg="6" sizeXl="4" key={diploma.title}>
            <DiplomaCard {...diploma} />
          </IonCol>
        ))}
      </IonRow>
    </Container>
  );
}

export default DiplomaSection;
