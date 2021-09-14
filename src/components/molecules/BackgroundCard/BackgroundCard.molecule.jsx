import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import styled from "styled-components";
import BackgroundSection from "../../molecules/BackgroundSection/BackgroundSection.molecule";

const Card = styled(IonCard)`
  border-radius: 1rem;
  box-shadow: none;
`;
const CardTitle = styled(IonCardTitle)`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.7rem;
  color: hsl(0, 0%, 80%);
  text-align: center;
  padding: 1rem 0;
`;
const Terminator = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  background-color: #eb445a;
  border-radius: 100%;
`;

function BackgroundCard({ type, data }) {
  return (
    <Card>
      <IonCardHeader>
        <CardTitle>{type}</CardTitle>
      </IonCardHeader>
      <IonCardContent>
        {data.map((item) => {
          return (
            <BackgroundSection
              key={item.title}
              type={type}
              title={item.title}
              location={item.location}
              time={item.time}
              description={item.description}
            />
          );
        })}
        <Terminator />
      </IonCardContent>
    </Card>
  );
}

export default BackgroundCard;
