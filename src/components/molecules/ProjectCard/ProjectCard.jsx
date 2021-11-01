import React from "react";
import { IonChip, IonLabel, IonIcon } from "@ionic/react";
import { trophy } from "ionicons/icons";
import styled from "styled-components";
import Card from "../../atoms/Card/Card.atom";
import Button from "../../atoms/Button/Button.atom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const Title = styled(IonLabel)`
  color: black;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 1rem 0;
`;
const Tags = styled.div`
  margin-bottom: 2rem;
`;
const ImageContainer = styled.div`
  height: 16rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    height: 14rem;
  }
`;
const Image = styled.img`
  object-fit: contain;
  height: 100%;
  border-radius: 1rem;
`;
const WinnerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    & *:not(p) {
      background-color: rgba(0, 0, 0, 1);
      font-size: 0rem;
    }
    & p {
      font-weight: bold;
      padding: 0.8rem;
      background-color: rgba(255, 255, 255, 1);
    }
  }

  & p {
    backdrop-filter: blur(8px);
    display: flex;
    color: black;
    background-color: rgba(255, 255, 255, 0.6);
    border: 2px solid rgba(0, 0, 0, 0.8);
    padding: 0.5rem;
    border-radius: 0.5rem;
    margin-left: -0.5rem;
    transition: all 0.2s ease-in-out;
  }
`;
const Medal = styled(IonIcon)`
  /* backdrop-filter: blur(8px); */
  font-size: 2rem;
  color: #ffc107;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 0.5rem;
  border-radius: 100%;
  transition: all 0.3s ease-in-out;
`;

function ProjectCard({
  imageUrl,
  title,
  tags,
  githubUrl,
  winnerText,
  winnerLink,
}) {
  const goToWinner = () => {
    window.open(winnerLink, "_blank");
  };
  return (
    <Card>
      <Container>
        {winnerText && (
          <WinnerContainer onClick={goToWinner}>
            <Medal icon={trophy} />
            <p>{winnerText}</p>
          </WinnerContainer>
        )}
        <ImageContainer>
          <Image src={imageUrl} alt={title} />
        </ImageContainer>
        <Title>{title}</Title>
        <Tags>
          {tags.map((tag) => (
            <IonChip color="tertiary" key={tag}>
              {tag}
            </IonChip>
          ))}
        </Tags>
        <Button href={githubUrl} target="_blank" color="dark">
          View Project
        </Button>
      </Container>
    </Card>
  );
}

export default ProjectCard;
