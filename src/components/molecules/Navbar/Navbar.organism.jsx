import React, { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../utils/state/GlobalContext";
import NavbarButton from "../../atoms/NavbarButton/NavbarButton.atom";

const Container = styled.div`
  background: transparent;
  display: flex;
  width: 32rem;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`;

const scrollTo = (ref) => {
  if (ref && ref.current /* + other conditions */) {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const Navbar = () => {
  const { state } = useContext(GlobalContext);

  const items = [
    {
      label: "About",
      onClick: () => scrollTo(state.aboutRef),
    },
    {
      label: "Experience",
      onClick: () => scrollTo(state.backgroundRef),
    },
    {
      label: "Projects",
      onClick: () => scrollTo(state.projectsRef),
    },
    {
      label: "Contact",
      onClick: () => (window.location.href = "mailto:lalohdez77@gmail.com"),
    },
  ];
  return (
    <Container>
      {items.map((item) => (
        <NavbarButton onClick={item.onClick} key={item.label}>
          {item.label}
        </NavbarButton>
      ))}
    </Container>
  );
};

export default Navbar;
