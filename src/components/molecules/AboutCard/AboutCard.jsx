import { IonCard, IonCardContent } from "@ionic/react";
import React from "react";
import styled from "styled-components";
import Button from "../../atoms/Button/Button.atom";
import Pdf from "../../../assets/Resume.pdf";

const Card = styled(IonCard)`
  border-radius: 1rem;
  max-width: 35rem;
  box-shadow:
    0 0.3px 2.2px rgba(0, 0, 0, 0.02),
    0 0.8px 5.3px rgba(0, 0, 0, 0.028),
    0 1.5px 10px rgba(0, 0, 0, 0.035),
    0 2.7px 17.9px rgba(0, 0, 0, 0.042),
    0 5px 33.4px rgba(0, 0, 0, 0.05),
    0 12px 80px rgba(0, 0, 0, 0.07);
`;
const Text = styled.p``;
const DownloadButton = styled(Button)`
  margin-top: 1rem;
`;

function AboutCard() {
  return (
    <Card>
      <IonCardContent>
        <Text>
          I am a Data Engineer and AI Researcher specializing in advanced data
          retrieval pipelines and autonomous AI orchestration.
        </Text>
        <DownloadButton
          href={Pdf}
          target="_blank"
          rel="noopener noreferrer"
          color="danger"
        >
          Download CV
        </DownloadButton>
      </IonCardContent>
    </Card>
  );
}

export default AboutCard;
