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

  const navLinks = [
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

  return (
    <footer className="relative z-10 pt-16 pb-12 border-t border-[rgba(30,50,90,0.12)] dark:border-white/10 bg-white/95 dark:bg-navy-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-[rgba(30,50,90,0.08)] dark:border-white/5">
          
          {/* Identity */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#635BDB] dark:bg-gradient-to-br dark:from-cyan-400 dark:to-violet-500 flex items-center justify-center text-white dark:text-slate-950 font-heading font-extrabold text-sm shadow-sm">
                {personalInfo.initials}
              </div>
              <h3 className="text-xl font-heading font-bold text-[#172033] dark:text-white">
                {personalInfo.fullName}
              </h3>
            </div>
            <p className="text-xs font-mono text-[#635BDB] dark:text-cyan-400 mt-1 font-semibold">
              {personalInfo.role} • BCA Degree Student
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2.5">
            {personalInfo.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#EDF1FA] dark:bg-slate-900/60 border border-[rgba(30,50,90,0.12)] dark:border-white/10 flex items-center justify-center text-[#526078] dark:text-slate-300 hover:text-[#635BDB] dark:hover:text-cyan-400 hover:border-[#635BDB]/50 transition-all shadow-sm"
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

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#EDF1FA] dark:bg-slate-900/60 border border-[rgba(30,50,90,0.12)] dark:border-white/10 text-xs font-mono text-[#172033] dark:text-slate-300 hover:text-[#635BDB] dark:hover:text-cyan-400 hover:border-[#635BDB]/50 transition-all shadow-sm"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#635BDB] dark:text-cyan-400" />
          </button>

        </div>

        {/* Bottom Tier: Nav Links & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-xs font-mono text-[#526078] dark:text-slate-400">
          
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-[#635BDB] dark:hover:text-cyan-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p>© 2026 {personalInfo.shortName}. All Rights Reserved.</p>
          </div>

        </div>

      </div>
    </footer>
  );
}
