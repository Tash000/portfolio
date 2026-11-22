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
    { value: "ESP32 / Jetson", label: "Edge Hardware" },
    { value: "ROS / C++ / Python", label: "Core Stack" },
    { value: "100%", label: "Passion & Drive" },
  ]
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

export const skills = [
  { name: "Python", level: 92, category: "Languages" },
  { name: "C/C++", level: 85, category: "Languages" },
  { name: "JavaScript", level: 78, category: "Languages" },
  { name: "React", level: 75, category: "Frontend" },
  { name: "HTML/CSS", level: 82, category: "Frontend" },
  { name: "FastAPI / Node", level: 70, category: "Backend" },
  { name: "OpenCV", level: 85, category: "AI & Vision" },
  { name: "TensorFlow / PyTorch", level: 70, category: "AI & Vision" },
  { name: "Edge AI / TensorRT", level: 75, category: "AI & Vision" },
  { name: "ESP32-S3 & ESP32", level: 90, category: "Hardware" },
  { name: "NVIDIA Jetson Nano", level: 80, category: "Hardware" },
  { name: "Arduino / Microcontrollers", level: 88, category: "Hardware" },
  { name: "ROS (Robot Operating System)", level: 82, category: "Tools" },
  { name: "Git & GitHub CLI", level: 90, category: "Tools" },
  { name: "Linux / Shell", level: 80, category: "Tools" },
  { name: "Docker", level: 60, category: "Tools" },
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
