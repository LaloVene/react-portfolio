import React from "react";
import { Button as MantineButton } from "@mantine/core";

function Button({ children, href, color, ...props }) {
  const baseProps = {
    color,
    radius: "xl",
    c: "white",
    fz: "1rem",
    fw: 700,
    m: 0,
    ...props,
  };

  if (href) {
    return (
      <MantineButton component="a" href={href} {...baseProps}>
        {children}
      </MantineButton>
    );
  }

  return <MantineButton {...baseProps}>{children}</MantineButton>;
}

export default Button;
