import React from "react";
import { Box } from "@mantine/core";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle.atom";

const Section = React.forwardRef(({ children, title }, ref) => {
  return (
    <Box ref={ref} mb="6rem">
      <SectionTitle>{title}</SectionTitle>
      {children}
    </Box>
  );
});

export default Section;
