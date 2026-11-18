import React from 'react';
import { 
  HeartPulse,
  Activity,
  UserCheck,
  FileText,
  Building2,
  Users,
  CalendarCheck,
  Home,
  Sprout, 
  CloudSun, 
  TrendingUp, 
  Database,
  GraduationCap, 
  PlayCircle, 
  BookOpen, 
  Award,
  CheckCircle2,
  Stethoscope
} from 'lucide-react';

export default function ProjectThumbnail({ project }) {
  // Project 1: HealthAssist AI
  if (project.id === 'healthassist-ai') {
    return (
      <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-sky-950/80 via-slate-900 to-blue-950/80 border border-sky-500/20 p-4 flex flex-col justify-between group-hover:border-sky-400/40 transition-colors">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/15 rounded-full blur-2xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-sky-500/15 pb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400">
              <HeartPulse className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-sky-300 block leading-tight">
                HealthAssist AI
              </span>
              <span className="text-[10px] text-sky-400/80 font-mono">
                Clinical Health Assistant
              </span>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-[10px] font-mono text-sky-300 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live Vercel
          </span>
        </div>

        {/* Mock UI: Health Vitals & Doctor Booking */}
        <div className="grid grid-cols-3 gap-2 my-auto">
          <div className="p-2 rounded-xl bg-slate-900/80 border border-sky-500/15 text-center">
            <Activity className="w-4 h-4 text-rose-400 mx-auto mb-1 animate-pulse" />
            <span className="text-[10px] text-slate-400 block font-mono">AI Triage</span>
            <span className="text-xs font-bold text-slate-200">Active Guidance</span>
          </div>

          <div className="p-2 rounded-xl bg-slate-900/80 border border-sky-500/15 text-center">
            <Stethoscope className="w-4 h-4 text-sky-400 mx-auto mb-1" />
            <span className="text-[10px] text-slate-400 block font-mono">Doctors</span>
            <span className="text-xs font-bold text-sky-300">Verified MDs</span>
          </div>

          <div className="p-2 rounded-xl bg-slate-900/80 border border-sky-500/15 text-center">
            <FileText className="w-4 h-4 text-teal-400 mx-auto mb-1" />
            <span className="text-[10px] text-slate-400 block font-mono">Reports</span>
            <span className="text-xs font-bold text-teal-300">Parsed PDF</span>
          </div>
        </div>

        {/* Diagnostic Status Bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-[10px] font-mono text-slate-400">
            <span>FastAPI + PostgreSQL Pipeline</span>
            <span className="text-sky-300 font-bold">JWT Secured</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="w-[96%] h-full bg-gradient-to-r from-sky-400 to-blue-500 rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  // Project 2: KEC Smart Campus Solution
  if (project.id === 'kec-smart-campus') {
    return (
      <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-950/80 via-slate-900 to-violet-950/80 border border-indigo-500/20 p-4 flex flex-col justify-between group-hover:border-indigo-400/40 transition-colors">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/15 rounded-full blur-2xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-indigo-500/15 pb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-indigo-300 block leading-tight">
                KEC Smart Campus
              </span>
              <span className="text-[10px] text-indigo-400/80 font-mono">
                Institutional Portal
              </span>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-mono text-indigo-300 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Live Vercel
          </span>
        </div>

        {/* Mock UI: Campus Modules */}
        <div className="grid grid-cols-3 gap-2 my-auto">
          <div className="p-2 rounded-xl bg-slate-900/80 border border-indigo-500/15 text-center">
            <Users className="w-4 h-4 text-indigo-400 mx-auto mb-1" />
            <span className="text-[10px] text-slate-400 block font-mono">Students</span>
            <span className="text-xs font-bold text-slate-200">Enrolled Depts</span>
          </div>

          <div className="p-2 rounded-xl bg-slate-900/80 border border-indigo-500/15 text-center">
            <CalendarCheck className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
            <span className="text-[10px] text-slate-400 block font-mono">Attendance</span>
            <span className="text-xs font-bold text-emerald-300">Digital Track</span>
          </div>

          <div className="p-2 rounded-xl bg-slate-900/80 border border-indigo-500/15 text-center">
            <Home className="w-4 h-4 text-violet-400 mx-auto mb-1" />
            <span className="text-[10px] text-slate-400 block font-mono">Hostel</span>
            <span className="text-xs font-bold text-violet-300">Room Alloc</span>
          </div>
        </div>

        {/* System Status Bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-[10px] font-mono text-slate-400">
            <span>Campus Services Coverage</span>
            <span className="text-indigo-300 font-bold">100% Operational</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="w-[100%] h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  // Project 3: AgriConnect – Farmer Management System
  if (project.id === 'agriconnect-farmer-management') {
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
            Live Vercel
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

  // Project 4: E-Learning System (PythonAcademy)
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
