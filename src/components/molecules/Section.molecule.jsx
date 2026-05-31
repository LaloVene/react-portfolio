import React from "react";
import SectionTitle from "../atoms/SectionTitle.atom";

const Section = React.forwardRef(({ children, title }, ref) => {
  return (
    <section ref={ref} className="mb-14 px-2">
      <SectionTitle>{title}</SectionTitle>
      <div className="mt-4">
        {children}
      </div>
    </section>
  );
});

export default Section;
