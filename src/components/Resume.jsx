import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Briefcase, 
  CheckCircle2, 
  Sparkles, 
  Eye
} from 'lucide-react';
import { personalInfo } from '../data/personal';

export default function Resume() {
  const resumeUrl = personalInfo.assets.resumePdf;
  const downloadFileName = 'NSLohitha_Full stack_resume.pdf';

  const handleHireClick = (e) => {
    e.preventDefault();
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="resume" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[#635BDB] dark:text-cyan-400 text-xs font-mono font-medium uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#172033] dark:text-white tracking-tight"
          >
            Professional <span className="gradient-text">Resume</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-[#526078] dark:text-slate-300/80 leading-relaxed"
          >
            Review my complete credentials, academic history, software engineering capabilities, and project portfolio.
          </motion.p>
        </div>

        {/* Resume Preview Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-[rgba(30,50,90,0.12)] dark:border-white/10 shadow-glass-light dark:shadow-glass"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Resume Visual Card */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-br from-[#EDF1FA] to-white dark:from-slate-900/90 dark:to-navy-900/90 border border-[rgba(30,50,90,0.12)] dark:border-cyan-500/20 text-center relative overflow-hidden group shadow-sm">
              <div className="w-20 h-20 rounded-2xl bg-[#635BDB]/15 dark:bg-gradient-to-tr dark:from-cyan-500/20 dark:to-violet-500/20 border border-[#635BDB]/30 dark:border-cyan-400/40 flex items-center justify-center text-[#635BDB] dark:text-cyan-300 mb-4 shadow-glow-accent dark:shadow-glow-cyan">
                <FileText className="w-10 h-10" />
              </div>

              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#635BDB] dark:text-cyan-400 block mb-1">
                Verified Document
              </span>
              <h3 className="text-base sm:text-lg font-heading font-bold text-[#172033] dark:text-white mb-1 break-all">
                {downloadFileName}
              </h3>
              <p className="text-xs text-[#526078] dark:text-slate-400 font-mono">
                Python Full Stack Developer • BCA
              </p>

              <div className="mt-5 w-full pt-4 border-t border-[rgba(30,50,90,0.12)] dark:border-white/10 flex items-center justify-around text-xs font-mono text-[#526078] dark:text-slate-300">
                <span>Format: PDF</span>
                <span>•</span>
                <span>Size: ~244 KB</span>
                <span>•</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">Current</span>
              </div>
            </div>

            {/* Right Summary & Action Buttons */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <h4 className="text-2xl font-heading font-bold text-[#172033] dark:text-white">
                  Ready to Contribute to Your Team
                </h4>
                <p className="mt-2 text-sm text-[#526078] dark:text-slate-300/80 leading-relaxed">
                  Actively seeking Software Developer Internship and Entry-Level Software Engineer roles. My resume details verified production platforms, core technical proficiencies in Python, Django, React, and MySQL, and strong academic foundations.
                </p>
              </div>

              <div className="space-y-2.5">
                {[
                  "Full-stack web application development with Python & React",
                  "Relational database design & complex query optimization with MySQL / PostgreSQL",
                  "RESTful API design, session auth & backend architecture",
                  "Problem solving skills & strong computer science foundations"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#172033] dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                {/* View Resume Button (opens in separate browser tab) */}
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-heading font-semibold text-xs sm:text-sm text-white dark:text-slate-950 bg-[#635BDB] dark:bg-gradient-to-r dark:from-cyan-400 dark:to-sky-400 hover:opacity-95 dark:hover:from-cyan-300 dark:hover:to-sky-300 shadow-glow-accent dark:shadow-glow-cyan transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Resume</span>
                </a>

                {/* Download Resume Button */}
                <a
                  href={resumeUrl}
                  download={downloadFileName}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-heading font-semibold text-xs sm:text-sm text-[#172033] dark:text-slate-200 bg-white dark:bg-slate-900/60 border border-[rgba(30,50,90,0.15)] dark:border-slate-700/60 hover:border-[#635BDB] dark:hover:border-cyan-400/50 hover:bg-[#EDF1FA] dark:hover:bg-slate-800/60 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
                >
                  <Download className="w-4 h-4 text-[#635BDB] dark:text-cyan-400" />
                  <span>Download Resume</span>
                </a>

                {/* Hire Me Button */}
                <a
                  href="#contact"
                  onClick={handleHireClick}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-heading font-semibold text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Hire Me</span>
                </a>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
