import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Sparkles, Terminal, Bot, Database } from 'lucide-react';
import { certificates } from '../data/certificates';
import CertificateModal from './CertificateModal';

const iconMap = {
  FileCode: Terminal,
  Bot: Bot,
  Database: Database
};

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Achievements & Accreditations</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Professional <span className="gradient-text">Certifications</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300/80 leading-relaxed"
          >
            Industry certifications and verified qualifications supporting my engineering foundations and continuous technical growth.
          </motion.p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => {
            const Icon = iconMap[cert.icon] || Award;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group glass-panel rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-white/10 hover:border-cyan-400/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Issuer Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-violet-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shadow-glow-cyan">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-semibold border ${cert.badgeColor}`}>
                      {cert.issuer}
                    </span>
                  </div>

                  {/* Title & Field */}
                  <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white leading-snug group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mt-1 mb-4">
                    {cert.field}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300/80 leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skillsGained.slice(0, 3).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900/60 text-[11px] font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skillsGained.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500 dark:text-slate-400">
                        +{cert.skillsGained.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* View Certificate Button */}
                <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                  <button
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-heading font-semibold text-xs sm:text-sm text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300"
                  >
                    <Award className="w-4 h-4" />
                    <span>View Certificate Details</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Certificate Modal */}
      <CertificateModal
        certificate={selectedCert}
        isOpen={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
