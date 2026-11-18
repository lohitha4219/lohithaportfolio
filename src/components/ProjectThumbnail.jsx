import React from 'react';
import { 
  Sprout, 
  CloudSun, 
  TrendingUp, 
  CheckCircle2, 
  Timer, 
  BarChart3, 
  GraduationCap, 
  PlayCircle, 
  BookOpen, 
  Award,
  Layers,
  Database
} from 'lucide-react';

export default function ProjectThumbnail({ project }) {
  if (project.id === 'agriculture-management-system') {
    return (
      <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-950/80 via-slate-900 to-teal-950/80 border border-emerald-500/20 p-4 flex flex-col justify-between group-hover:border-emerald-400/40 transition-colors">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

        {/* Dashboard Top bar */}
        <div className="flex items-center justify-between border-b border-emerald-500/15 pb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Sprout className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-emerald-300 block leading-tight">
                AgriConnect Hub
              </span>
              <span className="text-[10px] text-emerald-500/80 font-mono">
                Smart Farmer Dashboard
              </span>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Active Vercel
          </span>
        </div>

        {/* Mock UI Elements: Crops & Weather widgets */}
        <div className="grid grid-cols-3 gap-2 my-auto">
          <div className="p-2 rounded-xl bg-slate-900/80 border border-emerald-500/15 text-center">
            <CloudSun className="w-4 h-4 text-amber-400 mx-auto mb-1" />
            <span className="text-[10px] text-slate-400 block font-mono">Weather</span>
            <span className="text-xs font-bold text-slate-200">28°C Optimal</span>
          </div>

          <div className="p-2 rounded-xl bg-slate-900/80 border border-emerald-500/15 text-center">
            <TrendingUp className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
            <span className="text-[10px] text-slate-400 block font-mono">Crops</span>
            <span className="text-xs font-bold text-emerald-300">12 Harvests</span>
          </div>

          <div className="p-2 rounded-xl bg-slate-900/80 border border-emerald-500/15 text-center">
            <Database className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
            <span className="text-[10px] text-slate-400 block font-mono">Database</span>
            <span className="text-xs font-bold text-cyan-300">MySQL Sync</span>
          </div>
        </div>

        {/* Progress Metric Bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-[10px] font-mono text-slate-400">
            <span>Crop Yield & Inventory</span>
            <span className="text-emerald-400 font-bold">94% Capacity</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="w-[94%] h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  if (project.id === 'online-quiz-platform') {
    return (
      <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-950/80 via-slate-900 to-cyan-950/80 border border-cyan-500/20 p-4 flex flex-col justify-between group-hover:border-cyan-400/40 transition-colors">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />

        {/* Quiz Header */}
        <div className="flex items-center justify-between border-b border-cyan-500/15 pb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-cyan-300 block leading-tight">
                FullStackQuiz Engine
              </span>
              <span className="text-[10px] text-cyan-500/80 font-mono">
                Real-Time Evaluation
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-mono text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
            <Timer className="w-3 h-3 animate-spin" style={{ animationDuration: '6s' }} />
            <span>08:45 Left</span>
          </div>
        </div>

        {/* Mock Question & Options */}
        <div className="space-y-1.5 my-auto">
          <div className="text-[11px] font-mono text-slate-300 font-medium truncate">
            Q4: What is the complexity of dict lookup in Python?
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="px-2 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/60 text-[10px] font-mono text-slate-300">
              A) O(n) Linear
            </div>
            <div className="px-2 py-1.5 rounded-lg bg-cyan-500/15 border border-cyan-400/40 text-[10px] font-mono text-cyan-300 font-bold flex items-center justify-between">
              <span>B) O(1) Constant</span>
              <CheckCircle2 className="w-3 h-3 text-cyan-400" />
            </div>
          </div>
        </div>

        {/* Live Score Strip */}
        <div className="flex items-center justify-between text-[10px] font-mono pt-1 text-slate-400 border-t border-cyan-500/15">
          <span className="flex items-center gap-1 text-cyan-400">
            <BarChart3 className="w-3 h-3" />
            Real-Time Scoring
          </span>
          <span className="font-bold text-cyan-300">Score: 92/100 (92%)</span>
        </div>
      </div>
    );
  }

  // E-Learning Management System (PythonAcademy)
  return (
    <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-950/80 via-slate-900 to-violet-950/80 border border-purple-500/20 p-4 flex flex-col justify-between group-hover:border-purple-400/40 transition-colors">
      {/* Ambient Top Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />

      {/* LMS Header */}
      <div className="flex items-center justify-between border-b border-purple-500/15 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
            <GraduationCap className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-purple-300 block leading-tight">
              PythonAcademy LMS
            </span>
            <span className="text-[10px] text-purple-400/80 font-mono">
              Course Management
            </span>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-mono text-purple-300 flex items-center gap-1">
          <Award className="w-3 h-3" />
          Certified LMS
        </span>
      </div>

      {/* Mock Course Modules */}
      <div className="space-y-1.5 my-auto">
        <div className="p-2 rounded-xl bg-slate-900/80 border border-purple-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PlayCircle className="w-4 h-4 text-purple-400" />
            <span className="text-[11px] font-mono text-slate-200">
              Module 5: Django REST Framework APIs
            </span>
          </div>
          <span className="text-[10px] font-mono text-purple-300 font-bold">45m</span>
        </div>

        <div className="p-2 rounded-xl bg-slate-900/60 border border-purple-500/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-violet-400" />
            <span className="text-[11px] font-mono text-slate-400">
              Assignment: Relational Model Constraints
            </span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 font-bold">Graded</span>
        </div>
      </div>

      {/* Curriculum Progress */}
      <div className="space-y-1">
        <div className="flex justify-between text-[10px] font-mono text-slate-400">
          <span>Curriculum Completion</span>
          <span className="text-purple-300 font-bold">88% Finished</span>
        </div>
        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div className="w-[88%] h-full bg-gradient-to-r from-purple-500 to-violet-400 rounded-full" />
        </div>
      </div>
    </div>
  );
}
