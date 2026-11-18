import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Heart, 
  Rocket, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  UserCheck
} from 'lucide-react';
import { personalInfo } from '../data/personal';

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
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
            <span>Who Am I?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Passionate About Building <span className="gradient-text">Impactful Software</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300/80 leading-relaxed"
          >
            A quick introduction to my technical background, core philosophies, development approach, and aspirations.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Item 1: Profile & Identity Card (4 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col justify-between glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-white/10"
          >
            <div>
              {/* Profile Image Presentation */}
              <div className="relative mx-auto w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-cyan-400/40 via-blue-500/20 to-violet-500/40 shadow-glow-cyan mb-6">
                <img
                  src={personalInfo.assets.profileImage}
                  alt={personalInfo.fullName}
                  className="w-full h-full object-cover rounded-xl filter saturate-105"
                  loading="lazy"
                />
                <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-lg bg-navy-950/85 backdrop-blur-md border border-cyan-400/40 text-[11px] font-mono font-semibold text-cyan-300">
                  BCA 2024–28
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                  {personalInfo.fullName}
                </h3>
                <p className="text-sm font-mono text-cyan-600 dark:text-cyan-400 mt-1">
                  Python Full Stack Developer
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Kuppam Degree College • 3rd Year
                </p>
              </div>
            </div>

            {/* Quick Contact & Verification Badges */}
            <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-white/10 text-xs sm:text-sm">
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-mono">{personalInfo.contact.phone}</span>
              </div>

              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a 
                  href={`mailto:${personalInfo.contact.email}`} 
                  className="font-mono hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors truncate"
                >
                  {personalInfo.contact.email}
                </a>
              </div>

              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-600 dark:text-violet-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{personalInfo.contact.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Right Column (8 columns): Multi-card layout */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Bento Item 2: Introduction Story */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                  Aspiring Python Full Stack Developer
                </h3>
              </div>
              <div className="space-y-3 text-sm sm:text-base text-slate-600 dark:text-slate-300/80 leading-relaxed">
                {personalInfo.aboutText.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            {/* Bento Grid Row 2: Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Career Objective */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-panel rounded-3xl p-6 border border-slate-200 dark:border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-400/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <Target className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                      Career Objective
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300/80 leading-relaxed">
                    {personalInfo.careerObjective}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Open for SDE Internships & New Grad Roles
                  </span>
                </div>
              </motion.div>

              {/* Technical Interests */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-panel rounded-3xl p-6 border border-slate-200 dark:border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-400/30 flex items-center justify-center text-violet-600 dark:text-violet-400">
                      <Heart className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                      Technical Interests
                    </h4>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300/80">
                    {personalInfo.technicalInterests.map((interest, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-500 dark:text-cyan-400 mt-1">▸</span>
                        <span>{interest}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

            </div>

            {/* Bento Item 4: Development Approach */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-panel rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <Rocket className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                  Engineering Principles & Development Approach
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {personalInfo.developmentApproach.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5"
                  >
                    <h5 className="font-heading font-semibold text-xs sm:text-sm text-cyan-700 dark:text-cyan-300 mb-1.5">
                      {item.title}
                    </h5>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
