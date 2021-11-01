import React from "react";
import styled from "styled-components";
import { IonBadge, IonIcon } from "@ionic/react";
import { timeOutline } from "ionicons/icons";
import Card from "../../atoms/Card/Card.atom.jsx";

const CustomCard = styled(Card)`
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    /* background-color: hsl(0, 0%, 90%); */
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  object-fit: contain;
  width: 7rem;
  height: 5.5rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: white;
`;
const TextContainer = styled.div`
  margin-left: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: flex-end;

  & h1 {
    font-size: 1.3rem;
    color: black;
    height: 3rem;
  }
  & p {
    margin: 0;
    font-size: 0.8rem;
  }
`;
const Icon = styled(IonIcon)`
  font-size: 0.8rem;
  margin-right: 0.2rem;
`;

function DiplomaCard({ title, date, institution, imageUrl, url }) {
  const goToUrl = () => {
    console.log(111);
    window.open(url, "_blank");
  };
  return (
    <CustomCard onClick={goToUrl}>
      <Container>
        <Image src={imageUrl} alt={title} />
        <TextContainer>
          <h1>{title}</h1>
          <div>
            <IonBadge color="dark">{institution}</IonBadge>
          </div>
          <Container>
            <Icon icon={timeOutline} />
            <p>{date}</p>
          </Container>
        </TextContainer>
      </Container>
    </CustomCard>
  );
}

export default DiplomaCard;
