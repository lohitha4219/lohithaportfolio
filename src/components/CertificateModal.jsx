import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, CheckCircle2, Building, ShieldCheck, Download, ExternalLink, Image as ImageIcon } from 'lucide-react';

export default function CertificateModal({ certificate, isOpen, onClose }) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      setImageError(false);
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#172033]/70 dark:bg-navy-950/85 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col glass-panel rounded-3xl p-5 sm:p-7 border border-[rgba(30,50,90,0.15)] dark:border-cyan-400/30 shadow-2xl z-10 overflow-hidden"
        >
          {/* Header Bar */}
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-[rgba(30,50,90,0.12)] dark:border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#635BDB]/10 dark:bg-cyan-500/20 border border-[#635BDB]/20 dark:border-cyan-400/40 flex items-center justify-center text-[#635BDB] dark:text-cyan-300 shrink-0 shadow-glow-accent dark:shadow-glow-cyan">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className={`px-2 py-0.5 rounded-full text-[11px] font-mono font-semibold border ${certificate.badgeColor}`}>
                    {certificate.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {certificate.status}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-[#172033] dark:text-white leading-tight">
                  {certificate.title}
                </h3>
                <p className="text-xs font-mono text-[#526078] dark:text-cyan-400">
                  {certificate.issuer}
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-[#EDF1FA] dark:bg-slate-800/60 border border-[rgba(30,50,90,0.12)] dark:border-white/10 flex items-center justify-center text-[#526078] dark:text-slate-400 hover:text-[#172033] dark:hover:text-white transition-colors focus:outline-none"
              aria-label="Close certificate preview"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body / Certificate Display (Preserves Original Aspect Ratio) */}
          <div className="flex-1 overflow-y-auto py-5 space-y-5">
            <div className="relative rounded-2xl bg-[#EDF1FA]/60 dark:bg-slate-900/70 border border-[rgba(30,50,90,0.12)] dark:border-cyan-500/20 p-2 sm:p-4 flex items-center justify-center min-h-[300px] overflow-hidden">
              {!imageError ? (
                <img
                  src={certificate.image}
                  alt={certificate.alt}
                  onError={() => setImageError(true)}
                  className="max-h-[60vh] max-w-full w-auto h-auto object-contain rounded-xl shadow-md border border-[rgba(30,50,90,0.1)] dark:border-white/10"
                />
              ) : (
                /* Fallback Graphic Display if file not yet dropped into public folder */
                <div className="text-center p-8 max-w-lg space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#635BDB]/15 dark:bg-cyan-500/20 border border-[#635BDB]/30 dark:border-cyan-400/30 flex items-center justify-center text-[#635BDB] dark:text-cyan-400 mx-auto shadow-glow-accent">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-[#172033] dark:text-white">
                      {certificate.title}
                    </h4>
                    <p className="text-xs font-mono text-[#635BDB] dark:text-cyan-400 mt-1">
                      Issued by {certificate.issuer}
                    </p>
                  </div>
                  <p className="text-xs text-[#526078] dark:text-slate-400 leading-relaxed">
                    Certificate asset registered: <code className="font-mono text-[11px] bg-white dark:bg-slate-800 px-1.5 py-0.5 rounded border border-[rgba(30,50,90,0.1)]">{certificate.image}</code>.
                    Place your certificate image into <code className="font-mono text-[11px] bg-white dark:bg-slate-800 px-1.5 py-0.5 rounded border border-[rgba(30,50,90,0.1)]">public/assets/certificates/</code> or <code className="font-mono text-[11px] bg-white dark:bg-slate-800 px-1.5 py-0.5 rounded border border-[rgba(30,50,90,0.1)]">src/assets/certificates/</code> to view the full resolution scan.
                  </p>
                </div>
              )}
            </div>

            {/* Description & Competencies */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-[rgba(30,50,90,0.1)] dark:border-white/5 space-y-3">
              <p className="text-xs sm:text-sm text-[#526078] dark:text-slate-300 leading-relaxed">
                {certificate.description}
              </p>

              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#172033] dark:text-slate-400 block mb-2">
                  Validated Competencies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {certificate.skillsGained.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#EDF1FA] dark:bg-cyan-500/10 border border-[rgba(30,50,90,0.08)] dark:border-cyan-500/20 text-xs font-mono text-[#172033] dark:text-cyan-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-cyan-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="pt-3 border-t border-[rgba(30,50,90,0.12)] dark:border-white/10 flex items-center justify-between shrink-0">
            <span className="text-xs font-mono text-[#526078] dark:text-slate-400">
              Verified Credential • {certificate.category}
            </span>
            <button
              onClick={onClose}
              type="button"
              className="px-5 py-2 rounded-xl font-heading font-semibold text-xs sm:text-sm text-[#172033] dark:text-slate-300 bg-[#EDF1FA] dark:bg-slate-800/60 hover:bg-[#EDF1FA]/80 dark:hover:bg-slate-700/60 transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
