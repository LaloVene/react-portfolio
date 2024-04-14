import React, { useContext } from "react";
import { IonHeader, IonToolbar } from "@ionic/react";
import GlobalContext from "../../../utils/state/GlobalContext";
import styled from "styled-components";
import Logo from "../../atoms/Logo/Logo.atom";
import Navbar from "../../molecules/Navbar/Navbar.organism";

const StyledHeader = styled(IonHeader)`
  &:after {
    background-image: none;
  }
`;

const Container = styled.div`
  padding: 1rem 2rem;
  padding-bottom: 0;
  background: white;
  box-shadow: none;
`;
const Limiter = styled.div`
  max-width: 1770px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  const { state } = useContext(GlobalContext);

  return (
    <StyledHeader>
      <IonToolbar>
        <Container ref={state.homeRef}>
          <Limiter>
            <Logo />
            <Navbar />
          </Limiter>
        </Container>
      </IonToolbar>
    </StyledHeader>
  );
}

export default Header;
