
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
    <section id="about" className="py-20 relative z-10">
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
            <span>Who Am I?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#172033] dark:text-white tracking-tight"
          >
            Passionate About Building{' '}
            <span className="gradient-text">Impactful Software</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-[#526078] dark:text-slate-300/80 leading-relaxed"
          >
            A quick introduction to my technical background, core philosophies,
            development approach, and aspirations.
          </motion.p>
        </div>

        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* Profile & Identity Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 glass-panel rounded-3xl p-6 sm:p-7 border border-[rgba(30,50,90,0.12)] dark:border-white/10 shadow-glass-light dark:shadow-glass flex flex-col gap-5"
          >

            {/* Enlarged Profile Image */}
            <div className="relative mx-auto w-full max-w-[280px] h-[340px] sm:h-[380px] rounded-3xl overflow-hidden p-1 bg-gradient-to-tr from-[#635BDB]/60 via-blue-500/40 to-violet-500/60 shadow-glow-accent dark:shadow-glow-cyan">

              <div className="w-full h-full rounded-[20px] overflow-hidden bg-white dark:bg-slate-900 flex items-center justify-center">
                <img
                  src={personalInfo.assets.profileImage}
                  alt={personalInfo.fullName}
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>

              {/* Education Badge */}
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-slate-950/90 backdrop-blur-md border border-cyan-400/40 text-xs font-mono font-semibold text-cyan-300 shadow-lg">
                BCA 2024–27
              </div>
            </div>

            {/* Personal Information */}
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#172033] dark:text-white">
                {personalInfo.fullName}
              </h3>

              <p className="text-sm sm:text-base font-mono text-[#635BDB] dark:text-cyan-400 mt-2 font-semibold">
                Python Full Stack Developer
              </p>

              <p className="text-xs sm:text-sm text-[#526078] dark:text-slate-400 mt-1 font-medium">
                Kuppam Degree College • BCA
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-3 pt-4 border-t border-[rgba(30,50,90,0.12)] dark:border-white/10 text-xs sm:text-sm">

              <div className="flex items-center gap-3 text-[#172033] dark:text-slate-300">
                <div className="w-9 h-9 rounded-xl bg-[#635BDB]/10 dark:bg-cyan-500/10 flex items-center justify-center text-[#635BDB] dark:text-cyan-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs break-all">
                  {personalInfo.contact.phone}
                </span>
              </div>

              <div className="flex items-center gap-3 text-[#172033] dark:text-slate-300">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="font-mono text-xs hover:text-[#635BDB] dark:hover:text-cyan-400 transition-colors break-all"
                >
                  {personalInfo.contact.email}
                </a>
              </div>

              <div className="flex items-center gap-3 text-[#172033] dark:text-slate-300">
                <div className="w-9 h-9 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-600 dark:text-violet-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-xs">
                  {personalInfo.contact.location}
                </span>
              </div>

            </div>
          </motion.div>

          {/* Right Column */}
          <div className="lg:col-span-8 flex flex-col gap-6">

            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-panel rounded-3xl p-6 sm:p-7 border border-[rgba(30,50,90,0.12)] dark:border-white/10 shadow-glass-light dark:shadow-glass"
            >
              <div className="flex items-center gap-3 mb-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#635BDB]/10 dark:bg-cyan-500/10 border border-[#635BDB]/20 dark:border-cyan-400/30 flex items-center justify-center text-[#635BDB] dark:text-cyan-400">
                  <UserCheck className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-heading font-bold text-[#172033] dark:text-white">
                  Aspiring Python Full Stack Developer
                </h3>
              </div>

              <div className="space-y-2.5 text-sm sm:text-base text-[#526078] dark:text-slate-300/80 leading-relaxed">
                {personalInfo.aboutText.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            {/* Career Objective & Technical Interests */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Career Objective */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-panel rounded-3xl p-6 border border-[rgba(30,50,90,0.12)] dark:border-white/10 shadow-glass-light dark:shadow-glass flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <Target className="w-5 h-5" />
                    </div>

                    <h4 className="font-heading font-bold text-base sm:text-lg text-[#172033] dark:text-white">
                      Career Objective
                    </h4>
                  </div>

                  <p className="text-xs sm:text-sm text-[#526078] dark:text-slate-300/80 leading-relaxed">
                    {personalInfo.careerObjective}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[rgba(30,50,90,0.12)] dark:border-white/5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#635BDB] dark:text-cyan-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
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
                className="glass-panel rounded-3xl p-6 border border-[rgba(30,50,90,0.12)] dark:border-white/10 shadow-glass-light dark:shadow-glass flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-600 dark:text-violet-400">
                      <Heart className="w-5 h-5" />
                    </div>

                    <h4 className="font-heading font-bold text-base sm:text-lg text-[#172033] dark:text-white">
                      Technical Interests
                    </h4>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-[#526078] dark:text-slate-300/80">
                    {personalInfo.technicalInterests.map((interest, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#635BDB] dark:text-cyan-400 mt-0.5">
                          ▸
                        </span>
                        <span>{interest}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

            </div>

            {/* Development Approach */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-panel rounded-3xl p-6 sm:p-7 border border-[rgba(30,50,90,0.12)] dark:border-white/10 shadow-glass-light dark:shadow-glass"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-[#635BDB] dark:text-cyan-400">
                  <Rocket className="w-5 h-5" />
                </div>

                <h4 className="font-heading font-bold text-base sm:text-lg text-[#172033] dark:text-white">
                  Engineering Principles & Development Approach
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {personalInfo.developmentApproach.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#EDF1FA]/70 dark:bg-slate-900/40 border border-[rgba(30,50,90,0.08)] dark:border-white/5"
                  >
                    <h5 className="font-heading font-semibold text-xs sm:text-sm text-[#635BDB] dark:text-cyan-300 mb-1.5">
                      {item.title}
                    </h5>

                    <p className="text-xs text-[#526078] dark:text-slate-400 leading-relaxed">
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
