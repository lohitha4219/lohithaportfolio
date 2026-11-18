import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  FileCode, 
  Globe, 
  Palette, 
  Sparkles, 
  Smartphone, 
  Terminal, 
  Layers, 
  Cpu, 
  GitFork, 
  ShieldCheck, 
  HardDrive, 
  FolderTree, 
  GitBranch, 
  Github, 
  Laptop, 
  Send, 
  Lightbulb,
  CheckCircle2,
  Atom
} from 'lucide-react';
import { skillCategories } from '../data/skills';

const iconMap = {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  FileCode,
  Globe,
  Palette,
  Sparkles,
  Smartphone,
  Terminal,
  Layers,
  Cpu,
  GitFork,
  ShieldCheck,
  HardDrive,
  FolderTree,
  GitBranch,
  Github,
  Laptop,
  Send,
  Lightbulb,
  Atom
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative z-10">
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
            <span>Technical Competencies</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#172033] dark:text-white tracking-tight"
          >
            Technical <span className="gradient-text">Arsenal</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-[#526078] dark:text-slate-300/80 leading-relaxed"
          >
            Verified engineering technologies, programming languages, modern frameworks, and relational databases applied across production applications.
          </motion.p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => {
            const CategoryIcon = iconMap[category.icon] || Code2;

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="glass-panel rounded-3xl p-6 sm:p-7 border border-[rgba(30,50,90,0.12)] dark:border-white/10 shadow-glass-light dark:shadow-glass hover:border-[#635BDB]/50 dark:hover:border-cyan-400/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#635BDB]/10 dark:bg-cyan-500/15 border border-[#635BDB]/20 dark:border-cyan-400/25 flex items-center justify-center text-[#635BDB] dark:text-cyan-400">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-[#172033] dark:text-white leading-tight">
                        {category.category}
                      </h3>
                      <span className="text-[11px] font-mono text-[#635BDB] dark:text-cyan-400 font-semibold">
                        {category.skills.length} Technologies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#526078] dark:text-slate-400 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => {
                      const SkillIcon = iconMap[skill.icon] || Code2;
                      return (
                        <div
                          key={skill.name}
                          className="group/item flex items-center gap-2 px-3 py-2 rounded-xl bg-[#EDF1FA] dark:bg-slate-900/60 border border-[rgba(30,50,90,0.08)] dark:border-white/5 hover:border-[#635BDB]/40 dark:hover:border-cyan-400/40 hover:bg-[#635BDB]/5 transition-all duration-200"
                        >
                          <SkillIcon className="w-3.5 h-3.5 text-[#635BDB] dark:text-cyan-400 group-hover/item:scale-110 transition-transform" />
                          <div>
                            <span className="text-xs font-mono font-medium text-[#172033] dark:text-slate-200 block leading-none">
                              {skill.name}
                            </span>
                            <span className="text-[9px] text-[#526078] dark:text-slate-400 block leading-tight mt-0.5">
                              {skill.highlight}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[rgba(30,50,90,0.12)] dark:border-white/5 flex items-center justify-between text-[11px] text-[#526078] dark:text-slate-400 font-mono">
                  <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Proficiency
                  </span>
                  <span>Production Ready</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
