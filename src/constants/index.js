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
  greeting: "Engineering the Future • I'm",
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
  ],
};

export const aboutData = {
  intro:
    "I developed an early passion for fixing things and working hands-on with electronics and hardware. Understanding circuits and microcontrollers naturally evolved into building robotics and automation systems. As I learned to code and dove into software development, I expanded into artificial intelligence, autonomous agents, and computer vision. I thrive on learning new technologies every day and building solutions whenever an opportunity presents itself.",
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
    title: "Languages",
    subtitle: "Real GitHub Repository Telemetry",
    icon: "💻",
    description: "Calculated from total code volume across active GitHub repositories.",
    items: [
      { name: "Python", percentage: 57.6, color: "#3572A5" },
      { name: "TypeScript", percentage: 27.9, color: "#3178C6" },
      { name: "CSS", percentage: 11.1, color: "#563D7C" },
      { name: "JavaScript", percentage: 2.3, color: "#F1E05A" },
      { name: "HTML", percentage: 0.9, color: "#E34C26" },
      { name: "Shell", percentage: 0.1, color: "#89E051" },
      { name: "Other", percentage: 0.1, color: "#94A3B8" },
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
    stage: "Stage 01",
    stageLabel: "Foundations & Learning",
    title: "Learning & Foundations: Vision, Hardware & Biomechanics",
    subtitle: "Rapid Prototyping, CAD & Machine Vision Exploration",
    date: "2022 — 2024",
    type: "Foundations",
    icon: "🛠️",
    points: [
      "Researched and built multi-DOF biomechanical actuation mechanisms (Power Wrist active flexion & extension) with CAD modeling, motor control, and sensor telemetry.",
      "Built CV-Cursor: sub-30ms real-time computer vision gesture cursor controller using webcam hand tracking.",
      "Created a machine learning dog breed classifier utilizing vocal acoustic spectrogram analysis with an interactive desktop GUI.",
      "Trained and deployed edge vision neural networks on NVIDIA Jetson Nano for the JetRacer autonomous driving platform.",
      "Engineered embedded microcontroller firmware on Arduino and ESP32 for sensor acquisition and low-latency motor driving.",
    ],
  },
  {
    stage: "Stage 02",
    stageLabel: "Next Level • Industrial Systems",
    title: "Autonomous AGVs & Industrial Robotics",
    subtitle: "ROS Middleware, Mission Planning & Real-Time Automation",
    date: "2024 — 2025",
    type: "Robotics & AGVs",
    icon: "⚙️",
    points: [
      "Engineered autonomous AGV navigation pipelines translating natural language mission directives into validated deterministic mission JSON.",
      "Dispatched validated missions to ROS nodes, deterministic motor controllers, and obstacle avoidance state machines.",
      "Developed computer vision pipelines for real-time item detection, spatial tracking, and industrial localization.",
      "Implemented hardware safety interlocks, sensor telemetry streaming, and automated fault recovery protocols.",
    ],
  },
  {
    stage: "Stage 03",
    stageLabel: "Current Focus • What I'm Building",
    title: "AI Copilots, Autonomous Agents & Edge Benchmarking",
    subtitle: "Personal Projects, Open Source & Modern AI Software",
    date: "2025 — Present",
    type: "Current Focus",
    icon: "🚀",
    points: [
      "Engineered Vitralume (job-fit-ai): full-featured AI candidate copilot featuring ATS scoring engine, skill-gap analysis, and hallucination-guarded cover letter synthesis (React + PWA + FastAPI).",
      "Built edge-ai-bench: community benchmarking framework evaluating local LLM, Whisper STT, and TTS performance and token latency on constrained edge hardware.",
      "Designed git-workflow-skill: comprehensive AI agent delivery automation for git branch isolation, atomic commits, PR synthesis, and GitHub Projects tracking.",
      "Developing multimodal physical assistant software integrating vision perception, speech agent pipelines, and embedded motor actuation.",
    ],
  },
];

export const socialLinks = {
  github: "https://github.com/Tash000",
  email: "mailto:toushif.ahammad.m@gmail.com",
  emailRaw: "toushif.ahammad.m@gmail.com",
  linkedin: "https://www.linkedin.com/in/toushif092025",
};
