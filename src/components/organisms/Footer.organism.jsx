import React from "react";
import Logo from "../atoms/Logo.atom";

function Footer() {
  return (
    <footer className="pb-10 pt-8 bg-white dark:bg-neutral-950 border-t border-divider">
      <div className="flex justify-center items-center">
        <Logo />
      </div>
    </footer>
  );
}

export default Footer;
