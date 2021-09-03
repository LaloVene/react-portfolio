import React from "react";
import styled from "styled-components";
import Avatar from "../../atoms/Avatar/Avatar.atom";
import Button from "../../atoms/Button/Button.atom";

const Container = styled.div`
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;
const AvatarContainer = styled.div`
  max-width: 6rem;
`;
const Name = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  margin-top: 1rem;
`;
const Description = styled.p`
  font-size: 1rem;
  margin: 0;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  color: hsl(0, 0%, 70%);
`;
const Scroll = styled.div`
  font-size: 1rem;
  color: hsl(0, 0%, 70%);
`;

function HeroCard() {
  return (
    <Container>
      <AvatarContainer>
        <Avatar />
      </AvatarContainer>
      <Name>
        Lalo Venegas
      </Name>
      <Description>
        CS Student @ Tec de Monterrey
      </Description>
      <Button color="danger">
        Contact Me
      </Button>
    </Container>
  );
}

export default HeroCard;
