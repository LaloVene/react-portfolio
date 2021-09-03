import React from "react";
import styled from "styled-components";
import NavbarButton from "../../atoms/NavbarButton/NavbarButton.atom";

const Container = styled.div`
  padding: 0 1.5rem;
  background: #343353;
  display: flex;
`;
const ItemContainer = styled.div`
  margin: 0 1.5rem;
  padding: 0;
`;

const items = [
  {
    label: "Home",
  },
  {
    label: "About",
  },
  {
    label: "Experience",
  },
  {
    label: "Contact",
  },
];

const Navbar = () => (
  <Container>
    {items.map((item) => (
      <ItemContainer key={item.label}>
        <NavbarButton>{item.label}</NavbarButton>
      </ItemContainer>
    ))}
  </Container>
);

export default Navbar;
