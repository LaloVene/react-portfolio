import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  IconBrain,
  IconCode,
  IconCloudCode,
  IconCpu,
} from "@tabler/icons-react";
import Section from "./Section";
import skillsData from "../assets/data/skills.json";

export interface SkillsProps {
  id?: string;
  number?: string;
  title?: string;
  subtitle?: string;
}

interface SkillItem {
  name: string;
  logo: string;
}

interface SkillCategory {
  num: string;
  title: string;
  subtitle: string;
  accent: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  skills: SkillItem[];
}

const CATEGORIES: SkillCategory[] = [
  {
    num: "01",
    title: "AI & DATA ARCHITECTURE",
    subtitle: "Reasoning engines, knowledge graphs, deep learning & analytics",
    accent: "#E63946",
    icon: IconBrain,
    skills: skillsData.aiData,
  },
  {
    num: "02",
    title: "SOFTWARE & FRAMEWORKS",
    subtitle: "Core languages, web runtimes, microservices & user interfaces",
    accent: "#1D3557",
    icon: IconCode,
    skills: skillsData.softwareFrameworks,
  },
  {
    num: "03",
    title: "CLOUD & MLOPS",
    subtitle: "Orchestration, cloud platforms, observability & industrial systems",
    accent: "#F4D03F",
    icon: IconCloudCode,
    skills: skillsData.cloudMLOps,
  },
];

export function Skills({
  id = "skills",
  number = "04",
  title = "TECHNICAL MATRIX",
  subtitle = "Technical taxonomy classified across architectural reasoning, core engineering, and cloud platforms.",
}: SkillsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <Section id={id} number={number} title={title} subtitle={subtitle}>
      <div className="space-y-16">
        {CATEGORIES.map((category) => {
          const Icon = category.icon;

          return (
            <div key={category.num} className="space-y-6">
              {/* Category Header Rail */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[var(--border-primary)] gap-2">
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 block shrink-0"
                    style={{ backgroundColor: category.accent }}
                  />
                  <div>
                    <h3 className="font-mono text-base font-bold uppercase tracking-wider text-[var(--text-primary)]">
                      {category.num} // {category.title}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] font-mono mt-0.5">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                <div className="font-mono text-xs text-[var(--text-muted)] flex items-center gap-2">
                  <span>[{category.skills.length} TECHNOLOGIES]</span>
                </div>
              </div>

              {/* Skills Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="group relative flex items-center gap-3 p-3 bg-[var(--card-bg)] border border-[var(--border-primary)] hover:border-[#E63946] transition-all duration-300 shadow-sm"
                  >
                    {/* Skill Logo */}
                    <SkillLogo logo={skill.logo} name={skill.name} accent={category.accent} />

                    {/* Skill Name */}
                    <div className="flex flex-col overflow-hidden">
                      <span className="font-mono text-xs font-bold text-[var(--text-primary)] truncate group-hover:text-[#E63946] transition-colors">
                        {skill.name}
                      </span>
                    </div>

                    {/* Subtle bottom line on hover */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[2px] w-0 group-hover:w-full transition-all duration-300"
                      style={{ backgroundColor: category.accent }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

interface SkillLogoProps {
  logo: string;
  name: string;
  accent: string;
}

function SkillLogo({ logo, name, accent }: SkillLogoProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className="w-6 h-6 shrink-0 flex items-center justify-center font-mono text-[10px] font-bold border"
        style={{
          borderColor: `${accent}40`,
          backgroundColor: `${accent}15`,
          color: accent,
        }}
      >
        {name.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  return (
    <div className="w-6 h-6 shrink-0 flex items-center justify-center overflow-hidden bg-white/5 p-0.5 rounded-sm">
      <img
        src={logo}
        alt={name}
        onError={() => setError(true)}
        className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-300"
        loading="lazy"
      />
    </div>
  );
}

export default Skills;
