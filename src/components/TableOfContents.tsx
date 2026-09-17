import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface SectionItem {
  id: string;
  num: string;
  label: string;
}

const SECTIONS: SectionItem[] = [
  { id: "about", num: "01", label: "ABOUT" },
  { id: "experience", num: "02", label: "EXPERIENCE" },
  { id: "projects", num: "03", label: "PROJECTS" },
  { id: "skills", num: "04", label: "SKILLS" },
  { id: "certificates", num: "05", label: "ACCREDITATIONS" },
  { id: "contact", num: "06", label: "CONTACT" },
];

export function TableOfContents() {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      let current = "about";
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = section.id;
            break;
          }
        }
      }

      if (window.scrollY < 200) {
        current = "about";
      } else if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 120
      ) {
        current = "contact";
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentSelection = hoveredSection || activeSection;

  return (
    <aside
      aria-label="Table of contents"
      className="hidden xl:flex fixed left-5 2xl:left-8 top-1/2 -translate-y-1/2 z-40 select-none pointer-events-none"
    >
      <div className="relative flex items-stretch gap-3 pointer-events-auto">
        {/* Continuous Progress Track Line */}
        <div className="relative w-1 my-1 bg-[var(--border-subtle)] rounded-full overflow-hidden flex flex-col justify-start">
          {/* Animated Progress Fill */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute top-0 left-0 right-0 w-full h-full bg-gradient-to-b from-[#E63946] via-[#1D3557] to-[#F4D03F]"
          />
        </div>

        {/* Section Markers with Individual Liquid Glass Pill Bubbles */}
        <nav
          className="relative flex flex-col items-start gap-2 py-1"
          aria-label="Page Sections"
          onMouseLeave={() => setHoveredSection(null)}
        >
          {SECTIONS.map((sec) => {
            const isSelected = currentSelection === sec.id;

            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollToSection(sec.id)}
                onMouseEnter={() => setHoveredSection(sec.id)}
                className="relative group flex items-center gap-2 pl-3 pr-5 py-2 rounded-full text-left cursor-pointer focus:outline-none transition-all duration-200 w-fit"
                aria-current={isSelected ? "location" : undefined}
              >
                {/* Individual Pill Bubble - wraps exactly around this button */}
                {isSelected && (
                  <motion.div
                    layoutId="liquid-glass-toc-lens"
                    className="absolute inset-0 rounded-full pointer-events-none -z-10 overflow-hidden"
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 32,
                      mass: 0.5,
                    }}
                  >
                    {/* Glass Pill Surface: Crisp white in light mode, smoky in dark mode */}
                    <div className="liquid-lens-surface absolute inset-0 rounded-full" />

                    {/* Specular Curved Highlight (Top Arch) */}
                    <div className="liquid-lens-highlight absolute top-0 left-2 right-2 h-1.5 rounded-full blur-[0.5px]" />

                    {/* Subtle chromatic refraction */}
                    <div className="liquid-lens-tint absolute inset-0 rounded-full" />
                  </motion.div>
                )}

                {/* Bauhaus Geometric Indicator */}
                <motion.div
                  animate={{
                    scale: isSelected ? 1.25 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                  className={`w-2 h-2 shrink-0 rounded-full transition-all duration-200 ${
                    isSelected
                      ? "bg-[#E63946] shadow-[0_0_8px_rgba(230,57,70,0.7)]"
                      : "bg-[var(--border-primary)] group-hover:bg-[#1D3557]"
                  }`}
                />

                {/* Section Number & Label */}
                <div className="flex items-center gap-1.5 font-mono text-[11px] tracking-wider uppercase whitespace-nowrap">
                  <motion.span
                    animate={{
                      scale: isSelected ? 1.2 : 1,
                      originX: 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className={`transition-colors shrink-0 ${
                      isSelected
                        ? "text-[#E63946] font-bold"
                        : "text-[var(--text-muted)] group-hover:text-[var(--text-primary)]"
                    }`}
                  >
                    [{sec.num}]
                  </motion.span>
                  <motion.span
                    animate={{
                      scale: isSelected ? 1.15 : 1,
                      originX: 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className={`transition-all duration-200 ${
                      isSelected
                        ? "text-[var(--text-primary)] font-bold max-w-[260px] opacity-100"
                        : "text-[var(--text-secondary)] max-w-0 opacity-0 group-hover:max-w-[260px] group-hover:opacity-100 overflow-hidden"
                    }`}
                  >
                    {sec.label}
                  </motion.span>
                </div>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

export default TableOfContents;
