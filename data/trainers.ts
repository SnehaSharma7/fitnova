export interface Trainer {
  id: string;
  name: string;
  specialization: string;
  category: string;
  level: string;
  rating: number;
  reviews: number;
  experience: string;
  clients: number;
  bio: string;
  image: string;
  tags: string[];
  featured: boolean;
  pricePerSession: number;
}

export const trainers: Trainer[] = [
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    specialization: "Yoga & Meditation",
    category: "Yoga",
    level: "All Levels",
    rating: 4.9,
    reviews: 384,
    experience: "8 years",
    clients: 1200,
    bio: "RYT-500 certified yoga instructor specializing in Hatha and Vinyasa flow. Passionate about mind-body connection.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop&crop=face",
    tags: ["Hatha", "Vinyasa", "Meditation", "Pranayama"],
    featured: true,
    pricePerSession: 1200,
  },
  {
    id: "rahul-mehta",
    name: "Rahul Mehta",
    specialization: "Strength & Conditioning",
    category: "Strength",
    level: "Intermediate",
    rating: 4.8,
    reviews: 267,
    experience: "6 years",
    clients: 850,
    bio: "NSCA-CSCS certified strength coach. Former national-level powerlifter helping athletes reach peak performance.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=400&fit=crop&crop=face",
    tags: ["Powerlifting", "Hypertrophy", "Olympic Lifts", "Nutrition"],
    featured: true,
    pricePerSession: 1500,
  },
  {
    id: "ananya-iyer",
    name: "Ananya Iyer",
    specialization: "HIIT & Cardio",
    category: "Cardio",
    level: "All Levels",
    rating: 4.9,
    reviews: 512,
    experience: "5 years",
    clients: 1600,
    bio: "ACE-certified group fitness instructor with expertise in high-energy cardio and metabolic conditioning.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop&crop=face",
    tags: ["HIIT", "Zumba", "Step Aerobics", "Fat Loss"],
    featured: false,
    pricePerSession: 1100,
  },
  {
    id: "vikram-nair",
    name: "Vikram Nair",
    specialization: "Boxing & Combat Fitness",
    category: "Strength",
    level: "Beginner",
    rating: 4.7,
    reviews: 198,
    experience: "10 years",
    clients: 640,
    bio: "Ex-professional boxer and certified personal trainer. Specializes in boxing fitness for all skill levels.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=400&fit=crop&crop=face",
    tags: ["Boxing", "Kickboxing", "Agility", "Core"],
    featured: false,
    pricePerSession: 1800,
  },
  {
    id: "kavita-reddy",
    name: "Kavita Reddy",
    specialization: "Pilates & Flexibility",
    category: "Yoga",
    level: "Beginner",
    rating: 4.8,
    reviews: 321,
    experience: "7 years",
    clients: 950,
    bio: "STOTT PILATES certified instructor. Helps clients build core strength, flexibility, and body awareness.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop&crop=face",
    tags: ["Pilates", "Barre", "Flexibility", "Rehabilitation"],
    featured: true,
    pricePerSession: 1300,
  },
  {
    id: "arjun-kapoor",
    name: "Arjun Kapoor",
    specialization: "Functional Fitness",
    category: "Strength",
    level: "Advanced",
    rating: 4.6,
    reviews: 143,
    experience: "4 years",
    clients: 420,
    bio: "CrossFit Level-2 trainer focused on functional movement patterns and athletic performance enhancement.",
    image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=400&h=400&fit=crop&crop=face",
    tags: ["CrossFit", "Functional", "Mobility", "Performance"],
    featured: false,
    pricePerSession: 1600,
  },
  {
    id: "deepa-krishnan",
    name: "Deepa Krishnan",
    specialization: "Cycling & Endurance",
    category: "Cardio",
    level: "Intermediate",
    rating: 4.9,
    reviews: 289,
    experience: "9 years",
    clients: 780,
    bio: "Cycling coach and triathlete. Designs periodized endurance programs for recreational and competitive athletes.",
    image: "https://images.unsplash.com/photo-1486218119243-13301543a1b4?w=400&h=400&fit=crop&crop=face",
    tags: ["Cycling", "Running", "Triathlon", "Endurance"],
    featured: false,
    pricePerSession: 1400,
  },
  {
    id: "siddharth-bose",
    name: "Siddharth Bose",
    specialization: "Weight Loss & Nutrition",
    category: "Cardio",
    level: "Beginner",
    rating: 4.7,
    reviews: 453,
    experience: "6 years",
    clients: 1100,
    bio: "Certified nutritionist and fitness coach specializing in sustainable weight management and lifestyle transformation.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=face",
    tags: ["Weight Loss", "Nutrition", "Lifestyle", "Cardio"],
    featured: true,
    pricePerSession: 1000,
  },
];

export const trainerCategories = ["All", "Yoga", "Cardio", "Strength"];
export const trainerLevels = ["All Levels", "Beginner", "Intermediate", "Advanced"];
