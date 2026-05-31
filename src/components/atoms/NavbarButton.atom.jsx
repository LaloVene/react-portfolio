import React from "react";
import { Button as HeroButton } from "@heroui/react";

function NavbarButton({ children, onClick }) {
  return (
    <HeroButton
      onClick={onClick}
      variant="light"
      className="text-base font-bold text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-200"
    >
      {children}
    </HeroButton>
  );
}

export default NavbarButton;
