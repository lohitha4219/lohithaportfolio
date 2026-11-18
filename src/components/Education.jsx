import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { education } from '../data/education';

const iconMap = {
  GraduationCap,
  School,
  BookOpen
};

export default function Education() {
  return (
    <section id="education" className="py-20 relative z-10">
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
            <span>Academic Background</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#172033] dark:text-white tracking-tight"
          >
            Academic <span className="gradient-text">Journey</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-[#526078] dark:text-slate-300/80 leading-relaxed"
          >
            Structured computer science education and foundational academic training in mathematics and analytical reasoning.
          </motion.p>
        </div>

        {/* Education Timeline / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((item, index) => {
            const Icon = iconMap[item.icon] || GraduationCap;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass-panel rounded-3xl p-6 sm:p-7 border border-[rgba(30,50,90,0.12)] dark:border-white/10 shadow-glass-light dark:shadow-glass hover:border-[#635BDB]/50 dark:hover:border-cyan-400/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Year */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#635BDB]/10 dark:bg-cyan-500/15 border border-[#635BDB]/20 dark:border-cyan-400/30 flex items-center justify-center text-[#635BDB] dark:text-cyan-400 shadow-glow-accent dark:shadow-glow-cyan">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="text-right">
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-[#635BDB]/10 dark:bg-cyan-500/10 text-[#635BDB] dark:text-cyan-300 border border-[#635BDB]/20 dark:border-cyan-500/20 block">
                        {item.period}
                      </span>
                      {item.score && (
                        <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 block mt-1">
                          Score: {item.score}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Degree & Institution */}
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-[#172033] dark:text-white leading-snug">
                    {item.degree}
                  </h3>

                  <div className="mt-1 mb-4">
                    <p className="text-sm font-medium text-[#635BDB] dark:text-cyan-400 font-mono font-semibold">
                      {item.institution}
                    </p>
                    <p className="text-xs text-[#526078] dark:text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#526078]/80 dark:text-slate-400" />
                      <span>{item.location}</span>
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#526078] dark:text-slate-300/80 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-5">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#172033] dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills tags */}
                <div className="pt-4 border-t border-[rgba(30,50,90,0.12)] dark:border-white/5 flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md bg-[#EDF1FA] dark:bg-slate-900/60 text-[#172033] dark:text-slate-300 text-[11px] font-mono border border-[rgba(30,50,90,0.08)] dark:border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
