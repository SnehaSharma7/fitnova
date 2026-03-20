export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: string;
  rest: string;
  duration?: string;
  muscle: string;
  difficulty: string;
  instructions: string[];
  completed?: boolean;
}

export interface Workout {
  id: string;
  title: string;
  category: string;
  duration: string;
  calories: number;
  level: string;
  trainer: string;
  description: string;
  warmup: string;
  cooldown: string;
  exercises: Exercise[];
  tags: string[];
  thumbnail: string;
}

export const workouts: Workout[] = [
  {
    id: "hiit-blast",
    title: "HIIT Blast",
    category: "Cardio",
    duration: "30 min",
    calories: 480,
    level: "Intermediate",
    trainer: "Ananya Iyer",
    description: "A high-intensity interval training session designed to maximize calorie burn and boost metabolism for hours after your workout.",
    warmup: "5 min light jog + dynamic stretches",
    cooldown: "5 min static stretches + deep breathing",
    thumbnail: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&h=500&fit=crop",
    tags: ["Fat Burn", "Cardio", "No Equipment"],
    exercises: [
      {
        id: "jump-squats",
        name: "Jump Squats",
        sets: 4,
        reps: "15 reps",
        rest: "30s",
        muscle: "Legs, Glutes",
        difficulty: "Intermediate",
        instructions: ["Stand with feet shoulder-width apart", "Lower into a squat position", "Explode upward, jumping off the ground", "Land softly and immediately go into next rep"],
      },
      {
        id: "burpees",
        name: "Burpees",
        sets: 3,
        reps: "12 reps",
        rest: "45s",
        muscle: "Full Body",
        difficulty: "Hard",
        instructions: ["Start standing, drop to push-up position", "Perform a push-up", "Jump feet to hands", "Explode up with arms overhead"],
      },
      {
        id: "mountain-climbers",
        name: "Mountain Climbers",
        sets: 4,
        reps: "30 seconds",
        duration: "30s",
        rest: "20s",
        muscle: "Core, Shoulders",
        difficulty: "Intermediate",
        instructions: ["Start in high plank position", "Drive right knee toward chest", "Return and drive left knee", "Alternate rapidly, keeping hips level"],
      },
      {
        id: "high-knees",
        name: "High Knees",
        sets: 3,
        reps: "45 seconds",
        duration: "45s",
        rest: "15s",
        muscle: "Hip Flexors, Core",
        difficulty: "Easy",
        instructions: ["Stand tall with feet hip-width apart", "Drive knees up to hip height alternately", "Pump arms in running motion", "Maintain a fast pace"],
      },
      {
        id: "plank-jacks",
        name: "Plank Jacks",
        sets: 3,
        reps: "20 reps",
        rest: "30s",
        muscle: "Core, Shoulders",
        difficulty: "Intermediate",
        instructions: ["Begin in forearm plank", "Jump feet wide apart", "Jump feet back together", "Keep core tight throughout"],
      },
      {
        id: "lateral-shuffles",
        name: "Lateral Shuffles",
        sets: 3,
        reps: "20 reps each side",
        rest: "30s",
        muscle: "Legs, Agility",
        difficulty: "Easy",
        instructions: ["Assume athletic stance", "Shuffle laterally 4-5 steps", "Change direction explosively", "Stay low throughout the movement"],
      },
    ],
  },
  {
    id: "strength-core",
    title: "Strength & Core",
    category: "Strength",
    duration: "60 min",
    calories: 380,
    level: "Advanced",
    trainer: "Rahul Mehta",
    description: "Build functional strength and a solid core with compound movements and targeted isolation exercises.",
    warmup: "5 min cardio + mobility drills",
    cooldown: "10 min stretching + foam rolling",
    thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop",
    tags: ["Muscle Building", "Core", "Weights"],
    exercises: [
      {
        id: "deadlift",
        name: "Barbell Deadlift",
        sets: 4,
        reps: "5 reps",
        rest: "3 min",
        muscle: "Full Body",
        difficulty: "Hard",
        instructions: ["Set up with bar over mid-foot", "Grip bar just outside legs", "Drive through floor keeping back flat", "Lock out hips at top"],
      },
      {
        id: "bench-press",
        name: "Bench Press",
        sets: 4,
        reps: "8 reps",
        rest: "2 min",
        muscle: "Chest, Triceps",
        difficulty: "Intermediate",
        instructions: ["Lie flat on bench, grip bar slightly wider than shoulders", "Lower bar to mid-chest with elbows at 45°", "Press explosively back to start", "Maintain arch and tight back"],
      },
      {
        id: "pull-ups",
        name: "Pull-ups",
        sets: 3,
        reps: "Max reps",
        rest: "2 min",
        muscle: "Back, Biceps",
        difficulty: "Hard",
        instructions: ["Hang from bar with overhand grip", "Pull chest toward bar leading with elbows", "Lower with control", "Full extension at bottom"],
      },
      {
        id: "plank",
        name: "Plank Hold",
        sets: 3,
        reps: "60 seconds",
        duration: "60s",
        rest: "1 min",
        muscle: "Core",
        difficulty: "Intermediate",
        instructions: ["Forearms flat on ground, elbows under shoulders", "Body forms straight line head to heels", "Squeeze glutes and brace abs", "Breathe steadily throughout"],
      },
    ],
  },
  {
    id: "yoga-flow",
    title: "Morning Yoga Flow",
    category: "Yoga",
    duration: "45 min",
    calories: 220,
    level: "Beginner",
    trainer: "Priya Sharma",
    description: "A gentle yet energizing morning yoga sequence to wake up your body and set a positive tone for the day.",
    warmup: "5 min breathwork and body scan",
    cooldown: "Savasana 5 min",
    thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=500&fit=crop",
    tags: ["Flexibility", "Mindfulness", "Morning"],
    exercises: [
      {
        id: "sun-salutation",
        name: "Sun Salutation A",
        sets: 3,
        reps: "Full rounds",
        rest: "30s",
        muscle: "Full Body",
        difficulty: "Easy",
        instructions: ["Mountain pose, hands at heart center", "Extend arms overhead, slight backbend", "Forward fold, flat back", "Flow through vinyasa sequence"],
      },
      {
        id: "warrior-two",
        name: "Warrior II",
        sets: 2,
        reps: "60s each side",
        duration: "60s",
        rest: "20s",
        muscle: "Legs, Hips",
        difficulty: "Easy",
        instructions: ["Step feet wide apart", "Front foot forward, back foot perpendicular", "Bend front knee to 90°", "Arms parallel to ground, gaze over front hand"],
      },
    ],
  },
];
