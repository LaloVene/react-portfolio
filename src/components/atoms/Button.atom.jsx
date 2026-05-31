import React from "react";
import { Button as HeroButton } from "@heroui/react";

function Button({ children, href, color, className = "", ...props }) {
  // Map Mantine colors to HeroUI / Tailwind equivalents
  let colorProp = "default";
  let customClasses = "";

  if (color === "red") {
    colorProp = "danger";
  } else if (color === "dark") {
    customClasses = "bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:hover:bg-neutral-200 dark:text-black";
  }

  const baseClasses = `rounded-full text-base font-bold m-0 transition-all duration-200 shadow-sm hover:scale-105 active:scale-95 ${customClasses} ${className}`;

  if (href) {
    return (
      <HeroButton
        as="a"
        href={href}
        color={colorProp}
        className={baseClasses}
        {...props}
      >
        {children}
      </HeroButton>
    );
  }

  return (
    <HeroButton
      color={colorProp}
      className={baseClasses}
      {...props}
    >
      {children}
    </HeroButton>
  );
}

export default Button;
