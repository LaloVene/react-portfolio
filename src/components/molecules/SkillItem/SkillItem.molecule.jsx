import React from "react";
import { IonItem } from "@ionic/react";
import styled from "styled-components";

const Skill = styled(IonItem)`
  display: flex;
  border-radius: 1rem;
  &:hover {
    --background: hsl(0, 0%, 90%);
  }
`;
const Logo = styled.img`
  object-fit: contain;
  width: 1.5rem;
  border-radius: 0.2rem;
  margin-right: 0.5rem;
`;

function SkillItem({ logo, name }) {
  return (
    <Skill lines="none">
      <Logo src={logo} alt={name} />
      <p>{name}</p>
    </Skill>
  );
}

export default SkillItem;
