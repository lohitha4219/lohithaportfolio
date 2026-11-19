import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../data/personal';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Resume', href: '#resume' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme, activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/95 dark:bg-navy-950/80 backdrop-blur-xl border-b border-[rgba(30,50,90,0.12)] dark:border-white/5 shadow-glass-light dark:shadow-glass'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Initials */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex items-center gap-2.5 text-inherit no-underline"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#635BDB]/10 dark:bg-gradient-to-br dark:from-cyan-500/20 dark:to-violet-500/20 border border-[#635BDB]/30 dark:border-cyan-400/30 group-hover:border-[#635BDB]/60 dark:group-hover:border-cyan-400/60 shadow-glow-accent dark:shadow-glow-cyan transition-all duration-300">
              <span className="font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#635BDB] to-blue-500 dark:from-cyan-400 dark:to-violet-400 text-lg tracking-wider">
                {personalInfo.initials}
              </span>
              <div className="absolute inset-0 rounded-xl bg-[#635BDB]/10 dark:bg-cyan-400/10 blur-sm group-hover:bg-[#635BDB]/20 transition-all" />
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-sm tracking-wide text-[#172033] dark:text-slate-100 block leading-tight">
                {personalInfo.shortName}
              </span>
              <span className="text-[11px] text-[#635BDB] dark:text-cyan-400 font-mono tracking-tight block font-semibold">
                Python Full Stack Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900/50 backdrop-blur-lg border border-[rgba(30,50,90,0.12)] dark:border-white/5 shadow-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`relative px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-[#635BDB] dark:text-cyan-300 font-semibold'
                      : 'text-[#526078] dark:text-slate-300/80 hover:text-[#172033] dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full bg-[#635BDB]/15 dark:bg-cyan-400/15 border border-[#635BDB]/30 dark:border-cyan-400/30 -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            <a
              href={personalInfo.assets.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-[#635BDB]/10 dark:bg-gradient-to-r dark:from-cyan-500/15 dark:to-violet-500/15 hover:bg-[#635BDB]/20 text-[#635BDB] dark:text-cyan-300 border border-[#635BDB]/30 dark:border-cyan-400/30 hover:border-[#635BDB]/60 transition-all duration-300 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-[rgba(30,50,90,0.12)] dark:border-slate-800 bg-white dark:bg-slate-900/50 text-[#172033] dark:text-slate-200 hover:text-[#635BDB] dark:hover:text-cyan-400 focus:outline-none shadow-sm"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden px-4 pt-3 pb-6 bg-white/95 dark:bg-navy-950/95 backdrop-blur-2xl border-b border-[rgba(30,50,90,0.12)] dark:border-slate-800/80 shadow-2xl"
          >
            <div className="grid grid-cols-2 gap-2 mt-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-[#635BDB]/15 text-[#635BDB] dark:text-cyan-300 border border-[#635BDB]/30'
                        : 'text-[#526078] dark:text-slate-300 hover:bg-[#EDF1FA] dark:hover:bg-slate-800/40'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
