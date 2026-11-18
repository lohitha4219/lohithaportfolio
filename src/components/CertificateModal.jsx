import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, CheckCircle2, Building, ShieldCheck } from 'lucide-react';

export default function CertificateModal({ certificate, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !certificate) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 dark:bg-navy-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-cyan-400/30 shadow-2xl z-10 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-800/60 border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Certificate Badge & Issuer Header */}
          <div className="flex items-start gap-4 mb-6 pr-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-600 dark:text-cyan-300 shrink-0 shadow-glow-cyan">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold border ${certificate.badgeColor}`}>
                  {certificate.credentialType}
                </span>
                <span className="flex items-center gap-1 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {certificate.status}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white leading-tight">
                {certificate.title}
              </h3>
              <p className="text-sm font-mono text-cyan-600 dark:text-cyan-400 mt-0.5">
                Issued by {certificate.issuer}
              </p>
            </div>
          </div>

          {/* Certificate Preview Card */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-cyan-500/20 relative overflow-hidden mb-6">
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span className="font-heading font-bold text-sm text-slate-800 dark:text-slate-200">
                  {certificate.issuer} Learning & Certification
                </span>
              </div>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                Official Credential
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              {certificate.description}
            </p>

            {/* Skills Acquired */}
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                Validated Skills & Competencies:
              </span>
              <div className="flex flex-wrap gap-2">
                {certificate.skillsGained.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-700 dark:text-cyan-300"
                  >
                    <CheckCircle2 className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              type="button"
              className="px-5 py-2.5 rounded-xl font-heading font-semibold text-xs sm:text-sm text-slate-700 dark:text-slate-300 bg-slate-200 dark:bg-slate-800/60 hover:bg-slate-300 dark:hover:bg-slate-700/60 transition-colors"
            >
              Close Preview
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
