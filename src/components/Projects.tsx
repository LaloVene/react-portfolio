import React, { useState } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import {
  IconBrandGithub,
  IconExternalLink,
  IconArrowUpRight,
  IconBook2,
  IconAward,
} from "@tabler/icons-react";
import Section from "./Section";
import projectsData from "../assets/data/projects.json";

export interface ProjectsProps {
  id?: string;
  number?: string;
  title?: string;
  subtitle?: string;
}

interface ProjectItem {
  title: string;
  name?: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  url?: string;
  tags: string[];
  publicationText?: string;
  winnerText?: string;
  winnerLink?: string;
}

const projects: ProjectItem[] = projectsData as ProjectItem[];

export function Projects({
  id = "projects",
  number = "03",
  title = "SELECTED WORKS",
  subtitle = "Selected engineering systems across neurosymbolic reasoning, autonomous driving perception, and enterprise AI.",
}: ProjectsProps) {
  return (
    <Section id={id} number={number} title={title} subtitle={subtitle}>
      <div className="space-y-16 lg:space-y-24">
        {projects.map((project, idx) => {
          const figNumber = `FIG. ${String(idx + 1).padStart(2, "0")}`;
          const isEven = idx % 2 === 0;

          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="border border-[var(--border-primary)] bg-[var(--card-bg)] hover:border-[#E63946] transition-colors duration-300 relative group overflow-hidden shadow-sm"
            >
              {/* Top Architectural Header Bar */}
              <div className="border-b border-[var(--border-primary)] px-6 py-3.5 bg-[var(--bg-subtle)] flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <span className="text-[#E63946] font-bold">[{figNumber}]</span>
                  <span className="text-[var(--text-muted)]">//</span>
                  <span className="text-[var(--text-secondary)] uppercase tracking-wider">
                    {project.tags[0] || "AI SYSTEM"}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {project.publicationText && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#1D3557] text-white border border-[#1D3557] text-[11px] font-bold uppercase tracking-wider shadow-sm">
                      <IconBook2 size={12} />
                      <span>{project.publicationText}</span>
                    </span>
                  )}

                  {project.winnerText && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#F4D03F] text-[#0a0a0a] border border-[#e5c02b] text-[11px] font-bold uppercase tracking-wider shadow-sm">
                      <IconAward size={12} className="text-[#E63946]" />
                      <span>{project.winnerText}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Main Content: Two Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left Column: Image Representation */}
                <div
                  className={`lg:col-span-6 relative border-b lg:border-b-0 ${
                    isEven ? "lg:border-r border-[var(--border-primary)]" : "lg:order-2 lg:border-l border-[var(--border-primary)]"
                  }`}
                >
                  <ProjectImage
                    src={project.imageUrl}
                    alt={project.title}
                    figNumber={figNumber}
                  />
                </div>

                {/* Right Column: Text Information & Metadata */}
                <div
                  className={`lg:col-span-6 p-6 sm:p-8 md:p-10 flex flex-col justify-between ${
                    isEven ? "" : "lg:order-1"
                  }`}
                >
                  <div className="space-y-6">
                    {/* Project Title */}
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[var(--text-primary)] group-hover:text-[#E63946] transition-colors">
                      {project.title}
                    </h3>

                    {/* Description rendered as Markdown */}
                    <div className="text-sm sm:text-base text-[var(--text-secondary)] font-light leading-relaxed">
                      <ReactMarkdown
                        components={{
                          strong: ({ node, ...props }) => (
                            <strong
                              className="font-semibold text-[var(--text-primary)]"
                              {...props}
                            />
                          ),
                          p: ({ node, ...props }) => (
                            <p className="mb-3 last:mb-0" {...props} />
                          ),
                        }}
                      >
                        {project.description}
                      </ReactMarkdown>
                    </div>

                    {/* Tag Cloud */}
                    <div className="pt-2">
                      <div className="font-mono text-[11px] uppercase tracking-widest text-[var(--text-muted)] mb-2.5">
                        TECH SPECIFICATION //
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-xs px-2.5 py-1 bg-[var(--bg-subtle)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:border-[#1D3557] transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* External Links Rail */}
                  <div className="pt-8 mt-8 border-t border-[var(--border-primary)] flex flex-wrap items-center gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-bauhaus-solid inline-flex items-center gap-2 px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors"
                      >
                        <IconBrandGithub size={16} />
                        <span>VIEW REPOSITORY</span>
                      </a>
                    )}

                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 border border-[var(--border-primary)] bg-[var(--bg-subtle)] text-[var(--text-primary)] font-mono text-xs font-bold uppercase tracking-wider hover:border-[#1D3557] hover:text-[#1D3557] transition-colors"
                      >
                        <IconExternalLink size={16} />
                        <span>{project.publicationText ? "READ PUBLICATION" : "LIVE APPLICATION"}</span>
                      </a>
                    )}

                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}

interface ProjectImageProps {
  src: string;
  alt: string;
  figNumber: string;
}

function ProjectImage({ src, alt }: ProjectImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full h-64 sm:h-80 lg:h-full min-h-[260px] overflow-hidden group/img bg-[var(--bg-subtle)]">
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          className="w-full h-full object-cover object-center grayscale contrast-110 group-hover/img:grayscale-0 group-hover/img:scale-105 transition-all duration-700 ease-out"
          loading="lazy"
        />
      ) : (
        /* Fallback Bauhaus geometric pattern if remote image fails */
        <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[var(--card-bg)] border border-[var(--border-subtle)] relative">
          <div className="absolute top-6 left-6 w-8 h-8 border-2 border-[#E63946]" />
          <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full border-2 border-[#1D3557]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 opacity-30">
            <svg viewBox="0 0 100 100" fill="none">
              <polygon points="50,10 90,90 10,90" fill="#F4D03F" />
            </svg>
          </div>
          <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest z-10">
            TECHNICAL SCHEMATIC
          </span>
          <span className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider text-center mt-2 z-10">
            {alt}
          </span>
        </div>
      )}

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 pointer-events-none" />

      {/* Bauhaus bottom accent stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E63946] scale-x-0 group-hover/img:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
}

export default Projects;
