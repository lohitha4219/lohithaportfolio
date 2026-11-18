import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Code2, 
  Database, 
  Server, 
  Terminal
} from 'lucide-react';
import HeroCanvas from './HeroCanvas';
import { personalInfo } from '../data/personal';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = personalInfo.typingRoles;
    const currentWord = roles[currentRoleIndex];
    let timeout;

    if (!isDeleting) {
      if (displayedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        }, 85);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.substring(0, displayedText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  const getSocialIcon = (name) => {
    switch (name) {
      case 'GitHub':
        return <Github className="w-5 h-5" />;
      case 'LinkedIn':
        return <Linkedin className="w-5 h-5" />;
      case 'LeetCode':
        return <Code2 className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* 3D Particle Canvas Background */}
      <HeroCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Introduction */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Status / Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/10 border border-cyan-500/25 dark:border-cyan-400/25 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-mono font-medium text-[#635BDB] dark:text-cyan-300">
                Hello World! 👋 I'm
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading font-extrabold tracking-tight text-[#172033] dark:text-white leading-[1.1]">
                <span className="gradient-text block">
                  {personalInfo.shortName}
                </span>
              </h1>

              {/* Animated Typing Role */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <p className="text-lg sm:text-2xl font-mono font-semibold text-[#172033] dark:text-slate-300 flex items-center gap-2">
                  <span className="text-[#635BDB] dark:text-cyan-400 font-bold">
                    &gt;
                  </span>
                  <span className="gradient-text font-bold">{displayedText}</span>
                  <span className="inline-block w-2.5 h-6 bg-[#635BDB] dark:bg-cyan-400 animate-pulse ml-0.5" />
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-[#526078] dark:text-slate-300/80 leading-relaxed font-normal">
              Final-year BCA student passionate about architecting scalable full-stack applications using <strong className="text-[#172033] dark:text-slate-100 font-semibold">Python, Django, React.js</strong>, and modern database technologies. Turning ideas into impactful, production-ready software.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm sm:text-base text-white dark:text-slate-950 bg-[#635BDB] dark:bg-gradient-to-r dark:from-cyan-400 dark:to-sky-400 hover:opacity-95 dark:hover:from-cyan-300 dark:hover:to-sky-300 shadow-glow-accent dark:shadow-glow-cyan transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalInfo.assets.resumePdf}
                download="NS-Lohitha-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm sm:text-base text-[#172033] dark:text-slate-200 bg-white dark:bg-slate-900/60 border border-[rgba(30,50,90,0.15)] dark:border-slate-700/60 hover:border-[#635BDB] dark:hover:border-cyan-400/50 hover:bg-[#EDF1FA] dark:hover:bg-slate-800/60 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm backdrop-blur-md"
              >
                <Download className="w-4 h-4 text-[#635BDB] dark:text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Icons Bar */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs uppercase tracking-wider text-[#526078] dark:text-slate-400/80 font-mono hidden sm:inline">
                Connect:
              </span>
              {personalInfo.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-white dark:bg-slate-900/50 border border-[rgba(30,50,90,0.12)] dark:border-white/10 text-[#526078] dark:text-slate-300 hover:text-[#635BDB] dark:hover:text-cyan-400 hover:border-[#635BDB] dark:hover:border-cyan-400/50 hover:scale-110 transition-all duration-300 shadow-sm"
                  aria-label={social.name}
                  title={`${social.name} - ${social.handle}`}
                >
                  {getSocialIcon(social.name)}
                </a>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Profile Image with Multi-layer Glow & Floating Tech Badges */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96">
              
              {/* Outer Pulsing Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-violet-500/25 blur-2xl animate-pulse-glow pointer-events-none" />

              {/* Decorative Rotating Border Ring */}
              <div 
                className="absolute -inset-3 sm:-inset-4 rounded-full border border-dashed border-[#635BDB]/30 dark:border-cyan-400/20 animate-spin-slow pointer-events-none" 
              />
              
              {/* Secondary Gradient Ring */}
              <div className="absolute -inset-1 sm:-inset-1.5 rounded-full bg-gradient-to-br from-[#635BDB]/40 dark:from-cyan-400/40 via-blue-500/20 to-violet-500/40 opacity-70 blur-sm pointer-events-none" />

              {/* Image Frame Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden p-1.5 bg-gradient-to-br from-[#635BDB]/50 dark:from-cyan-400/50 via-slate-800 to-violet-500/50 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-slate-800/80">
                  <img
                    src={personalInfo.assets.heroImage}
                    alt={personalInfo.fullName}
                    className="w-full h-full object-cover object-center filter saturate-105 hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Floating Badge 1: Python */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 -right-4 sm:top-2 sm:right-0 flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-slate-900/85 backdrop-blur-xl border border-[rgba(30,50,90,0.12)] dark:border-cyan-400/40 shadow-glass-light dark:shadow-glow-cyan"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center text-[#635BDB] dark:text-cyan-400">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#172033] dark:text-white block leading-tight">
                    Python
                  </span>
                  <span className="text-[10px] text-[#635BDB] dark:text-cyan-400 font-mono block">
                    Core Backend
                  </span>
                </div>
              </motion.div>

              {/* Floating Badge 2: MySQL */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 sm:bottom-4 sm:left-0 flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-slate-900/85 backdrop-blur-xl border border-[rgba(30,50,90,0.12)] dark:border-blue-400/40 shadow-glass-light dark:shadow-glass"
              >
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/20 flex items-center justify-center text-cyan-700 dark:text-blue-400">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#172033] dark:text-white block leading-tight">
                    MySQL
                  </span>
                  <span className="text-[10px] text-cyan-700 dark:text-blue-400 font-mono block">
                    Relational DB
                  </span>
                </div>
              </motion.div>

              {/* Floating Badge 3: Django / React */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute bottom-6 -right-6 sm:bottom-12 sm:-right-4 flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-slate-900/85 backdrop-blur-xl border border-[rgba(30,50,90,0.12)] dark:border-violet-400/40 shadow-glass-light dark:shadow-glow-violet"
              >
                <div className="w-7 h-7 rounded-lg bg-violet-500/10 dark:bg-violet-500/20 flex items-center justify-center text-violet-700 dark:text-violet-400">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#172033] dark:text-white block leading-tight">
                    Django & React
                  </span>
                  <span className="text-[10px] text-violet-700 dark:text-violet-400 font-mono block">
                    Full Stack
                  </span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
