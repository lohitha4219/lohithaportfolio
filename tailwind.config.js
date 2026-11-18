/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#F5F7FC',
          surface: '#FFFFFF',
          surface2: '#EDF1FA',
          text: '#172033',
          muted: '#526078',
          accent: '#635BDB',
          border: 'rgba(30, 50, 90, 0.12)',
        },
        navy: {
          950: '#030712',
          900: '#060d1f',
          850: '#0a122c',
          800: '#0f1b3b',
          700: '#1e293b',
        },
        midnight: '#070d1d',
        cyan: {
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glass': '0 20px 50px -15px rgba(0, 0, 0, 0.5)',
        'glass-light': '0 10px 30px -5px rgba(30, 50, 90, 0.08)',
        'glow-cyan': '0 0 35px rgba(56, 189, 248, 0.25)',
        'glow-violet': '0 0 35px rgba(139, 92, 246, 0.25)',
        'glow-accent': '0 0 35px rgba(99, 91, 219, 0.25)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
