export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  billingPeriod: string;
  description: string;
  features: string[];
  notIncluded: string[];
  badge?: string;
  popular: boolean;
  color: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 499,
    billingPeriod: "month",
    description: "Perfect for beginners taking their first step toward fitness.",
    features: [
      "Access to 20+ workout videos",
      "Basic progress tracking",
      "Community forum access",
      "3 live sessions/month",
      "Mobile app (iOS & Android)",
      "Email support",
    ],
    notIncluded: [
      "Personal trainer sessions",
      "Custom meal plans",
      "Advanced analytics",
    ],
    popular: false,
    color: "from-slate-500 to-slate-700",
  },
  {
    id: "pro",
    name: "Pro",
    price: 999,
    billingPeriod: "month",
    description: "The most popular plan for fitness enthusiasts who want results.",
    features: [
      "Unlimited workout videos",
      "Advanced progress tracking",
      "Community forum access",
      "15 live sessions/month",
      "Mobile app (iOS & Android)",
      "2 personal trainer sessions/month",
      "Basic meal plans",
      "Priority support",
    ],
    notIncluded: [
      "Custom meal plans",
    ],
    badge: "Most Popular",
    popular: true,
    color: "from-brand-orange to-brand-purple",
  },
  {
    id: "elite",
    name: "Elite",
    price: 1999,
    billingPeriod: "month",
    description: "The ultimate fitness experience with full personalization.",
    features: [
      "Unlimited workout videos",
      "Real-time analytics dashboard",
      "Community forum access",
      "Unlimited live sessions",
      "Mobile app (iOS & Android)",
      "Unlimited personal trainer sessions",
      "Custom meal plans by nutritionist",
      "DNA-based fitness analysis",
      "24/7 premium support",
      "Exclusive events & workshops",
    ],
    notIncluded: [],
    badge: "Best Value",
    popular: false,
    color: "from-brand-purple to-brand-cyan",
  },
];

export interface DashboardStat {
  id: string;
  label: string;
  value: string;
  unit: string;
  change: string;
  changeType: "up" | "down";
  icon: string;
  color: string;
}

export const dashboardStats: DashboardStat[] = [
  {
    id: "calories",
    label: "Calories Burned",
    value: "2,840",
    unit: "kcal",
    change: "+12%",
    changeType: "up",
    icon: "🔥",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "time",
    label: "Active Time",
    value: "6.5",
    unit: "hours",
    change: "+8%",
    changeType: "up",
    icon: "⏱️",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: "streak",
    label: "Current Streak",
    value: "14",
    unit: "days",
    change: "+2 days",
    changeType: "up",
    icon: "⚡",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "workouts",
    label: "Workouts Done",
    value: "23",
    unit: "sessions",
    change: "+3 this week",
    changeType: "up",
    icon: "💪",
    color: "from-emerald-500 to-teal-500",
  },
];

export const weeklyActivityData = [
  { day: "Mon", calories: 420, duration: 45 },
  { day: "Tue", calories: 0, duration: 0 },
  { day: "Wed", calories: 580, duration: 60 },
  { day: "Thu", calories: 340, duration: 35 },
  { day: "Fri", calories: 620, duration: 65 },
  { day: "Sat", calories: 480, duration: 50 },
  { day: "Sun", calories: 280, duration: 30 },
];

export const monthlyProgressData = [
  { week: "Week 1", weight: 82, target: 75 },
  { week: "Week 2", weight: 81.2, target: 75 },
  { week: "Week 3", weight: 80.1, target: 75 },
  { week: "Week 4", weight: 79.4, target: 75 },
  { week: "Week 5", weight: 78.5, target: 75 },
  { week: "Week 6", weight: 77.8, target: 75 },
  { week: "Week 7", weight: 76.9, target: 75 },
  { week: "Week 8", weight: 76.2, target: 75 },
];

export const upcomingWorkouts = [
  { id: "hiit-blast", title: "HIIT Blast", time: "Today, 7:00 AM", duration: "30 min", trainer: "Ananya Iyer" },
  { id: "yoga-flow", title: "Morning Yoga Flow", time: "Tomorrow, 6:30 AM", duration: "45 min", trainer: "Priya Sharma" },
  { id: "strength-core", title: "Strength & Core", time: "Thu, 6:00 PM", duration: "60 min", trainer: "Rahul Mehta" },
];
