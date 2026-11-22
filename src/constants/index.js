// ============================================================
// Site Data Constants — Toushif's High-Energy Portfolio
// ============================================================

export * from './projects';

export const navLinks = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "experience", title: "Experience" },
  { id: "contact", title: "Contact" },
];

export const heroData = {
  greeting: "Hello World! I'm",
  name: "Toushif",
  avatar: "/avatar.png",
  tagline: "Innovating at the Edge of Robotics & Artificial Intelligence",
  description: "Robotics Engineer • AI Developer • Full-Stack Builder",
  badges: [
    { label: "🤖 Robotics & Embedded Systems", color: "#FF5722" },
    { label: "⚡ Edge AI & Machine Learning", color: "#FF9800" },
    { label: "🔥 Open Source & Autonomous Agents", color: "#E65100" },
  ],
  stats: [
    { value: "10+", label: "Robotics & AI Repos" },
    { value: "ESP32 & Arduino", label: "Microcontrollers & Hardware" },
    { value: "ROS & C++", label: "Robotics & Control Stack" },
    { value: "100%", label: "Passion & Drive" },
  ],
};

export const aboutData = {
  intro:
    "I am an enthusiastic robotics engineer and software innovator fueled by the challenge of bridging tangible hardware with cutting-edge artificial intelligence. Whether designing microcontroller systems on ESP32-S3, developing autonomous AGVs, or building AI copilots and developer automation tools, I bring relentless energy, precision, and curiosity to every project I take on.",
  cards: [
    {
      title: "Robotics & Hardware",
      icon: "🤖",
      color: "#FF5722",
      description:
        "Humanoid robots, AGVs, biomechanical wrists — ESP32-S3, Arduino, Jetson Nano, ROS, C++.",
    },
    {
      title: "Edge AI & Vision",
      icon: "⚡",
      color: "#FF7043",
      description:
        "Computer vision pipelines, gesture tracking, audio classification, edge model benchmarking & optimization.",
    },
    {
      title: "Autonomous Agents",
      icon: "🔥",
      color: "#FF9800",
      description:
        "LLM mission planners, automated git workflows, conversational agents, and multi-modal assistants.",
    },
    {
      title: "Full-Stack & Tools",
      icon: "🚀",
      color: "#FFA726",
      description:
        "React, Node.js, Python FastAPI, installable PWAs, and open-source developer toolkits.",
    },
  ],
};

// ============================================================
// DISCIPLINE WHEEL & USAGE BREAKDOWNS (GitHub-Style Telemetry)
// ============================================================
export const disciplineBreakdowns = [
  {
    id: "languages",
    title: "Codebase Languages",
    subtitle: "Real GitHub Repository Telemetry",
    icon: "💻",
    description: "Calculated from total code volume across active repositories.",
    items: [
      { name: "Python", percentage: 58.4, color: "#3572A5" },
      { name: "TypeScript & JS", percentage: 17.2, color: "#3178C6" },
      { name: "C / C++", percentage: 12.6, color: "#F34B7D" },
      { name: "CSS & HTML", percentage: 8.8, color: "#563D7C" },
      { name: "Shell & Others", percentage: 3.0, color: "#89E051" },
    ],
  },
  {
    id: "hardware",
    title: "Microcontrollers & Hardware",
    subtitle: "Physical Embedded Ecosystem",
    icon: "🔌",
    description: "Proportion of hardware builds & microcontroller deployments.",
    items: [
      { name: "ESP32-S3 & ESP32", percentage: 40.0, color: "#FF5722" },
      { name: "Arduino (Uno/Mega/Nano)", percentage: 30.0, color: "#00979C" },
      { name: "NVIDIA Jetson Nano", percentage: 20.0, color: "#76B900" },
      { name: "Actuators & Sensors", percentage: 10.0, color: "#F59E0B" },
    ],
  },
  {
    id: "robotics",
    title: "Robotics Middleware & Control",
    subtitle: "Autonomy & Kinematics Software",
    icon: "⚙️",
    description: "Architectural distribution across robotics software stacks.",
    items: [
      { name: "ROS (Robot Operating System)", percentage: 45.0, color: "#EA580C" },
      { name: "AGV / AMR Navigation", percentage: 35.0, color: "#F59E0B" },
      { name: "Kinematics & Motor Control", percentage: 20.0, color: "#8B5CF6" },
    ],
  },
  {
    id: "ai-vision",
    title: "AI, Vision & Audio Perception",
    subtitle: "Machine Learning Pipelines",
    icon: "👁️",
    description: "Usage of vision tracking, acoustic ML, and edge inference.",
    items: [
      { name: "Computer Vision (OpenCV)", percentage: 45.0, color: "#2563EB" },
      { name: "Edge AI & TensorRT", percentage: 30.0, color: "#10B981" },
      { name: "Acoustic / Audio ML", percentage: 25.0, color: "#F59E0B" },
    ],
  },
];

export const experiences = [
  {
    title: "Robotics & AI Developer",
    subtitle: "Personal Projects & Open Source",
    date: "2024 — Present",
    type: "Current Focus",
    points: [
      "Developed multimodal humanoid robotics software integrating computer vision, speech pipelines, and embedded motor actuation.",
      "Developed Vitralume (job-fit-ai): AI candidate copilot featuring ATS scoring, skill-gap analysis, and truthful cover letter synthesis.",
      "Built edge-ai-bench: community benchmarking framework evaluating local LLM, STT, and TTS performance on resource-constrained hardware.",
      "Designed git-workflow-skill: comprehensive AI agent delivery automation for git branches, commits, PRs, and GitHub Projects.",
    ],
  },
  {
    title: "Embedded Systems & Autonomous AGV Systems",
    subtitle: "Robotics & Hardware Automation",
    date: "2025",
    type: "Robotics",
    points: [
      "Engineered autonomous AGV navigation pipelines translating natural language missions into validated motor commands.",
      "Developed computer vision pipelines for real-time item detection and spatial localization.",
      "Implemented hardware safety interlocks, sensor telemetry, and obstacle avoidance state machines.",
    ],
  },
  {
    title: "Biomechanics, Vision & Edge AI",
    subtitle: "Early Innovation & Prototyping",
    date: "2024 — 2025",
    type: "Foundations",
    points: [
      "Built CV-Cursor: sub-30ms real-time computer vision gesture cursor controller.",
      "Created a machine learning dog breed classifier utilizing vocal acoustic spectrogram analysis.",
      "Trained and deployed autonomous driving models on NVIDIA Jetson Nano for JetRacer robotics platform.",
      "Researched multi-DOF biomechanical actuation for human robotic prosthetics (Power Wrist flexion & extension).",
    ],
  },
];

export const socialLinks = {
  github: "https://github.com/Tash000",
  email: "mailto:toushif@example.com",
};
