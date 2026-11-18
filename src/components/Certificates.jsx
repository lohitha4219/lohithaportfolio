import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Sparkles, Terminal, Bot, Database, Layers, Eye } from 'lucide-react';
import { certificates } from '../data/certificates';
import CertificateModal from './CertificateModal';

const iconMap = {
  Terminal: Terminal,
  Bot: Bot,
  Database: Database,
  Layers: Layers
};

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeGroup, setActiveGroup] = useState('All');

  const groups = ['All', 'Python Programming', 'Database Certification', 'Artificial Intelligence'];

  const filteredCertificates = activeGroup === 'All'
    ? certificates
    : certificates.filter(c => c.group === activeGroup);

  return (
    <section id="certificates" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[#635BDB] dark:text-cyan-400 text-xs font-mono font-medium uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Achievements & Accreditations</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#172033] dark:text-white tracking-tight"
          >
            Professional <span className="gradient-text">Certifications</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-[#526078] dark:text-slate-300/80 leading-relaxed"
          >
            Industry credentials and verified qualifications supporting my engineering foundations and continuous technical growth.
          </motion.p>

          {/* Group Filter Tabs (Grouping Python Programming together) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {groups.map((group) => (
              <button
                key={group}
                onClick={() => setActiveGroup(group)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all duration-200 ${
                  activeGroup === group
                    ? 'bg-[#635BDB] text-white dark:bg-cyan-500/20 dark:text-cyan-300 border border-[#635BDB] dark:border-cyan-400/40 shadow-sm'
                    : 'bg-white dark:bg-slate-900/50 text-[#526078] dark:text-slate-400 border border-[rgba(30,50,90,0.12)] dark:border-white/5 hover:border-[#635BDB]/40'
                }`}
              >
                {group}
              </button>
            ))}
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredCertificates.map((cert, index) => {
            const Icon = iconMap[cert.icon] || Award;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group glass-panel rounded-3xl p-6 sm:p-7 border border-[rgba(30,50,90,0.12)] dark:border-white/10 shadow-glass-light dark:shadow-glass hover:border-[#635BDB]/50 dark:hover:border-cyan-400/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Category Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#635BDB]/10 dark:bg-cyan-500/15 border border-[#635BDB]/20 dark:border-cyan-400/30 flex items-center justify-center text-[#635BDB] dark:text-cyan-400 shadow-glow-accent dark:shadow-glow-cyan">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-semibold border ${cert.badgeColor}`}>
                      {cert.category}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-xl font-heading font-bold text-[#172033] dark:text-white leading-snug group-hover:text-[#635BDB] dark:group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-xs font-mono text-[#635BDB] dark:text-cyan-400 mt-1 mb-4 font-semibold">
                    {cert.issuer}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#526078] dark:text-slate-300/80 leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skillsGained.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md bg-[#EDF1FA] dark:bg-slate-900/60 text-[11px] font-mono text-[#172033] dark:text-slate-300 border border-[rgba(30,50,90,0.08)] dark:border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Certificate Button */}
                <div className="pt-4 border-t border-[rgba(30,50,90,0.12)] dark:border-white/10">
                  <button
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-heading font-semibold text-xs sm:text-sm text-[#635BDB] dark:text-cyan-300 bg-[#635BDB]/10 hover:bg-[#635BDB]/20 dark:bg-cyan-500/10 dark:hover:bg-cyan-500/20 border border-[#635BDB]/30 hover:border-[#635BDB]/60 dark:border-cyan-400/30 dark:hover:border-cyan-400/60 transition-all duration-300"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Certificate</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Certificate Modal / Lightbox */}
      <CertificateModal
        certificate={selectedCert}
        isOpen={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
