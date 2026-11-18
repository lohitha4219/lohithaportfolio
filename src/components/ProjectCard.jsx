import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  ChevronRight, 
  Layers, 
  CheckCircle2, 
  ArrowUpRight
} from 'lucide-react';
import ProjectThumbnail from './ProjectThumbnail';

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showArchitecture, setShowArchitecture] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotX = ((y - centerY) / centerY) * -7;
    const rotY = ((x - centerX) / centerX) * 7;
    
    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${
          isHovered ? 'scale3d(1.02, 1.02, 1.02)' : 'scale3d(1, 1, 1)'
        }`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
      }}
      className="group relative flex flex-col justify-between glass-panel rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-white/10 hover:border-cyan-400/40 shadow-glass transition-colors"
    >
      <div>
        {/* Category & Status Header */}
        <div className="flex items-center justify-between mb-4">
          <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-semibold border ${project.badgeColor}`}>
            {project.category}
          </span>

          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{project.stats.metrics}</span>
          </div>
        </div>

        {/* Project Thumbnail */}
        <div className="mb-5 overflow-hidden rounded-2xl group-hover:shadow-glow-cyan transition-shadow">
          <ProjectThumbnail project={project} />
        </div>

        {/* Project Title & Tagline */}
        <div className="mb-3">
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-medium mt-0.5">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300/80 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Key Features List */}
        <div className="space-y-2 mb-5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
            ⭐ Key Highlights:
          </span>
          {project.features.map((feature, fIdx) => (
            <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
              <span className="leading-tight">{feature}</span>
            </div>
          ))}
        </div>

        {/* Expandable Architecture Details */}
        <div className="mb-5">
          <button
            type="button"
            onClick={() => setShowArchitecture(!showArchitecture)}
            className="flex items-center gap-1.5 text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{showArchitecture ? 'Hide Architecture' : 'View Architecture'}</span>
            <ChevronRight className={`w-3.5 h-3.5 transition-transform ${showArchitecture ? 'rotate-90' : ''}`} />
          </button>

          {showArchitecture && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2.5 p-3 rounded-xl bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-cyan-500/20 text-xs text-slate-700 dark:text-slate-300 font-mono leading-relaxed"
            >
              {project.architecture}
            </motion.div>
          )}
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 text-[11px] font-mono border border-slate-200 dark:border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons: Live Demo & GitHub */}
      <div className="pt-4 border-t border-slate-200 dark:border-white/10 grid grid-cols-2 gap-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl font-heading font-semibold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-glow-cyan transition-all"
        >
          <span>Live Demo</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </a>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl font-heading font-semibold text-xs text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-700/60 hover:border-cyan-400/50 hover:bg-slate-200 dark:hover:bg-slate-800/60 transition-all"
        >
          <Github className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
          <span>Repository</span>
        </a>
      </div>
    </motion.div>
  );
}
