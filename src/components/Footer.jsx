import React from 'react';
import { ArrowUp, Github, Linkedin, Code2, Mail } from 'lucide-react';
import { personalInfo } from '../data/personal';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 pt-12 sm:pt-14 pb-10 border-t border-[rgba(30,50,90,0.12)] dark:border-white/10 bg-white/95 dark:bg-navy-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Tier: Left (Identity), Center (Socials), Right (Back to Top) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
          
          {/* Left: Logo, Name, Role & Academic Designation */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#635BDB] dark:bg-gradient-to-br dark:from-cyan-400 dark:to-violet-500 flex items-center justify-center text-white dark:text-slate-950 font-heading font-extrabold text-sm shadow-sm shrink-0">
                {personalInfo.initials}
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-[#172033] dark:text-white tracking-tight">
                {personalInfo.fullName}
              </h3>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#635BDB] dark:text-cyan-400 mt-1.5 font-medium">
              {personalInfo.role} <span className="text-[#526078]/60 dark:text-slate-500">•</span> BCA Degree Student
            </p>
          </div>

          {/* Center: Social Media Icons */}
          <div className="flex items-center justify-center gap-3">
            {personalInfo.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#EDF1FA] dark:bg-slate-900/60 border border-[rgba(30,50,90,0.12)] dark:border-white/10 flex items-center justify-center text-[#526078] dark:text-slate-300 hover:text-[#635BDB] dark:hover:text-cyan-400 hover:border-[#635BDB]/50 dark:hover:border-cyan-400/50 hover:scale-105 transition-all shadow-sm"
                aria-label={social.name}
                title={social.name}
              >
                {social.name === 'GitHub' && <Github className="w-4 h-4" />}
                {social.name === 'LinkedIn' && <Linkedin className="w-4 h-4" />}
                {social.name === 'LeetCode' && <Code2 className="w-4 h-4" />}
                {social.name === 'Email' && <Mail className="w-4 h-4" />}
              </a>
            ))}
          </div>

          {/* Right: Back to Top Button */}
          <div className="flex items-center justify-center md:justify-end">
            <button
              onClick={scrollToTop}
              type="button"
              className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#EDF1FA] dark:bg-slate-900/60 border border-[rgba(30,50,90,0.12)] dark:border-white/10 text-xs font-mono font-medium text-[#172033] dark:text-slate-300 hover:text-[#635BDB] dark:hover:text-cyan-400 hover:border-[#635BDB]/50 dark:hover:border-cyan-400/50 transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#635BDB] dark:text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Subtle Divider & Copyright Text */}
        <div className="mt-8 pt-6 border-t border-[rgba(30,50,90,0.08)] dark:border-white/5 text-center">
          <p className="text-xs font-mono text-[#526078] dark:text-slate-400">
            © {currentYear} {personalInfo.fullName}. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
