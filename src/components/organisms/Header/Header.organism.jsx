import React, {useContext} from "react";
import {
  IonHeader,
  IonToolbar,
} from "@ionic/react";
import GlobalContext from "../../../utils/state/GlobalContext";
import styled from "styled-components";
import Logo from "../../atoms/Logo/Logo.atom";
import Navbar from "../../molecules/Navbar/Navbar.organism";

const Container = styled.div`
  padding: 1rem 2rem;
  background: #343353;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  const { state } = useContext(GlobalContext);

  return (
    <IonHeader>
      <IonToolbar>
        <Container ref={state.homeRef}>
          <Logo />
          <Navbar />
        </Container>
      </IonToolbar>
    </IonHeader>
  );
}

export default Header;
