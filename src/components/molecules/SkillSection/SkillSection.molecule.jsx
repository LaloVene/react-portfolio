import React from "react";
import { IonRow, IonCol } from "@ionic/react";
import styled from "styled-components";
import SkillItem from "../SkillItem/SkillItem.molecule";

const Container = styled.div`
  margin-left: 1rem;

  @media (max-width: 768px) {
    margin-left: 0.5rem;
  }
  & h2 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0;
  }
`;
const Col = styled(IonCol)`
  padding: 0;
`;

function SkillSection({ title, skills }) {
  return (
    <Container>
      <h2>{title}</h2>
      <IonRow>
        {skills.map((skill) => (
          <Col
            size="6"
            sizeSm="3"
            sizeMd="2.2"
            sizeLg="1.8"
            sizeXl="1.5"
            key={skill.name}
          >
            <SkillItem {...skill} />
          </Col>
        ))}
      </IonRow>
    </Container>
  );
}

export default SkillSection;
