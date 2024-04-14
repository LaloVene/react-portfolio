import React from "react";
import styled from "styled-components";
import Logo from "../../atoms/Logo/Logo.atom";

const Container = styled.div`
  padding-bottom: 2rem;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Footer() {
  return (
    <Container>
      <Logo />
    </Container>
  );
}

export default Footer;
