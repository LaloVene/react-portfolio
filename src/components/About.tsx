import React from "react";
import { motion } from "framer-motion";
import {
  IconDownload,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconArrowUpRight,
  IconSchool,
  IconBrain,
  IconTrophy,
  IconMedal,
} from "@tabler/icons-react";
import Section from "./Section";
import pfpImg from "../assets/pfp.png";
import resumePdf from "../assets/resume.pdf";

export interface AboutProps {
  id?: string;
  number?: string;
  title?: string;
  subtitle?: string;
}

const STATS = [
  {
    num: "94.60",
    label: "GPA / 100",
    detail: "BSc. Computer Science at Tec de Monterrey",
    highlight: "#E63946",
    icon: IconSchool,
  },
  {
    num: "1.0",
    label: "MASTER'S GRADE",
    detail: "Thesis Seminar at Saarland University (Top German Mark)",
    highlight: "#1D3557",
    icon: IconBrain,
  },
  {
    num: "5x",
    label: "ACADEMIC HONORS",
    detail: "Best Software Engineering GPA Recognition",
    highlight: "#F4D03F",
    icon: IconMedal,
  },
  {
    num: "3x",
    label: "HACKATHON WINS",
    detail: "International AI & Computer Vision Awards",
    highlight: "#E63946",
    icon: IconTrophy,
  },
];

const HIGHLIGHT_TAGS = [
  "Agentic AI",
  "KG-RAG Systems",
  "LangGraph",
  "LLM Benchmarking",
  "PyTorch",
  "Neo4j",
  "BMW Group",
  "DFKI Research",
  "Big Data / OCI",
];

export function About({
  id = "about",
  number = "01",
  title = "ABOUT",
  subtitle = "Architecting neurosymbolic intelligence and autonomous reasoning systems.",
}: AboutProps) {
  return (
    <Section id={id} number={number} title={title} subtitle={subtitle}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Architectural Portrait & Key Metrics */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {/* Bauhaus Architectural Photo Frame */}
          <div className="relative">
            {/* Geometric Accent Elements */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#E63946] z-10 pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#1D3557] z-10 pointer-events-none" />
            <div className="absolute top-8 -right-4 w-4 h-4 bg-[#F4D03F] z-10 pointer-events-none" />

            {/* Photo Container */}
            <div className="relative bg-[var(--bg-subtle)] border border-[var(--border-primary)] overflow-hidden group">
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--bg-subtle)]">
                <img
                  src={pfpImg}
                  alt="Eduardo Venegas portrait"
                  className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 pointer-events-none" />

                {/* Bauhaus primary accent corner badge */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[32px] border-r-[32px] border-t-[#E63946] border-r-[#E63946] border-b-[32px] border-l-[32px] border-b-transparent border-l-transparent pointer-events-none" />
              </div>

              {/* Architectural Label Bar */}
              <div className="p-3 bg-[var(--card-bg)] border-t border-[var(--border-primary)] flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#E63946] block" />
                  <span className="text-[var(--text-primary)] font-bold uppercase tracking-wider">
                    EDUARDO VENEGAS
                  </span>
                </div>
                <span className="text-[var(--text-muted)] tracking-widest">[FIG. 00]</span>
              </div>
            </div>
          </div>

          {/* Performance Metrics Grid (2x2) */}
          <div className="grid grid-cols-2 gap-3 font-mono">
            {STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="border border-[var(--border-primary)] bg-[var(--card-bg)] p-4 hover:border-[#E63946] transition-colors relative group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-black text-[var(--text-primary)] tracking-tight">
                      {stat.num}
                    </span>
                    <Icon size={18} className="text-[var(--text-muted)] group-hover:text-[#E63946] transition-colors" />
                  </div>
                  <div className="text-[11px] font-bold tracking-wider uppercase text-[var(--text-secondary)]">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-[var(--text-muted)] mt-1 line-clamp-2 leading-tight">
                    {stat.detail}
                  </div>
                  <div
                    className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: stat.highlight }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Manifesto & Narrative */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full pt-2">
          <div className="space-y-6">
            {/* Header Tag */}
            <div className="font-mono text-xs text-[#E63946] uppercase tracking-widest flex items-center gap-2">
              <span>// MANIFESTO</span>
              <span className="text-[var(--text-muted)]">•</span>
              <span className="text-[var(--text-muted)]">SYSTEMS OVER HYPE</span>
            </div>

            {/* Core Philosophy Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed">
              <p>
                I am a{" "}
                <strong className="text-[var(--text-primary)] font-bold">
                  Data &amp; AI Engineer
                </strong>{" "}
                completing my Master of Science in Data Science and Artificial
                Intelligence at{" "}
                <strong className="text-[var(--text-primary)] font-semibold">
                  Universität des Saarlandes
                </strong>
                . Currently conducting my Master Thesis in collaboration with{" "}
                <strong className="text-[var(--text-primary)] font-semibold">
                  BMW Group
                </strong>{" "}
                and the{" "}
                <strong className="text-[var(--text-primary)] font-semibold">
                  German Research Center for Artificial Intelligence (DFKI)
                </strong>
                .
              </p>

              <p>
                My research and engineering focus centers on industrializing
                complex agentic architectures: developing automated synthetic
                benchmarks to localize reasoning and tool-calling failures in{" "}
                <strong className="text-[var(--text-primary)] font-semibold">
                  Multi-Turn Agentic RAG
                </strong>
                , traversing enterprise-scale{" "}
                <strong className="text-[var(--text-primary)] font-semibold">
                  Neo4j Knowledge Graphs
                </strong>
                , and auditing retrieval workloads spanning millions of records.
              </p>

              <p>
                Previously engineered big data deployment frameworks at{" "}
                <strong className="text-[var(--text-primary)] font-semibold">Oracle</strong>,
                telemetry anomaly-detection pipelines for vehicle battery
                diagnostics at{" "}
                <strong className="text-[var(--text-primary)] font-semibold">
                  BMW Group
                </strong>
                , and edge AI applications at the{" "}
                <strong className="text-[var(--text-primary)] font-semibold">
                  August-Wilhelm Scheer Institute
                </strong>
                .
              </p>
            </div>

            {/* Technology Pill Tags */}
            <div className="pt-4">
              <div className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mb-3">
                PRIMARY DOMAINS //
              </div>
              <div className="flex flex-wrap gap-2">
                {HIGHLIGHT_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-3 py-1 bg-[var(--bg-subtle)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:border-[#E63946] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-8 sm:pt-10 mt-8 border-t border-[var(--border-primary)] flex flex-wrap items-center justify-between gap-4">
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bauhaus-solid inline-flex items-center gap-3 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <IconDownload size={16} />
              <span>DOWNLOAD CURRICULUM VITAE</span>
            </a>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/LaloVene"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 border border-[var(--border-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[#E63946] hover:bg-[var(--bg-subtle)] transition-colors"
              >
                <IconBrandGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/eduardo-venegas/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 border border-[var(--border-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[#1D3557] hover:bg-[var(--bg-subtle)] transition-colors"
              >
                <IconBrandLinkedin size={18} />
              </a>
              <a
                href="mailto:lalohdez77@gmail.com"
                aria-label="Send Email"
                className="p-3 border border-[var(--border-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[#F4D03F] hover:bg-[var(--bg-subtle)] transition-colors"
              >
                <IconMail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
