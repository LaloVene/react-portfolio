import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconCertificate,
  IconAward,
  IconSchool,
  IconExternalLink,
} from "@tabler/icons-react";
import Section from "./Section";
import diplomasData from "../assets/data/diplomas.json";

export interface CertificatesProps {
  id?: string;
  number?: string;
  title?: string;
  subtitle?: string;
}

type CategoryFilter = "all" | "certificates" | "education" | "hackathons";

interface DiplomaItem {
  title: string;
  date: string;
  institution: string;
  imageUrl?: string;
  url?: string;
  category: "certificates" | "education" | "hackathons";
  code: string;
}

const allItems: DiplomaItem[] = [
  ...diplomasData.certificates.map((item, idx) => ({
    ...item,
    category: "certificates" as const,
    code: `CRT_${String(idx + 1).padStart(2, "0")}`,
  })),
  ...diplomasData.education.map((item, idx) => ({
    ...item,
    category: "education" as const,
    code: `ACD_${String(idx + 1).padStart(2, "0")}`,
  })),
  ...diplomasData.hackathons.map((item, idx) => ({
    ...item,
    category: "hackathons" as const,
    code: `HCK_${String(idx + 1).padStart(2, "0")}`,
  })),
];

export function Certificates({
  id = "certificates",
  number = "05",
  title = "ACCREDITATIONS",
  subtitle = "Index of professional certifications, academic honors, and competitive hackathon awards.",
}: CertificatesProps) {
  const [filter, setFilter] = useState<CategoryFilter>("all");

  const filteredItems =
    filter === "all"
      ? allItems
      : allItems.filter((item) => item.category === filter);

  return (
    <Section id={id} number={number} title={title} subtitle={subtitle}>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-[var(--border-primary)] pb-4">
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: "all", label: "ALL ACCREDITATIONS", count: allItems.length },
            {
              id: "certificates",
              label: "CERTIFICATIONS",
              count: diplomasData.certificates.length,
            },
            {
              id: "education",
              label: "ACADEMIC HONORS",
              count: diplomasData.education.length,
            },
            {
              id: "hackathons",
              label: "HACKATHONS",
              count: diplomasData.hackathons.length,
            },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id as CategoryFilter)}
              className={`cursor-pointer px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors border ${
                filter === tab.id
                  ? "bg-[#1D3557] text-white border-[#1D3557] font-bold"
                  : "bg-[var(--card-bg)] text-[var(--text-secondary)] border-[var(--border-primary)] hover:border-[#E63946] hover:text-[var(--text-primary)]"
              }`}
            >
              <span>{tab.label}</span>
              <span className="ml-2 opacity-60">[{tab.count}]</span>
            </button>
          ))}
        </div>

        <div className="font-mono text-xs text-[var(--text-muted)]">
          // TOTAL: {filteredItems.length} ENTRIES
        </div>
      </div>

      {/* Bauhaus Architectural Ledger Table */}
      <div className="border border-[var(--border-primary)] bg-[var(--card-bg)] shadow-sm">
        {/* Table Column Headers (Desktop) */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-[var(--bg-subtle)] border-b border-[var(--border-primary)] font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
          <div className="col-span-2">REF CODE</div>
          <div className="col-span-5">TITLE &amp; SPECIALIZATION</div>
          <div className="col-span-3">ISSUING BODY</div>
          <div className="col-span-2 text-right">CREDENTIAL</div>
        </div>

        {/* Rows */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="divide-y divide-[var(--border-subtle)]"
          >
            {filteredItems.map((item, idx) => {
              const isHackathon = item.category === "hackathons";
              const isDegree = item.category === "education";
              const badgeColor = isHackathon
                ? "#E63946"
                : isDegree
                ? "#1D3557"
                : "#F4D03F";

              return (
                <motion.div
                  key={item.code}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.03, duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-6 py-4 items-center hover:bg-[var(--card-hover)] transition-colors group"
                >
                  {/* Ref Code & Date */}
                  <div className="col-span-2 flex md:flex-col items-center md:items-start justify-between font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-1.5 h-1.5 block"
                        style={{ backgroundColor: badgeColor }}
                      />
                      <span className="font-bold text-[var(--text-primary)]">
                        {item.code}
                      </span>
                    </div>
                    <span className="text-[var(--text-muted)] text-[11px] mt-0.5">
                      {item.date}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="col-span-5">
                    <h4 className="font-bold text-sm sm:text-base text-[var(--text-primary)] group-hover:text-[#E63946] transition-colors leading-snug">
                      {item.title}
                    </h4>
                  </div>

                  {/* Institution */}
                  <div className="col-span-3 font-mono text-xs text-[var(--text-secondary)]">
                    <span className="px-2 py-0.5 border border-[var(--border-primary)] bg-[var(--bg-subtle)] inline-block">
                      {item.institution}
                    </span>
                  </div>

                  {/* Verification Link Button */}
                  <div className="col-span-2 flex justify-start md:justify-end">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] hover:text-[#E63946] border border-transparent hover:border-[var(--border-primary)] px-2.5 py-1 transition-all"
                      >
                        <span>VERIFY</span>
                        <IconExternalLink size={13} />
                      </a>
                    ) : (
                      <span className="font-mono text-xs text-[var(--text-muted)]">
                        ARCHIVED
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}

export default Certificates;
