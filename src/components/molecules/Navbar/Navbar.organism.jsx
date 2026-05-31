import React, { useContext } from "react";
import { Group } from "@mantine/core";
import GlobalContext from "../../../utils/state/GlobalContext";
import NavbarButton from "../../atoms/NavbarButton/NavbarButton.atom";

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
    <Group justify="space-between" w="32rem" visibleFrom="md">
      {items.map((item) => (
        <NavbarButton onClick={item.onClick} key={item.label}>
          {item.label}
        </NavbarButton>
      ))}
    </Group>
  );
};

export default Navbar;
