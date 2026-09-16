import React from "react";
import { motion, type Variants } from "framer-motion";
import { IconArrowRight, IconDownload } from "@tabler/icons-react";
import resumePdf from "../assets/resume.pdf";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function Hero() {
  const scrollTo = (selector: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col justify-between pt-24 sm:pt-28 pb-8 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Bauhaus Geometric Composition (Top Right Background Accent) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-12 right-0 sm:right-6 md:right-12 pointer-events-none select-none -z-0 opacity-40 md:opacity-75"
        aria-hidden="true"
      >
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
          {/* Primary Bauhaus Red Circle */}
          <div className="absolute top-0 right-4 w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-[#E63946]/20 dark:bg-[#E63946]/30 blur-2xl md:blur-none md:bg-[#E63946]/85 mix-blend-multiply dark:mix-blend-screen" />

          {/* Secondary Bauhaus Blue Rectangle (Wireframe) */}
          <div className="absolute top-12 right-16 w-44 h-44 sm:w-56 sm:h-56 border-2 border-[#1D3557] opacity-80" />

          {/* Tertiary Bauhaus Yellow Solid Triangle (pure SVG) */}
          <svg
            className="absolute bottom-6 right-8 w-28 h-28 sm:w-36 sm:h-36 opacity-80"
            viewBox="0 0 100 100"
            fill="none"
          >
            <polygon
              points="50,10 90,90 10,90"
              fill="#F4D03F"
              opacity="0.85"
            />
          </svg>

          {/* Structural intersecting grid lines */}
          <div className="absolute inset-0 border border-[var(--border-subtle)]" />
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[var(--border-subtle)]" />
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[var(--border-subtle)]" />
        </div>
      </motion.div>

      {/* Main Typographic Hierarchy */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl"
      >
        {/* Monospace System Header */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#E63946] mb-6"
        >
          <span className="w-2.5 h-2.5 bg-[#E63946] block" />
          <span>PORTFOLIO // 2026</span>
          <span className="text-[var(--text-muted)]">//</span>
          <span className="text-[var(--text-secondary)]">RESEARCH & ENGINEERING</span>
        </motion.div>

        {/* Hero Title: Massive Architectural Scale */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-[var(--text-primary)] leading-[0.92] mb-8"
        >
          <span>DATA &amp; AI</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] via-[var(--text-secondary)] to-[var(--text-primary)]">
            ENGINEER
          </span>
        </motion.h1>

        {/* Narrative / Abstract */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl font-normal text-[var(--text-secondary)] max-w-2xl leading-relaxed mb-10"
        >
          Specializing in{" "}
          <strong className="text-[var(--text-primary)] font-semibold">
            Agentic RAG
          </strong>
          , enterprise{" "}
          <strong className="text-[var(--text-primary)] font-semibold">
            Knowledge Graphs
          </strong>
          , and automated failure evaluation for multi-turn LLM reasoning.
          Bridging foundational AI research with production-grade distributed
          architectures.
        </motion.p>

        {/* Monospace Metadata Table / Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 border border-[var(--border-primary)] divide-y md:divide-y-0 md:divide-x divide-[var(--border-primary)] bg-[var(--card-bg)] font-mono text-xs mb-10 max-w-4xl shadow-sm"
        >
          {/* Location */}
          <div className="p-4 sm:p-5 flex flex-col gap-1.5">
            <span className="text-[var(--text-muted)] uppercase tracking-wider">
              [LOC // 01] LOCATION
            </span>
            <span className="text-[var(--text-primary)] font-bold uppercase">
              Munich, Germany
            </span>
          </div>

          {/* Research Affiliations */}
          <div className="p-4 sm:p-5 flex flex-col gap-1.5">
            <span className="text-[var(--text-muted)] uppercase tracking-wider">
              [AFF // 02] CURRENT ROLE
            </span>
            <span className="text-[var(--text-primary)] font-bold uppercase">
              BMW Group &amp; DFKI
            </span>
          </div>

          {/* Specialization */}
          <div className="p-4 sm:p-5 flex flex-col gap-1.5">
            <span className="text-[var(--text-muted)] uppercase tracking-wider">
              [SPC // 03] CORE FOCUS
            </span>
            <span className="text-[var(--text-primary)] font-bold uppercase">
              Agentic RAG &amp; Graphs
            </span>
          </div>
        </motion.div>

        {/* Call to Actions */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <a
            href="#projects"
            onClick={scrollTo("#projects")}
            className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#E63946] text-white font-mono text-xs font-bold uppercase tracking-widest transition-all duration-200 hover:bg-[#1D3557] shadow-sm focus:outline-none"
          >
            <span>VIEW PROJECTS</span>
            <IconArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>

          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-bauhaus-solid group inline-flex items-center justify-center gap-3 px-7 py-4 font-mono text-xs font-bold uppercase tracking-widest transition-all duration-200 focus:outline-none shadow-sm"
          >
            <span>DOWNLOAD CV</span>
            <IconDownload
              size={16}
              className="transition-transform duration-200 group-hover:translate-y-0.5"
            />
          </a>
        </motion.div>
      </motion.div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="pt-8 sm:pt-10 flex items-center justify-between border-t border-[var(--border-subtle)] mt-8 text-[var(--text-muted)] font-mono text-xs uppercase tracking-widest"
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#E63946]" />
          <span>SCROLL TO EXPLORE</span>
        </div>

        <a
          href="#about"
          onClick={scrollTo("#about")}
          className="flex items-center gap-3 hover:text-[var(--text-primary)] transition-colors group"
          aria-label="Scroll to about section"
        >
          <span className="hidden sm:inline">[SECTION // 01]</span>
          <div className="w-[1px] h-10 bg-[var(--border-primary)] relative overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-full h-1/2 bg-[#E63946]"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
