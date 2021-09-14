import React from "react";
import { IonIcon } from "@ionic/react";
import { logoGithub, logoLinkedin } from "ionicons/icons";
import styled from "styled-components";

const Container = styled.div`
  margin: 1.5rem 0;
`;
const Icon = styled(IonIcon)`
  font-size: 1.5rem;
  margin: 0 0.5rem;
  color: hsl(0, 0%, 80%);
`;

const socialMedia = [
  {
    name: "Github",
    logo: logoGithub,
    url: "https://github.com/LaloVene",
  },
  {
    name: "Linkedin",
    logo: logoLinkedin,
    url: "https://www.linkedin.com/in/eduardo-venegas/",
  },
];

function HeroCard() {
  return (
    <Container>
      {socialMedia.map((icon) => (
        <a
          href={icon.url}
          target="_blank"
          rel="noopener noreferrer"
          key={icon.name}
        >
          <Icon icon={icon.logo} />
        </a>
      ))}
    </Container>
  );
}

export default HeroCard;
