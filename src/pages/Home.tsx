import React from "react";
import { ThemeProvider } from "../context/ThemeContext";
import Header from "../components/Header";
import TableOfContents from "../components/TableOfContents";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Certificates from "../components/Certificates";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[#E63946] selection:text-white relative transition-colors duration-250">
        <Header />
        <TableOfContents />
        <main>
          <Hero />
          <About id="about" number="01" title="ABOUT" />
          <Experience id="experience" number="02" title="EXPERIENCE" />
          <Projects id="projects" number="03" title="SELECTED WORKS" />
          <Skills id="skills" number="04" title="TECHNICAL MATRIX" />
          <Certificates id="certificates" number="05" title="ACCREDITATIONS" />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
