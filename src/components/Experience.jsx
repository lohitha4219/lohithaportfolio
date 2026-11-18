import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2, CheckCircle2, Sparkles } from 'lucide-react';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative z-10">
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
            <span>Career Milestones</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#172033] dark:text-white tracking-tight"
          >
            Experience & <span className="gradient-text">Practical Training</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-[#526078] dark:text-slate-300/80 leading-relaxed"
          >
            Professional internships, industry training programs, and full-stack production application development.
          </motion.p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-1/2 -ml-px w-0.5 bg-gradient-to-b from-[#635BDB] via-blue-500 to-cyan-500 opacity-30" />

          <div className="space-y-12">
            {experience.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={item.id} className="relative flex items-center">
                  
                  {/* Timeline Dot (left-6 on mobile, centered on sm+) */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white dark:bg-navy-950 border-2 border-[#635BDB] dark:border-cyan-400 flex items-center justify-center z-10 shadow-glow-accent dark:shadow-glow-cyan">
                    <Briefcase className="w-4 h-4 text-[#635BDB] dark:text-cyan-400" />
                  </div>

                  {/* Content Container (Alternating left/right without overlap) */}
                  <div className={`w-full flex ${isEven ? 'sm:justify-start' : 'sm:justify-end'} pl-16 sm:pl-0`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      className={`w-full sm:w-[calc(50%-2.5rem)] glass-panel rounded-3xl p-6 sm:p-7 border border-[rgba(30,50,90,0.12)] dark:border-white/10 shadow-glass-light dark:shadow-glass hover:border-[#635BDB]/50 dark:hover:border-cyan-400/40 transition-colors ${
                        isEven ? 'sm:mr-auto' : 'sm:ml-auto'
                      }`}
                    >
                      {/* Meta header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-[#635BDB]/10 dark:bg-cyan-500/10 text-[#635BDB] dark:text-cyan-300 border border-[#635BDB]/20 dark:border-cyan-500/20">
                          {item.type}
                        </span>
                        {item.duration && (
                          <div className="flex items-center gap-1.5 text-xs font-mono text-[#526078] dark:text-slate-400">
                            <Calendar className="w-3.5 h-3.5 text-[#635BDB] dark:text-cyan-400" />
                            <span>{item.duration}</span>
                          </div>
                        )}
                      </div>

                      {/* Title & Organization */}
                      <h3 className="text-xl font-heading font-bold text-[#172033] dark:text-white">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-[#635BDB] dark:text-cyan-400 font-mono font-medium mt-1 mb-3">
                        <Building2 className="w-4 h-4" />
                        <span>{item.organization}</span>
                      </div>

                      {/* Overview */}
                      <p className="text-xs sm:text-sm text-[#526078] dark:text-slate-300/80 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Responsibilities */}
                      <div className="space-y-2 mb-5">
                        {item.responsibilities.map((resp, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#172033] dark:text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                            <span className="leading-tight">{resp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[rgba(30,50,90,0.12)] dark:border-white/5">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md bg-[#EDF1FA] dark:bg-slate-800/60 text-[#172033] dark:text-slate-300 text-[11px] font-mono border border-[rgba(30,50,90,0.08)] dark:border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
