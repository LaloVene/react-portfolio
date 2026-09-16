import React from "react";
import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconDownload,
  IconArrowUpRight,
} from "@tabler/icons-react";
import resumePdf from "../assets/resume.pdf";

export function Footer() {
  const email = "lalohdez77@gmail.com";

  return (
    <footer
      id="contact"
      className="relative w-full border-t border-[var(--border-primary)] bg-[var(--card-bg)] text-[var(--text-primary)] pt-16 md:pt-20 pb-12 transition-colors duration-250"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#E63946] mb-4 uppercase"
        >
          <span>[05]</span>
          <span className="text-[var(--text-muted)]">//</span>
          <span>GET IN TOUCH</span>
        </motion.div>

        {/* Large Typographic Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[var(--text-primary)] max-w-4xl leading-[1.05]">
            LET'S BUILD SOMETHING EXTRAORDINARY
          </h2>
          <p className="mt-4 text-base md:text-lg text-[var(--text-secondary)] font-light max-w-2xl leading-relaxed">
            Based in Munich, Germany — open to global collaborations in AI Engineering,
            Agentic RAG Systems, and LLM Evaluation.
          </p>
        </motion.div>

        {/* Contact Actions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-16"
        >
          {/* Email Action Card - No explicit email displayed */}
          <div className="md:col-span-7 border border-[var(--border-primary)] bg-[var(--bg-subtle)] p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] block mb-3">
                DIRECT INQUIRY //
              </span>
              <p className="text-xl sm:text-2xl font-mono font-bold text-[var(--text-primary)]">
                Start a conversation
              </p>
              <p className="text-sm text-[var(--text-secondary)] mt-2 font-light">
                Feel free to reach out for research discussions, engineering projects, or technical consulting.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border-primary)]">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#E63946] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#1D3557] transition-colors"
              >
                <IconMail size={16} />
                <span>WRITE EMAIL</span>
              </a>
            </div>
          </div>

          {/* Social & Resume Links Cards */}
          <div className="md:col-span-5 flex flex-col gap-4">
            {/* GitHub Link */}
            <a
              href="https://github.com/LaloVene"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[var(--border-primary)] bg-[var(--bg-subtle)] p-5 flex items-center justify-between hover:border-[#1D3557] transition-all shadow-sm"
            >
              <div className="flex items-center gap-3">
                <IconBrandGithub size={22} className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]" />
                <div className="flex flex-col">
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
                    CODE REPOSITORY
                  </span>
                  <span className="font-mono text-sm font-bold text-[var(--text-primary)]">
                    github.com/LaloVene
                  </span>
                </div>
              </div>
              <IconArrowUpRight
                size={18}
                className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/eduardo-venegas/"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[var(--border-primary)] bg-[var(--bg-subtle)] p-5 flex items-center justify-between hover:border-[#1D3557] transition-all shadow-sm"
            >
              <div className="flex items-center gap-3">
                <IconBrandLinkedin size={22} className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]" />
                <div className="flex flex-col">
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
                    PROFESSIONAL NETWORK
                  </span>
                  <span className="font-mono text-sm font-bold text-[var(--text-primary)]">
                    linkedin.com/in/eduardo-venegas
                  </span>
                </div>
              </div>
              <IconArrowUpRight
                size={18}
                className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>

            {/* Resume Link */}
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[var(--border-primary)] bg-[var(--bg-subtle)] p-5 flex items-center justify-between hover:border-[#E63946] transition-all shadow-sm"
            >
              <div className="flex items-center gap-3">
                <IconDownload size={22} className="text-[var(--text-secondary)] group-hover:text-[#E63946]" />
                <div className="flex flex-col">
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
                    CURRICULUM VITAE
                  </span>
                  <span className="font-mono text-sm font-bold text-[var(--text-primary)]">
                    Download PDF Resume
                  </span>
                </div>
              </div>
              <IconArrowUpRight
                size={18}
                className="text-[var(--text-muted)] group-hover:text-[#E63946] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>
        </motion.div>

        {/* Bauhaus Decorative Color Bar */}
        <div className="border-t border-[var(--border-primary)] pt-8 pb-4">
          <div className="grid grid-cols-5 h-2 w-full max-w-sm mb-6">
            <div className="bg-[#E63946]" />
            <div className="bg-[#1D3557]" />
            <div className="bg-[#F4D03F]" />
            <div className="bg-[#0a0a0a]" />
            <div className="bg-[#fafafa]" />
          </div>
        </div>

        {/* Bottom Colophon - Without 'Designed with' */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[var(--text-muted)] pt-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#E63946] block" />
            <span className="font-bold text-[var(--text-primary)]">EV // PORTFOLIO</span>
          </div>

          <div>
            <span>
              © {new Date().getFullYear()} EDUARDO VENEGAS • ALL RIGHTS RESERVED
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
