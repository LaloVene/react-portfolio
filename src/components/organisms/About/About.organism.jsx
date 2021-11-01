import React from "react";
import { IonRow, IonCol } from "@ionic/react";
import styled from "styled-components";
import Avatar from "../../atoms/Avatar/Avatar.atom";
import AboutCard from "../../molecules/AboutCard/AboutCard";
import { trophy, medal, checkmarkCircle, glasses } from "ionicons/icons";
import Accomplishment from "../../atoms/Accomplishment/Accomplishment.atom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1rem;
`;
const AvatarContainer = styled.div`
  max-width: 7rem;
`;
const AccomplishmentsContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  max-width: 50rem;
`;

const accomplishmentList = [
  {
    icon: checkmarkCircle,
    number: "95.98",
    text: "GPA",
  },
  {
    icon: medal,
    number: "4",
    text: "Awarded best GPA",
  },
  {
    icon: glasses,
    number: "100%",
    text: "Awesome",
  },
  {
    icon: trophy,
    number: "3",
    text: "Hackathon winner",
  },
];

function About() {
  return (
    <Container>
      <CardContainer>
        <AvatarContainer>
          <Avatar />
        </AvatarContainer>
        <AboutCard />
      </CardContainer>
      <AccomplishmentsContainer>
        <IonRow>
          {accomplishmentList.map((item) => (
            <IonCol size="6" size-md="3" key={item.text}>
              <Accomplishment
                icon={item.icon}
                number={item.number}
                text={item.text}
              />
            </IonCol>
          ))}
        </IonRow>
      </AccomplishmentsContainer>
    </Container>
  );
}

export default About;
