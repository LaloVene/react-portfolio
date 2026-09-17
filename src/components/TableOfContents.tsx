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
  const [activeSection, setActiveSection] = useState<string>("");
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      // Find the active section based on current scroll position
      let current = "";
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

      // If scrolled near top
      if (window.scrollY < 300) {
        current = "";
      } else if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
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

  return (
    <aside
      aria-label="Table of contents"
      className="hidden xl:flex fixed left-6 2xl:left-10 top-1/2 -translate-y-1/2 z-40 flex-col items-start select-none"
    >
      {/* Bauhaus Structural Rail */}
      <div className="relative flex items-stretch gap-3">
        {/* Progress Track Line */}
        <div className="relative w-1 bg-[var(--border-subtle)] rounded-full overflow-hidden flex flex-col justify-start">
          {/* Animated Progress Fill */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute top-0 left-0 right-0 w-full h-full bg-gradient-to-b from-[#E63946] via-[#1D3557] to-[#F4D03F]"
          />
        </div>

        {/* Section Markers */}
        <nav className="flex flex-col gap-4 py-2" aria-label="Page Sections">
          {SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;

            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollToSection(sec.id)}
                className="group flex items-center gap-2.5 text-left cursor-pointer focus:outline-none transition-all duration-200"
                aria-current={isActive ? "location" : undefined}
              >
                {/* Square Bauhaus Indicator */}
                <div
                  className={`w-2.5 h-2.5 transition-all duration-200 ${
                    isActive
                      ? "bg-[#E63946] scale-125 shadow-[0_0_10px_rgba(230,57,70,0.5)]"
                      : "bg-[var(--border-primary)] group-hover:bg-[#1D3557] group-hover:scale-110"
                  }`}
                />

                {/* Section Number & Label */}
                <div className="flex items-center gap-1.5 font-mono text-[11px] tracking-widest uppercase transition-colors duration-200">
                  <span
                    className={`transition-colors ${
                      isActive
                        ? "text-[#E63946] font-bold"
                        : "text-[var(--text-muted)] group-hover:text-[var(--text-primary)]"
                    }`}
                  >
                    [{sec.num}]
                  </span>
                  <span
                    className={`transition-all duration-200 ${
                      isActive
                        ? "text-[var(--text-primary)] font-bold translate-x-0.5"
                        : "text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0"
                    }`}
                  >
                    {sec.label}
                  </span>
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
