import React from "react";
import {
  IonHeader,
  IonToolbar,
} from "@ionic/react";
import styled from "styled-components";
import Logo from "../../atoms/Logo.atom";

const Container = styled.div`
  padding: 1rem 1.5rem;
  background: #343353;
`;

function Header() {
  return (
    <IonHeader>
      <IonToolbar>
        <Container><Logo /></Container>
      </IonToolbar>
    </IonHeader>
  );
}

export default Header;
