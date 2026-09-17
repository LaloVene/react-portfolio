import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu2, IconX, IconSun, IconMoon } from "@tabler/icons-react";
import { useTheme } from "../context/ThemeContext";

interface NavItem {
  num: string;
  label: string;
  href: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { num: "01", label: "ABOUT", href: "#about", id: "about" },
  { num: "02", label: "WORK", href: "#experience", id: "experience" },
  { num: "03", label: "PROJECTS", href: "#projects", id: "projects" },
  { num: "04", label: "SKILLS", href: "#skills", id: "skills" },
  { num: "05", label: "CONTACT", href: "#contact", id: "contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  // Track active scroll section for the liquid glass snap bubble
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.35;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const currentHighlight = hoveredSection || activeSection;

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

        {/* Desktop Nav Links - with dedicated liquid-lens classes */}
        <nav
          className="hidden md:flex items-center gap-3 relative py-1"
          aria-label="Primary navigation"
          onMouseLeave={() => setHoveredSection(null)}
        >
          {NAV_ITEMS.map((item) => {
            const isSelected = currentHighlight === item.id;

            return (
              <a
                key={item.num}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                onMouseEnter={() => setHoveredSection(item.id)}
                className="relative flex items-center text-xs font-mono uppercase tracking-widest transition-all duration-200"
                style={{
                  paddingTop: isSelected ? "0.5rem" : "0.375rem",
                  paddingBottom: isSelected ? "0.5rem" : "0.375rem",
                  paddingLeft: isSelected ? "1.25rem" : "0.75rem",
                  paddingRight: isSelected ? "1.25rem" : "0.75rem",
                  gap: isSelected ? "0.625rem" : "0.375rem",
                }}
              >
                {/* Liquid Glass Magnifying Lens Bubble */}
                {isSelected && (
                  <motion.div
                    layoutId="liquid-glass-header-lens"
                    className="absolute inset-0 rounded-full pointer-events-none -z-10 overflow-hidden"
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 30,
                      mass: 0.6,
                    }}
                  >
                    {/* Glass Bubble Base: Crisp in light mode, smoky in dark mode */}
                    <div className="liquid-lens-surface absolute inset-0 rounded-full" />

                    {/* Specular curved reflection highlight */}
                    <div className="liquid-lens-highlight absolute -top-1 left-2 right-2 h-2.5 rounded-full blur-[0.5px]" />

                    {/* Prismatic edge chromatic aberration tint */}
                    <div className="liquid-lens-tint absolute inset-0 rounded-full" />
                  </motion.div>
                )}

                <motion.span
                  animate={{
                    scale: isSelected ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                  className={`font-bold transition-colors ${
                    isSelected ? "text-[#E63946]" : "text-[var(--text-muted)]"
                  }`}
                >
                  [{item.num}]
                </motion.span>
                <motion.span
                  animate={{
                    scale: isSelected ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                  className={`font-semibold transition-colors ${
                    isSelected
                      ? "text-[var(--text-primary)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {item.label}
                </motion.span>
              </a>
            );
          })}
        </nav>

        {/* Right side controls: Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Light / Dark Mode Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 border border-[var(--border-primary)] bg-[var(--bg-subtle)] text-[var(--text-primary)] hover:border-[#E63946] transition-colors cursor-pointer flex items-center justify-center rounded-sm"
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
