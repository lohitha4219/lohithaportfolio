export const projects = [
  {
    id: "healthassist-ai",
    title: "HealthAssist AI",
    subtitle: "AI-Powered Healthcare & Clinical Assistant",
    tagline: "Intelligent medical assistance, doctor booking, and personal health organizer.",
    description: "A full-stack healthcare platform combining AI symptom analysis, verified doctor and hospital discovery, appointment scheduling, and validated medical report parsing with automated health insights.",
    features: [
      "AI healthcare symptom guidance and clinical insights engine",
      "Specialist doctor discovery & appointment booking pipeline",
      "Medical report parsing and personal health metrics dashboard",
      "JWT authentication with refresh-token rotation & PostgreSQL store"
    ],
    architecture: "React + Tailwind CSS frontend on Vercel connecting to a FastAPI (Python) backend on Render with PostgreSQL persistence via SQLAlchemy and cloud AI integration.",
    tags: ["Python", "FastAPI", "React", "PostgreSQL", "Tailwind CSS", "JWT Auth", "AI / LLM"],
    category: "AI & Healthcare Platform",
    liveUrl: "https://frontend-seven-jet-60.vercel.app/",
    githubUrl: "https://github.com/lohitha4219",
    accentColor: "#38bdf8",
    themeGradient: "from-sky-500/20 via-blue-500/10 to-cyan-500/20",
    borderGlow: "hover:border-sky-400/50",
    badgeColor: "bg-sky-500/10 text-sky-600 dark:text-sky-300 border-sky-500/20",
    icon: "HeartPulse",
    stats: {
      metrics: "Live on Vercel",
      database: "PostgreSQL on Render",
      tier: "React + FastAPI"
    }
  },
  {
    id: "kec-smart-campus",
    title: "KEC Smart Campus Solution",
    subtitle: "Kuppam Engineering College Campus Ecosystem",
    tagline: "Centralized academic, hostel, and institutional management system.",
    description: "An integrated smart campus portal for Kuppam Engineering College streamlining student & faculty administration, digital attendance monitoring, event notices, library access, and hostel room management.",
    features: [
      "Comprehensive student and faculty profile & activity management",
      "Digital attendance monitoring and departmental record tracking",
      "Centralized campus notices, event schedules, and announcements",
      "Hostel accommodation allocation and student complaint grievance portal"
    ],
    architecture: "Responsive React frontend with component-driven navigation, RESTful APIs, role-based authorization for students and faculty, and secure database persistence.",
    tags: ["React", "JavaScript", "Tailwind CSS", "REST APIs", "Node / Python", "Database"],
    category: "Campus Management Portal",
    liveUrl: "https://kec-fullstack.vercel.app/",
    githubUrl: "https://github.com/lohitha4219",
    accentColor: "#635BDB",
    themeGradient: "from-indigo-500/20 via-violet-500/10 to-blue-500/20",
    borderGlow: "hover:border-indigo-400/50",
    badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border-indigo-500/20",
    icon: "Building2",
    stats: {
      metrics: "Live on Vercel",
      database: "Institutional DB",
      tier: "Full Stack Campus"
    }
  },
  {
    id: "agriconnect-farmer-management",
    title: "AgriConnect – Farmer Management System",
    subtitle: "Smart Agriculture Management Platform",
    tagline: "Empowering farmers with digital crop tracking and smart market insights.",
    description: "A full-stack agricultural management platform engineered to assist farmers in tracking crop life cycles, managing agricultural inventory, monitoring weather advisories, and analyzing live commodity market prices.",
    features: [
      "Farmer registration and role-based secure authentication",
      "Crop tracking, seed scheduling, and farm inventory management",
      "Real-time weather forecast updates and agricultural advisories",
      "Dynamic market price tracking system with trend metrics"
    ],
    architecture: "Multi-tier architecture with modern responsive web frontend, Python backend services, and relational MySQL database schemas.",
    tags: ["Python", "MySQL", "Django", "JavaScript", "HTML5", "CSS3"],
    category: "Full-Stack Web App",
    liveUrl: "https://agriconnect-zeta-nine.vercel.app/",
    githubUrl: "https://github.com/lohitha4219",
    accentColor: "#10b981",
    themeGradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    borderGlow: "hover:border-emerald-400/50",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    icon: "Sprout",
    stats: {
      metrics: "Live on Vercel",
      database: "MySQL Relational DB",
      tier: "Python + MySQL"
    }
  },
  {
    id: "elearning-system",
    title: "E-Learning System",
    subtitle: "PythonAcademy Platform",
    tagline: "Digital course management and structured student progress tracking.",
    description: "A digital learning platform that enables students and instructors to seamlessly manage courses, multimedia learning materials, assignments, and curriculum progress.",
    features: [
      "Dual authentication pipelines for students and verified instructors",
      "Course catalog, curriculum creation, and enrollment workflows",
      "Interactive assignment submission pipeline and grading feedback",
      "Visual milestone tracking and student learning progress reports"
    ],
    architecture: "Modular full-stack architecture with React component hierarchy, Python application services, and role-based access control backed by MySQL.",
    tags: ["Python", "React", "MySQL", "REST APIs", "JavaScript", "Tailwind CSS"],
    category: "LMS Platform",
    liveUrl: "https://pythonacademy-frontend.vercel.app/",
    githubUrl: "https://github.com/lohitha4219",
    accentColor: "#a855f7",
    themeGradient: "from-purple-500/20 via-violet-500/10 to-cyan-500/20",
    borderGlow: "hover:border-purple-400/50",
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-500/20",
    icon: "GraduationCap",
    stats: {
      metrics: "Live on Vercel",
      database: "Relational MySQL",
      tier: "Full Stack LMS"
    }
  }
];
