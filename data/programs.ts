export interface Program {
  id: string;
  title: string;
  category: string;
  duration: string;
  level: string;
  sessions: number;
  calories: number;
  description: string;
  color: string;
  icon: string;
  tags: string[];
}

export const programs: Program[] = [
  {
    id: "yoga-flow",
    title: "Morning Yoga Flow",
    category: "Yoga",
    duration: "45 min",
    level: "Beginner",
    sessions: 24,
    calories: 220,
    description: "Start your day with mindful stretches and breathing exercises to energize your body and calm your mind.",
    color: "from-purple-500 to-indigo-600",
    icon: "🧘",
    tags: ["Flexibility", "Mindfulness", "Low Impact"],
  },
  {
    id: "hiit-blast",
    title: "HIIT Blast",
    category: "Cardio",
    duration: "30 min",
    level: "Intermediate",
    sessions: 36,
    calories: 480,
    description: "High-intensity interval training designed to torch calories and push your cardiovascular limits.",
    color: "from-orange-500 to-red-600",
    icon: "🔥",
    tags: ["Fat Burn", "Cardio", "High Intensity"],
  },
  {
    id: "strength-core",
    title: "Strength & Core",
    category: "Strength",
    duration: "60 min",
    level: "Advanced",
    sessions: 48,
    calories: 380,
    description: "Build functional strength with compound movements and targeted core work for a powerful physique.",
    color: "from-emerald-500 to-teal-600",
    icon: "💪",
    tags: ["Muscle Building", "Core", "Weights"],
  },
  {
    id: "power-cycling",
    title: "Power Cycling",
    category: "Cardio",
    duration: "45 min",
    level: "Intermediate",
    sessions: 20,
    calories: 520,
    description: "Indoor cycling sessions with energizing music and interval sprints to boost endurance.",
    color: "from-cyan-500 to-blue-600",
    icon: "🚴",
    tags: ["Endurance", "Cardio", "Low Impact"],
  },
  {
    id: "pilates-reform",
    title: "Pilates Reform",
    category: "Yoga",
    duration: "50 min",
    level: "Beginner",
    sessions: 18,
    calories: 260,
    description: "Reformer-based Pilates to sculpt lean muscles, improve posture, and enhance core stability.",
    color: "from-pink-500 to-rose-600",
    icon: "🌸",
    tags: ["Toning", "Posture", "Low Impact"],
  },
  {
    id: "boxing-fit",
    title: "Boxing Fit",
    category: "Strength",
    duration: "55 min",
    level: "Intermediate",
    sessions: 30,
    calories: 600,
    description: "Combine the art of boxing with fitness conditioning for an explosive full-body workout.",
    color: "from-yellow-500 to-orange-600",
    icon: "🥊",
    tags: ["Full Body", "Cardio", "Coordination"],
  },
];

export const categories = ["All", "Yoga", "Cardio", "Strength"];
