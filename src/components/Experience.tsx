import React, { useState } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import {
  IconBriefcase,
  IconSchool,
  IconMapPin,
  IconCalendar,
} from "@tabler/icons-react";
import Section from "./Section";
import backgroundData from "../assets/data/background.json";

export interface ExperienceProps {
  id?: string;
  number?: string;
  title?: string;
  subtitle?: string;
}

interface ExperienceItem {
  title: string;
  location: string;
  time: string;
  description: string;
  type: "work" | "education";
}

const workItems: ExperienceItem[] = backgroundData.work.map((item) => ({
  ...item,
  type: "work",
}));

const educationItems: ExperienceItem[] = backgroundData.education.map((item) => ({
  ...item,
  type: "education",
}));

export function Experience({
  id = "experience",
  number = "02",
  title = "EXPERIENCE",
  subtitle = "Chronological trajectory spanning enterprise AI research, cloud infrastructure, and academic honors.",
}: ExperienceProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <Section id={id} number={number} title={title} subtitle={subtitle}>
      {/* Dual-Column Bauhaus Architectural View (Permanent default) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Column 1: Work Experience */}
        <div>
          <div className="flex items-center justify-between pb-3 mb-8 border-b-2 border-[#E63946]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#E63946] block" />
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[var(--text-primary)]">
                01 // INDUSTRY &amp; APPLIED RESEARCH
              </h3>
            </div>
            <span className="font-mono text-xs text-[var(--text-muted)]">
              [{workItems.length} ROLES]
            </span>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            {workItems.map((item, idx) => (
              <TimelineCard key={idx} item={item} index={idx} />
            ))}
          </motion.div>
        </div>

        {/* Column 2: Education */}
        <div>
          <div className="flex items-center justify-between pb-3 mb-8 border-b-2 border-[#1D3557]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#1D3557] block" />
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[var(--text-primary)]">
                02 // ACADEMIC FORMATION &amp; HONORS
              </h3>
            </div>
            <span className="font-mono text-xs text-[var(--text-muted)]">
              [{educationItems.length} DEGREES]
            </span>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            {educationItems.map((item, idx) => (
              <TimelineCard key={idx} item={item} index={idx} />
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

interface TimelineCardProps {
  item: ExperienceItem;
  index: number;
  showTypeBadge?: boolean;
}

function TimelineCard({ item, index }: TimelineCardProps) {
  const isWork = item.type === "work";
  const accentColor = isWork ? "#E63946" : "#1D3557";
  const Icon = isWork ? IconBriefcase : IconSchool;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: (index % 5) * 0.08,
        ease: "easeOut",
      }}
      className="group relative border border-[var(--border-primary)] bg-[var(--card-bg)] p-6 sm:p-8 hover:border-[#E63946] transition-colors duration-300 shadow-sm"
    >
      {/* Decorative top-right Bauhaus notch */}
      <div className="absolute top-0 right-0 w-2 h-2 bg-[var(--border-primary)] group-hover:bg-[#E63946] transition-colors" />

      {/* Top Metadata Rail */}
      <div className="flex items-center gap-2 pb-3 mb-3 border-b border-[var(--border-subtle)] font-mono text-xs text-[var(--text-muted)]">
        <span className="text-[#E63946] font-bold">
          [{String(index + 1).padStart(2, "0")}]
        </span>
        <span className="flex items-center gap-1 text-[var(--text-secondary)]">
          <IconMapPin size={13} />
          <span className="line-clamp-1">{item.location}</span>
        </span>
      </div>

      {/* Role Title & Date */}
      <div className="flex items-start gap-3 mb-3">
        <div
          className="p-1.5 shrink-0 mt-0.5 border"
          style={{
            borderColor: `${accentColor}40`,
            backgroundColor: `${accentColor}10`,
            color: accentColor,
          }}
        >
          <Icon size={16} />
        </div>
        <div className="w-full">
          <h4 className="text-base sm:text-lg font-bold text-[var(--text-primary)] leading-snug group-hover:text-[#E63946] transition-colors">
            {item.title}
          </h4>
          <div className="flex items-center gap-1.5 text-[var(--text-muted)] font-mono text-xs mt-1.5">
            <IconCalendar size={13} />
            <span>{item.time}</span>
          </div>
        </div>
      </div>
      {/* Description Content with Markdown */}
      <div className="text-xs sm:text-sm text-[var(--text-secondary)] font-light leading-relaxed mt-4 pt-3 border-t border-[var(--border-subtle)]">
        <ReactMarkdown
          components={{
            strong: ({ node, ...props }) => (
              <strong className="font-semibold text-[var(--text-primary)]" {...props} />
            ),
            p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
          }}
        >
          {item.description}
        </ReactMarkdown>
      </div>
    </motion.div>
  );
}

export default Experience;
