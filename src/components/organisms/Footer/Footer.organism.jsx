import React from "react";
import styled from "styled-components";
import Logo from "../../atoms/Logo/Logo.atom";

const Container = styled.div`
  padding: 2rem 0;
  background: #343353;
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
