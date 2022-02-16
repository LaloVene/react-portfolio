import React from "react";
import styled from "styled-components";
import { IonIcon } from "@ionic/react";
import { chevronDownCircle } from "ionicons/icons";
import HeroCard from "../../molecules/HeroCard/HeroCard.molecule";
import BackgroundImage from "../../../assets/hero-background.jpg";

const Container = styled.div`
  /* background-color: rgba(52, 51, 83, 0.7); */
  width: 100%;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  position: relative;

  &::before {
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    /* background-attachment: fixed; */
    background-size: cover;
    background-position: center;
    filter: brightness(60%);
    content: "";
    border-radius: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
`;
const Scroll = styled.div`
  position: absolute;
  bottom: 0;
  font-size: 1rem;
  color: hsl(0, 0%, 70%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
`;
const DownIcon = styled(IonIcon)`
  margin-top: 1rem;
  font-size: 2rem;
`;

function Hero() {
  return (
    <Container>
      <HeroCard />
      <Scroll>
        Scroll Down
        <DownIcon icon={chevronDownCircle} />
      </Scroll>
    </Container>
  );
}

export default Hero;
