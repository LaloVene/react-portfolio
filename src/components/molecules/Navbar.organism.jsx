import React, { useContext } from "react";
import GlobalContext from "../../utils/state/GlobalContext";
import NavbarButton from "../atoms/NavbarButton.atom";

const scrollTo = (ref) => {
  if (ref && ref.current) {
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
    <div className="hidden md:flex flex-row justify-between w-[32rem] gap-2">
      {items.map((item) => (
        <NavbarButton onClick={item.onClick} key={item.label}>
          {item.label}
        </NavbarButton>
      ))}
    </div>
  );
};

export default Navbar;
