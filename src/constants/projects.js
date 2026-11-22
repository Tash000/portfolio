// ============================================================
// PROJECTS CONFIGURATION
// ============================================================
// You have 100% full control over which projects are shown or hidden!
// - Set `visible: true` to display a project, or `visible: false` to hide it.
// - Set `isPrivate: true` for private repos — they will display with a
//   "🔒 Private Repo" badge and a "Request Access" button so collaborators
//   or recruiters can contact you for access.
// - Set `featured: true` to pin top projects at the top.
// ============================================================

export const projectsData = [
  // --- FEATURED / PRIVATE ROBOTICS & HARDWARE ---
  {
    id: 'humanoid-assistant',
    title: 'Humanoid Assistant',
    description: 'Intelligent physical assistant software integrating perception, multimodal LLM reasoning, conversational memory, and motor coordination for robotic embodiments.',
    category: 'Robotics',
    image: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Robotics', 'Multimodal AI', 'Speech', 'ROS'],
    isPrivate: true,
    visible: true,
    featured: true,
    githubUrl: null, // Private repo
    highlights: 'Multimodal perception, context-aware command parser, robot state machine',
  },
  {
    id: 'autonomous-agv',
    title: 'Autonomous AGV Planning & Execution',
    description: 'Natural language mission planner converting human speech/text instructions into validated mission JSON, dispatched to deterministic automated guided vehicle (AGV) execution motors.',
    category: 'Robotics',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'AGV', 'Mission Planning', 'NLP', 'Embedded'],
    isPrivate: true,
    visible: true,
    featured: false,
    githubUrl: null, // Private repo
    highlights: 'JSON schema validation, obstacle avoidance state graph, safety interlocks',
  },
  {
    id: 'power-wrist',
    title: 'Power Wrist Biomechanical Prosthetic',
    description: 'Biomechanical robotic wrist system capable of active Flexion, Extension, and Abduction motions with force feedback control and responsive angle positioning.',
    category: 'Robotics',
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80',
    tags: ['C++', 'Biomechanics', 'Actuators', 'Kinematics', 'Embedded'],
    isPrivate: true,
    visible: true,
    featured: false,
    githubUrl: null,
    highlights: 'Multi-degree-of-freedom actuation, sensor telemetry, torque safety margins',
  },

  // --- AI & FULL STACK (PUBLIC REPOS) ---
  {
    id: 'job-fit-ai',
    title: 'Vitralume — AI Job Application Copilot',
    description: 'Comprehensive AI copilot for candidates: job suitability & skill gap analysis, ATS resume scoring engine, semantic research matching, and truthfulness-guarded cover letter generation. Web app + installable PWA.',
    category: 'AI & Full-Stack',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'LLM', 'ATS Scoring', 'FastAPI', 'PWA', 'React'],
    isPrivate: false,
    visible: true,
    featured: true,
    githubUrl: 'https://github.com/Tash000/job-fit-ai',
    demoUrl: null,
    highlights: 'Hallucination-guarded prompt pipeline, automated ATS keyword extractor',
  },
  {
    id: 'git-workflow-skill',
    title: 'Gitflow AI Delivery Skill',
    description: 'End-to-end GitHub delivery skill engineered for autonomous AI coding agents: branch isolation → atomic commits → test validation → PR generation → merge → branch cleanup → GitHub Projects tracking. Stack-agnostic and team safe.',
    category: 'Dev Tools',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80',
    tags: ['JavaScript', 'AI Agents', 'GitHub CLI', 'Automation', 'DevOps'],
    isPrivate: false,
    visible: true,
    featured: true,
    githubUrl: 'https://github.com/Tash000/git-workflow-skill',
    demoUrl: null,
    highlights: 'Branch protection checks, automated semantic commit linting, PR synthesis',
  },
  {
    id: 'edge-ai-bench',
    title: 'Edge AI Benchmarking Suite',
    description: 'Community-driven benchmarking tool for measuring latency, memory usage, tokens/sec, and accuracy of local AI models (LLMs, Whisper STT, TTS) on low-end and mid-range edge hardware.',
    category: 'AI & Full-Stack',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Edge AI', 'Benchmarking', 'LLM', 'Whisper', 'Hardware'],
    isPrivate: false,
    visible: true,
    featured: false,
    githubUrl: 'https://github.com/Tash000/edge-ai-bench',
    demoUrl: null,
    highlights: 'Normalized score calculation, hardware telemetry logging, JSON export',
  },
  {
    id: 'dog-breed-classifier',
    title: 'Dog Breed Audio Classifier',
    description: 'A desktop GUI machine learning application that identifies dog breeds purely based on acoustic vocalization patterns, bark frequency spectra, and audio feature extraction.',
    category: 'AI & Full-Stack',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Audio Processing', 'Machine Learning', 'GUI', 'Classification'],
    isPrivate: false,
    visible: true,
    featured: false,
    githubUrl: 'https://github.com/Tash000/DogBreedAudioClassifier',
    demoUrl: null,
    highlights: 'MFCC audio extraction, spectrogram analysis, interactive desktop UI',
  },
  {
    id: 'cv-cursor',
    title: 'CV-Cursor: Gesture Controller',
    description: 'Real-time computer vision mouse cursor navigation and click trigger system using webcam hand tracking and spatial gesture recognition with zero specialized hardware.',
    category: 'AI & Full-Stack',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'OpenCV', 'Hand Tracking', 'Computer Vision'],
    isPrivate: false,
    visible: true,
    featured: false,
    githubUrl: 'https://github.com/Tash000/CV-Cursor',
    demoUrl: null,
    highlights: 'Sub-30ms gesture latency, smooth cursor filtering, pinch click detection',
  },
  {
    id: 'jetson-nano',
    title: 'Jetson Nano JetRacer Autonomy',
    description: 'NVIDIA Jetson Nano edge AI autonomous navigation platform for JetRacer robot cars: tensorRT accelerated neural vision, line following, and dynamic obstacle avoidance.',
    category: 'Robotics',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80',
    tags: ['NVIDIA Jetson', 'Edge AI', 'TensorRT', 'Autonomous Driving'],
    isPrivate: false,
    visible: true,
    featured: false,
    githubUrl: 'https://github.com/Tash000/Jetson-Nano',
    demoUrl: null,
    highlights: 'TensorRT model acceleration, real-time camera inference at 30 FPS',
  },
];
