import React from "react";
import { Button as HeroButton } from "@heroui/react";

function Button({
  children,
  href,
  color,
  className = "",
  target,
  rel,
  onPress,
  ...props
}) {
  let colorProp = "default";
  let customClasses = "";

  if (color === "dark") {
    customClasses =
      "bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:hover:bg-neutral-200 dark:text-black";
  } else if (color === "danger") {
    customClasses =
      "bg-red-400 hover:bg-red-400 text-white dark:bg-red-500 dark:hover:bg-red-600 dark:text-white";
  }

  const baseClasses = `rounded-full text-base font-bold m-0 transition-all duration-200 shadow-sm hover:scale-105 active:scale-95 ${customClasses} ${className}`;

  if (href) {
    const handlePress = (event) => {
      if (onPress) {
        onPress(event);
      }

      if (event?.defaultPrevented) {
        return;
      }

      if (target === "_blank") {
        window.open(
          href,
          "_blank",
          rel?.includes("noopener") ? "noopener,noreferrer" : undefined,
        );
        return;
      }

      window.location.assign(href);
    };

    return (
      <HeroButton onPress={handlePress} className={baseClasses} {...props}>
        {children}
      </HeroButton>
    );
  }

  return (
    <HeroButton color={colorProp} className={baseClasses} {...props}>
      {children}
    </HeroButton>
  );
}

export default Button;
