import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu2, IconX, IconSun, IconMoon } from "@tabler/icons-react";
import { useTheme } from "../context/ThemeContext";

interface NavItem {
  num: string;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { num: "01", label: "ABOUT", href: "#about" },
  { num: "02", label: "WORK", href: "#experience" },
  { num: "03", label: "PROJECTS", href: "#projects" },
  { num: "04", label: "SKILLS", href: "#skills" },
  { num: "05", label: "CONTACT", href: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--header-bg)] backdrop-blur-md border-b border-[var(--border-primary)] transition-colors duration-250">
      {/* Signature 5-bar Bauhaus color strip */}
      <div className="grid grid-cols-5 h-1.5 w-full">
        <div className="bg-[#E63946]" title="Bauhaus Red" />
        <div className="bg-[#1D3557]" title="Bauhaus Blue" />
        <div className="bg-[#F4D03F]" title="Bauhaus Yellow" />
        <div className="bg-[#0a0a0a]" title="Bauhaus Black" />
        <div className="bg-[#fafafa]" title="Bauhaus White" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Monogram / Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Eduardo Venegas Portfolio"
        >
          {/* Geometric "EV" Bauhaus badge */}
          <div className="w-8 h-8 bg-[#E63946] text-white flex items-center justify-center font-mono font-bold text-xs tracking-tighter shadow-sm transition-transform duration-200 group-hover:scale-105">
            EV
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-xs font-bold tracking-widest text-[var(--text-primary)] uppercase transition-colors duration-200">
              EDUARDO VENEGAS
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Primary navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.num}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="group flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
            >
              <span className="text-[#E63946] font-bold">[{item.num}]</span>
              <span className="relative">
                {item.label}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-[#E63946] transition-all duration-200 group-hover:w-full" />
              </span>
            </a>
          ))}
        </nav>

        {/* Right side controls: Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Light / Dark Mode Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 border border-[var(--border-primary)] bg-[var(--bg-subtle)] text-[var(--text-primary)] hover:border-[#E63946] transition-colors cursor-pointer flex items-center justify-center"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <IconMoon size={18} className="text-[#1D3557]" />
            ) : (
              <IconSun size={18} className="text-[#F4D03F]" />
            )}
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[var(--text-primary)] hover:text-[#E63946] border border-[var(--border-primary)] bg-[var(--bg-subtle)] transition-colors cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden border-t border-[var(--border-primary)] bg-[var(--bg-primary)] overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.num}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <span className="text-[#E63946] font-bold">[{item.num}]</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
