export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  review: string;
  program: string;
  weightLost?: string;
  duration: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sneha Varma",
    role: "Marketing Manager",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "FitNova completely transformed my relationship with fitness. The HIIT programs are incredibly well-designed, and within 3 months I lost 12kg while feeling stronger than ever!",
    program: "HIIT Blast",
    weightLost: "12kg",
    duration: "3 months",
  },
  {
    id: "t2",
    name: "Aryan Patel",
    role: "Software Engineer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "The strength programs here are phenomenal. Trainer Rahul's guidance through the app helped me add 20kg to my deadlift in just 8 weeks. The progress tracking keeps me motivated daily.",
    program: "Strength & Core",
    duration: "8 weeks",
  },
  {
    id: "t3",
    name: "Meera Nambiar",
    role: "Teacher",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b131?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "As a beginner, I was intimidated to start. But FitNova's yoga programs were perfect — easy to follow with excellent instructions. My flexibility and mental clarity have improved tremendously.",
    program: "Morning Yoga Flow",
    duration: "2 months",
  },
  {
    id: "t4",
    name: "Rohan Gupta",
    role: "Entrepreneur",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 4,
    review: "The dashboard and progress tracking features are outstanding. I love seeing my streak counter grow. The variety of programs ensures I never get bored. Highly recommend!",
    program: "Power Cycling",
    duration: "5 months",
  },
  {
    id: "t5",
    name: "Divya Menon",
    role: "Doctor",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "The quality of trainers on FitNova is exceptional. Priya's yoga sessions have helped me manage work stress and improve my sleep quality. This app is worth every rupee.",
    program: "Pilates Reform",
    duration: "4 months",
  },
  {
    id: "t6",
    name: "Karthik Subramanian",
    role: "IT Consultant",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "I tried multiple fitness apps before FitNova. The UI is sleek, the content is premium, and the community keeps you accountable. Lost 8kg and gained significant muscle definition.",
    program: "Boxing Fit",
    weightLost: "8kg",
    duration: "6 months",
  },
];
