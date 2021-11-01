import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { IonIcon, IonBadge } from "@ionic/react";
import { briefcase, book } from "ionicons/icons";

const Container = styled.div``;
const Header = styled.div`
  display: flex;
  align-items: center;

  & p {
    margin-left: 1rem;
    color: hsl(0, 0%, 60%);
  }
`;
const Icon = styled(IonIcon)`
  font-size: 1.5rem;
`;
const Content = styled.div`
  padding-left: 1.8rem;
  border-left: 3px solid hsla(352, 80%, 50%, 0.5);
  margin-left: 0.6rem;
  padding-bottom: 2rem;

  & h1 {
    font-size: 1.5rem;
    padding: 0.5rem 0;
    font-weight: bold;
    color: black;
  }
  & p {
    line-height: 1.5rem;
  }
`;

function BackgroundSection({ type, time, title, description, location }) {
  return (
    <Container>
      <Header>
        <Icon color="danger" icon={type === "Work" ? briefcase : book} />
        <p>{time}</p>
      </Header>
      <Content>
        <h1>{title}</h1>
        <IonBadge color="light">{location}</IonBadge>
        <ReactMarkdown>{description}</ReactMarkdown>
      </Content>
    </Container>
  );
}

export default BackgroundSection;
