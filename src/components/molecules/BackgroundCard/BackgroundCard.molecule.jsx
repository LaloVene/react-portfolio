import React from "react";
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import styled from "styled-components";
import BackgroundSection from "../../molecules/BackgroundSection/BackgroundSection.molecule";

const Card = styled(IonCard)`
  border-radius: 1rem;
  box-shadow: 0 0.3px 2.2px rgba(0, 0, 0, 0.02),
        0 0.8px 5.3px rgba(0, 0, 0, 0.028),
        0 1.5px 10px rgba(0, 0, 0, 0.035),
        0 2.7px 17.9px rgba(0, 0, 0, 0.042),
        0 5px 33.4px rgba(0, 0, 0, 0.05),
        0 12px 80px rgba(0, 0, 0, 0.07);
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

function BackgroundCard({type, data}) {
  return (
    <Card>
      <IonCardHeader>
        <CardTitle>{type}</CardTitle>
      </IonCardHeader>
      <IonCardContent>
        {
          data.map((item) => {
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
          })
        }
      </IonCardContent>
    </Card>
  );
}

export default BackgroundCard;
