import React from 'react';
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';

// Components
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import BackgroundOrbs from './components/BackgroundOrbs';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Resume from './components/Resume';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

const sectionIds = [
  'home',
  'about',
  'skills',
  'projects',
  'experience',
  'education',
  'resume',
  'certificates',
  'contact'
];

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useScrollSpy(sectionIds, 150);

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Floating Ambient Glow Orbs */}
      <BackgroundOrbs />

      {/* Sticky Glass Navbar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Resume />
        <Certificates />
        <Contact />
      </main>

      {/* Glass Footer */}
      <Footer />
    </div>
  );
}
