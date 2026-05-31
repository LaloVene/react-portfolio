import React, { useContext } from "react";
import GlobalContext from "../../utils/state/GlobalContext";
import Logo from "../atoms/Logo.atom";
import Navbar from "../molecules/Navbar.organism";

function Header() {
  const { state } = useContext(GlobalContext);

  return (
    <header
      ref={state.homeRef}
      className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-neutral-950/80 transition-all duration-200"
    >
      <div className="max-w-[2300px] mx-auto py-4 px-6 flex flex-row justify-between items-center">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
