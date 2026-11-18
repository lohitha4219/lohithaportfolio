import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="relative flex items-center justify-center w-10 h-10 rounded-full border border-[rgba(30,50,90,0.15)] dark:border-slate-700/60 bg-white dark:bg-slate-900/50 text-[#172033] dark:text-slate-200 hover:text-[#635BDB] dark:hover:text-cyan-400 hover:border-[#635BDB]/50 dark:hover:border-cyan-400/50 transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635BDB]/40 dark:focus:ring-cyan-400/50"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-cyan-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
        )}
      </motion.div>
    </button>
  );
}
