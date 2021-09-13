import React from "react";
import { IonRow, IonCol } from "@ionic/react";
import styled from "styled-components";
import ProjectCard from "../../molecules/ProjectCard/ProjectCard";
import ProjectData from "../../../assets/data/projects.json";

const Container = styled.div``;

function Projects() {
  return (
    <Container>
      <IonRow>
        {ProjectData.map((project) => (
          <IonCol size="12" sizeLg="6" sizeXl="4" key={project.name}>
            <ProjectCard {...project} />
          </IonCol>
        ))}
      </IonRow>
    </Container>
  );
}

export default Projects;
