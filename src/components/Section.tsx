import React from "react";
import { motion } from "framer-motion";

export interface SectionProps {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({
  id,
  number,
  title,
  subtitle,
  className = "",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-12 md:py-16 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative ${className}`}
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8 md:mb-10"
      >
        {/* Monospace section indicator */}
        <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#E63946] mb-2 uppercase">
          <span>[{number}]</span>
          <span className="text-[var(--text-muted)]">//</span>
          <span>{title}</span>
        </div>

        {/* Big uppercase title */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[var(--text-primary)]">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-4 text-base md:text-lg text-[var(--text-secondary)] font-light max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}

      </motion.div>

      {/* Section Content */}
      <div className="relative">
        {children}
      </div>
    </section>
  );
}

export default Section;
