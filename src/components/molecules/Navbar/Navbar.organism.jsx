import React from "react";
import styled from "styled-components";
import NavbarButton from "../../atoms/NavbarButton/NavbarButton.atom";

const Container = styled.div`
  background: #343353;
  display: flex;
  width: 30rem;
  justify-content: space-between;

  @media(max-width: 768px) {
    display: none;
  }
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
      <NavbarButton key={item.label}>{item.label}</NavbarButton>
    ))}
  </Container>
);

export default Navbar;
