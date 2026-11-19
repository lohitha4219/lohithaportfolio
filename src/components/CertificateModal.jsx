import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink, 
  ZoomIn, 
  ZoomOut,
  AlertCircle
} from 'lucide-react';

export default function CertificateModal({ certificate, isOpen, onClose }) {
  const [imageError, setImageError] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      setImageError(false);
      setIsZoomed(false);
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !certificate) return null;

  const handleImageError = () => {
    console.error('Certificate image failed to load:', certificate.image);
    setImageError(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#172033]/75 dark:bg-navy-950/85 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-5xl max-h-[94vh] flex flex-col glass-panel rounded-3xl p-5 sm:p-7 border border-[rgba(30,50,90,0.15)] dark:border-cyan-400/30 shadow-2xl z-10 overflow-hidden"
        >
          {/* Header Bar */}
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-[rgba(30,50,90,0.12)] dark:border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#635BDB]/10 dark:bg-cyan-500/20 border border-[#635BDB]/20 dark:border-cyan-400/40 flex items-center justify-center text-[#635BDB] dark:text-cyan-300 shrink-0 shadow-glow-accent dark:shadow-glow-cyan">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold border ${certificate.badgeColor}`}>
                    {certificate.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {certificate.status}
                  </span>
                </div>
                <h3 className="text-lg sm:text-2xl font-heading font-bold text-[#172033] dark:text-white leading-tight">
                  {certificate.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#635BDB] dark:text-cyan-400 font-semibold">
                  {certificate.issuer}
                </p>
              </div>
            </div>

            {/* Actions: Full Res & Close */}
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-[#526078] dark:text-slate-300 bg-[#EDF1FA] dark:bg-slate-800/60 border border-[rgba(30,50,90,0.12)] dark:border-white/10 hover:text-[#635BDB] dark:hover:text-cyan-300 transition-all"
                title="Open full resolution certificate in a new tab"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Full Resolution</span>
              </a>

              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-[#EDF1FA] dark:bg-slate-800/60 border border-[rgba(30,50,90,0.12)] dark:border-white/10 flex items-center justify-center text-[#526078] dark:text-slate-400 hover:text-[#172033] dark:hover:text-white transition-colors focus:outline-none"
                aria-label="Close certificate preview"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body: Certificate Image & Details */}
          <div className="flex-1 overflow-y-auto py-4 space-y-4">
            
            {/* Certificate Image Canvas Container */}
            <div className="relative rounded-2xl bg-slate-950 border border-[rgba(30,50,90,0.15)] dark:border-cyan-500/20 p-2 sm:p-4 flex items-center justify-center min-h-[320px] sm:min-h-[440px] overflow-hidden shadow-inner">
              {!imageError ? (
                <div className="relative flex items-center justify-center w-full h-full">
                  <img
                    src={certificate.image}
                    alt={certificate.alt}
                    onError={handleImageError}
                    onClick={() => setIsZoomed(!isZoomed)}
                    className={`max-h-[62vh] max-w-full w-auto h-auto object-contain rounded-xl shadow-2xl transition-transform duration-300 cursor-pointer ${
                      isZoomed ? 'scale-125 sm:scale-150 z-20' : 'hover:opacity-95'
                    }`}
                    title="Click to toggle zoom"
                  />
                  {/* Floating Zoom / Expand Controls */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-2 z-10">
                    <button
                      type="button"
                      onClick={() => setIsZoomed(!isZoomed)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/70 hover:bg-black/90 backdrop-blur-md text-white text-xs font-mono border border-white/20 transition-all shadow-md"
                      title="Toggle zoom"
                    >
                      {isZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
                      <span className="hidden sm:inline">{isZoomed ? 'Reset' : 'Zoom'}</span>
                    </button>
                    <a
                      href={certificate.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/70 hover:bg-black/90 backdrop-blur-md text-white text-xs font-mono border border-white/20 transition-all shadow-md"
                      title="Open full image in new tab"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Open</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* Honest Error State if file fails to load */
                <div className="text-center p-8 max-w-md space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 mx-auto">
                    <AlertCircle className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-white">
                      Unable to Load Certificate Image
                    </h4>
                    <p className="text-xs font-mono text-slate-400 mt-1 break-all">
                      Path: {certificate.image}
                    </p>
                  </div>
                  <a
                    href={certificate.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-400/30 hover:bg-cyan-500/20 transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Try Opening Direct File</span>
                  </a>
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
            <div className="flex items-center gap-2">
              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-mono text-[#526078] dark:text-slate-300 bg-[#EDF1FA] dark:bg-slate-800/60"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Full Res</span>
              </a>
              <button
                onClick={onClose}
                type="button"
                className="px-5 py-2 rounded-xl font-heading font-semibold text-xs sm:text-sm text-[#172033] dark:text-slate-300 bg-[#EDF1FA] dark:bg-slate-800/60 hover:bg-[#EDF1FA]/80 dark:hover:bg-slate-700/60 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
